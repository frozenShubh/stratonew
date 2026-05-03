import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, CheckCircle2, Send } from 'lucide-react';
import ReactGA from 'react-ga4';

const ContactPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
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
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        throw new Error('Server error. Please try again later.');
      }

      if (!response.ok) {
        throw new Error(data.detail || data.error || 'An error occurred');
      }

      if (data.success) {
        setIsSubmitted(true);

        // Track successful contact form submission
        ReactGA.event({
          category: 'Contact',
          action: 'submit_contact_form',
          label: formData.company || 'Unknown Company'
        });

        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            challenge: '',
          });
        }, 5000);
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020507]">
      <Helmet>
        <title>Contact Stratosport | Start Your AI Transformation</title>
        <meta name="description" content="Get in touch with Stratosport for AI transformation, GCC setup, and enterprise technology consulting. Senior-only engagements with response within 24 hours." />
        <meta property="og:title" content="Contact Stratosport | Start Your AI Transformation" />
        <meta property="og:description" content="Connect with senior technology leaders for AI transformation and enterprise platform consulting." />
        <link rel="canonical" href="https://stratosport.in/contact" />
      </Helmet>
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0D4669]/20 via-[#020507] to-[#033051]/20 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #539AC1 1px, transparent 1px), radial-gradient(circle at 75% 75%, #A5C7E0 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#0D4669]/30 border border-[#539AC1]/30 rounded-full text-[#539AC1] text-sm font-semibold uppercase tracking-wider">
                Get In Touch
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Let's Start a
              <br />
              <span className="bg-gradient-to-r from-[#539AC1] to-[#A5C7E0] bg-clip-text text-transparent">
                Conversation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#D9EAF6]/80 leading-relaxed">
              Whether you're facing a specific technology challenge or exploring strategic
              options, we're here to help. Tell us about your situation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-[#0A0D10]">
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
                <div className="bg-gradient-to-br from-[#0D4669]/30 to-[#033051]/20 border border-[#539AC1]/30 rounded-2xl p-12 text-center backdrop-blur-sm">
                  <CheckCircle2 className="mx-auto mb-6 text-[#539AC1]" size={64} />
                  <h3 className="text-3xl font-bold text-white mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                    Thank You!
                  </h3>
                  <p className="text-lg text-[#D9EAF6]/80">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div className="bg-[#0D1117]/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/5">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400"
                      >
                        {error}
                      </motion.div>
                    )}

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-[#D9EAF6] font-medium">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="bg-[#0D1117] border-[#539AC1]/20 focus:border-[#539AC1] text-white placeholder:text-[#D9EAF6]/40"
                          placeholder="Your full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-[#D9EAF6] font-medium">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="bg-[#0D1117] border-[#539AC1]/20 focus:border-[#539AC1] text-white placeholder:text-[#D9EAF6]/40"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-[#D9EAF6] font-medium">
                          Company *
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          required
                          value={formData.company}
                          onChange={handleChange}
                          className="bg-[#0D1117] border-[#539AC1]/20 focus:border-[#539AC1] text-white placeholder:text-[#D9EAF6]/40"
                          placeholder="Your company"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-[#D9EAF6] font-medium">
                          Phone (Optional)
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="bg-[#0D1117] border-[#539AC1]/20 focus:border-[#539AC1] text-white placeholder:text-[#D9EAF6]/40"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="challenge" className="text-[#D9EAF6] font-medium">
                        Tell us about your challenge *
                      </Label>
                      <Textarea
                        id="challenge"
                        name="challenge"
                        required
                        value={formData.challenge}
                        onChange={handleChange}
                        rows={6}
                        className="bg-[#0D1117] border-[#539AC1]/20 focus:border-[#539AC1] text-white placeholder:text-[#D9EAF6]/40 resize-none"
                        placeholder="What technology or AI challenge are you facing? What outcomes are you hoping to achieve?"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full md:w-auto bg-gradient-to-r from-[#539AC1] to-[#235D94] hover:from-[#A5C7E0] hover:to-[#539AC1] text-white px-12 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed border-0"
                    >
                      <span className="flex items-center">
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                        <Send className="ml-2" size={20} />
                      </span>
                    </Button>
                  </form>
                </div>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-[#0D1117]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0D4669]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#539AC1]" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#539AC1] uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:shubham144@gmail.com"
                        className="text-[#D9EAF6] hover:text-[#539AC1] transition-colors"
                      >
                        contactus@stratosport.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0D4669]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#539AC1]" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#539AC1] uppercase tracking-wider mb-1">
                        Phone
                      </p>
                      <p className="text-[#D9EAF6]">Available upon engagement</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-[#0D4669]/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#539AC1]" size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-[#539AC1] uppercase tracking-wider mb-1">
                        Location
                      </p>
                      <p className="text-[#D9EAF6]">India & Global</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#0D4669]/30 to-[#033051]/20 backdrop-blur-sm rounded-2xl p-8 border border-[#539AC1]/20">
                <h4 className="text-lg font-semibold text-white mb-4">
                  What to Expect
                </h4>
                <ul className="space-y-3 text-sm text-[#D9EAF6]/80">
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-[#539AC1] flex-shrink-0 mt-0.5" size={16} />
                    <span>Response within 24 hours</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-[#539AC1] flex-shrink-0 mt-0.5" size={16} />
                    <span>Initial conversation to understand your needs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-[#539AC1] flex-shrink-0 mt-0.5" size={16} />
                    <span>Tailored proposal or engagement approach</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle2 className="text-[#539AC1] flex-shrink-0 mt-0.5" size={16} />
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