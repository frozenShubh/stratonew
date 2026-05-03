from fastapi import FastAPI, APIRouter, HTTPException, Depends, HTTPException, status
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from fastapi.security import APIKeyHeader
import os
import logging
from pathlib import Path
from pydantic import BaseModel, EmailStr
from typing import Optional
import uuid
from datetime import datetime, timezone
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from agent import run_weekly_agent_workflow


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Define Models
class ContactSubmissionCreate(BaseModel):
    name: str
    email: EmailStr
    company: str
    phone: Optional[str] = None
    challenge: str

# API Key authentication & Vercel Cron authentication
API_KEY = os.environ.get('API_KEY', 'stratosport-api-key-2024')
CRON_SECRET = os.environ.get('CRON_SECRET')

from fastapi import Header

async def verify_agent_auth(
    x_api_key: Optional[str] = Header(None, alias="X-API-Key"),
    authorization: Optional[str] = Header(None)
):
    """
    Allows either X-API-Key (for manual triggers) OR 
    Vercel's Authorization: Bearer <CRON_SECRET> (for automated crons)
    """
    # 1. Check API Key
    if x_api_key and x_api_key == API_KEY:
        return True
        
    # 2. Check Vercel Cron Secret
    if authorization and authorization.startswith("Bearer "):
        token = authorization.split(" ")[1]
        if CRON_SECRET and token == CRON_SECRET:
            return True

    raise HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Unauthorized: Invalid API Key or Cron Secret"
    )

# Email configuration
BREVO_API_KEY = os.environ.get('BREVO_API_KEY')
TO_EMAIL = 'shubham.agrawal@stratosport.in'

def send_contact_email(name: str, email: str, company: str, phone: str, challenge: str):
    """Send contact form submission via Brevo API"""
    try:
        import requests

        url = "https://api.brevo.com/v3/smtp/email"
        headers = {
            "accept": "application/json",
            "api-key": BREVO_API_KEY,
            "content-type": "application/json"
        }

        payload = {
            "sender": {
                "name": name,
                "email": email
            },
            "to": [{
                "email": TO_EMAIL,
                "name": "Stratosport Contact"
            }],
            "subject": f"New Contact Form Submission from {name}",
            "htmlContent": f"""
              <html>
                <body>
                  <h2>New Contact Form Submission</h2>
                  <table style="border-collapse: collapse; width: 100%;">
                    <tr>
                      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
                      <td style="padding: 8px; border: 1px solid #ddd;">{name}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
                      <td style="padding: 8px; border: 1px solid #ddd;">{email}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Company:</strong></td>
                      <td style="padding: 8px; border: 1px solid #ddd;">{company}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Phone:</strong></td>
                      <td style="padding: 8px; border: 1px solid #ddd;">{phone or 'Not provided'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px; border: 1px solid #ddd;"><strong>Challenge:</strong></td>
                      <td style="padding: 8px; border: 1px solid #ddd;">{challenge.replace(chr(10), '<br>')}</td>
                    </tr>
                  </table>
                  <br>
                  <p><em>This email was sent from the Stratosport website contact form.</em></p>
                </body>
              </html>
            """,
            "textContent": f"""
New Contact Form Submission

Name: {name}
Email: {email}
Company: {company}
Phone: {phone or 'Not provided'}

Challenge:
{challenge}

---
This email was sent from the Stratosport website contact form.
            """
        }

        response = requests.post(url, json=payload, headers=headers)
        response.raise_for_status()

        print(f"Contact email sent successfully to {TO_EMAIL}")
        return True

    except Exception as e:
        print(f"Failed to send contact email: {str(e)}")
        return False

# Routes
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/contact", response_model=dict, status_code=201, dependencies=[Depends(verify_agent_auth)])
async def create_contact_submission(input: ContactSubmissionCreate):
    try:
        # Send email notification
        email_sent = send_contact_email(
            input.name,
            input.email,
            input.company,
            input.phone,
            input.challenge
        )

        if not email_sent:
            print("Contact email failed to send")

        return {
            "success": True,
            "message": "Thank you for reaching out. We'll respond within 24 hours.",
            "submissionId": str(uuid.uuid4())
        }
    except Exception as e:
        print(f"Error processing contact submission: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))

@api_router.post("/agent/weekly-post", dependencies=[Depends(verify_agent_auth)])
async def trigger_weekly_agent():
    """Trigger the weekly blog publishing agent (protected by API Key)"""
    try:
        # Note: In a true serverless environment with strict timeouts (e.g. 10s), 
        # this might time out before completing. If it does, you can trigger this 
        # as a background task, or run it via a longer-running cron platform.
        # But for testing and basic use, we run it synchronously here.
        result = run_weekly_agent_workflow()
        return result
    except Exception as e:
        print(f"Agent error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
