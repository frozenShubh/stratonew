import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src="/logo.png" alt="Stratosport Logo" className="h-20 md:h-32 w-auto mb-6 object-contain origin-left scale-110" />
            <p className="text-slate-400 text-base leading-relaxed max-w-md">
              Engineering Technology & AI Systems That Scale. Boutique consulting for technology leadership, AI systems, and enterprise-grade platforms.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/115744746/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@stratosport.in" className="text-slate-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/ai-transformation" className="text-slate-400 hover:text-white transition-colors text-sm">
                  AI Transformation
                </Link>
              </li>
              <li>
                <Link to="/gcc" className="text-slate-400 hover:text-white transition-colors text-sm">
                  GCC
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-slate-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">
                  Get in Touch
                </Link>
              </li>
              <li>
                <a href="mailto:contact@stratosport.in" className="text-slate-400 hover:text-white transition-colors text-sm">
                  contact@stratosport.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Stratosport. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};