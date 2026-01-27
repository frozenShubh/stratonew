# Stratosport Website - API Contracts

## Backend Implementation Plan

### 1. Contact Form Submission

**Mocked Data Location**: `/app/frontend/src/data/mock.js`
- Currently stores form submissions in localStorage
- Function: `mockContactForm()`

**Backend API to Implement**:

#### POST `/api/contact`
**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "company": "string (required)",
  "phone": "string (optional)",
  "challenge": "string (required, min 20 chars)"
}
```

**Response** (Success - 201):
```json
{
  "success": true,
  "message": "Thank you for reaching out. We'll respond within 24 hours.",
  "submissionId": "string"
}
```

**Response** (Error - 400):
```json
{
  "success": false,
  "error": "Validation error message"
}
```

### 2. MongoDB Schema

**Collection**: `contact_submissions`

```javascript
{
  _id: ObjectId,
  name: String,
  email: String,
  company: String,
  phone: String (optional),
  challenge: String,
  submittedAt: Date,
  status: String (default: "new"), // new, contacted, resolved
  source: String (default: "website")
}
```

### 3. Frontend Integration Changes

**File**: `/app/frontend/src/pages/ContactPage.jsx`

**Current**: Uses `mockContactForm()` from `../data/mock.js`
**Change to**: Use axios to call backend API

```javascript
// Replace mock call with:
const response = await axios.post(`${API}/contact`, formData);
```

### 4. Backend Validation Requirements

- Name: Required, min 2 chars, max 100 chars
- Email: Required, valid email format
- Company: Required, min 2 chars, max 200 chars  
- Phone: Optional, valid phone format if provided
- Challenge: Required, min 20 chars, max 2000 chars

### 5. Error Handling

- Return appropriate HTTP status codes
- Provide clear error messages
- Log errors server-side
- Handle MongoDB connection failures gracefully

### 6. Success Response

- Return 201 Created status
- Provide confirmation message
- Return submission ID for reference
