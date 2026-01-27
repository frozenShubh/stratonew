import React, { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    challenge: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API call
    await mockContactForm(formData);

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        challenge: '',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
              Whether you're facing a specific technology challenge or exploring strategic
              options, we're here to help. Tell us about your situation, and we'll respond
              within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-12 text-center">
                  <CheckCircle2 className="mx-auto mb-6 text-green-600" size={64} />
                  <h3 className="text-3xl font-bold text-slate-900 mb-4">
                    Thank You!
                  </h3>
                  <p className="text-lg text-slate-600">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-slate-900 font-medium">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-slate-900 font-medium">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-slate-900 font-medium">
                        Company *
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                        placeholder="Your company"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-900 font-medium">
                        Phone (Optional)
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="border-slate-300 focus:border-slate-500 focus:ring-slate-500"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="challenge" className="text-slate-900 font-medium">
                      Tell us about your challenge *
                    </Label>
                    <Textarea
                      id="challenge"
                      name="challenge"
                      required
                      value={formData.challenge}
                      onChange={handleChange}
                      rows={6}
                      className="border-slate-300 focus:border-slate-500 focus:ring-slate-500 resize-none"
                      placeholder="What technology or AI challenge are you facing? What outcomes are you hoping to achieve?"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full md:w-auto bg-slate-800 hover:bg-slate-700 text-white px-12 py-6 text-lg transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-slate-700" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:contact@stratosport.in"
                        className="text-slate-900 hover:text-slate-600 transition-colors"
                      >
                        contact@stratosport.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-slate-700" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                        Phone
                      </p>
                      <p className="text-slate-900">Available upon engagement</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-slate-700" size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-500 uppercase tracking-wide mb-1">
                        Location
                      </p>
                      <p className="text-slate-900">India & Global</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-slate-50 border border-slate-200 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-900 mb-3">
                  What to Expect
                </h4>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex items-start space-x-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Initial conversation to understand your needs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Tailored proposal or engagement approach</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-slate-400 mt-1">•</span>
                    <span>Clear next steps and timeline</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;