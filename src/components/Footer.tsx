import React from 'react';
import { Code, Github, Linkedin, Mail, MapPin, Phone, Instagram, Disc as Discord } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'About Us', path: '/about' },
    { label: 'Events', path: '/events' },
    { label: 'Membership', path: '/membership' },
    { label: 'Resources', path: '/resources' },
    { label: 'Blog', path: '/blog' },
  ];

  const contactInfo = [
    { icon: <Mail className="h-4 w-4" />, text: 'sau.acm@example.com' },
    { icon: <Phone className="h-4 w-4" />, text: '+91 123 456 7890' },
    { icon: <MapPin className="h-4 w-4" />, text: 'South Asian University, New Delhi' },
  ];

  const socialLinks = [
    { icon: <Github className="h-5 w-5" />, url: 'https://github.com/sau-acm', label: 'GitHub' },
    { icon: <Linkedin className="h-5 w-5" />, url: 'https://linkedin.com/company/sau-acm', label: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, url: 'https://instagram.com/sau_acm', label: 'Instagram' },
    { icon: <Discord className="h-5 w-5" />, url: 'https://discord.gg/sau-acm', label: 'Discord' },
  ];

  return (
    <footer className="bg-[#1F2937] text-[#F9FAFB] border-t-2 border-[#374151] rounded-t-xl">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center group mb-4">
              <Code className="h-8 w-8 text-[#1e6cff] transform group-hover:rotate-12 transition-transform" />
              <span className="ml-2 font-bold text-lg">SAU ACM</span>
            </Link>
            <p className="text-sm text-gray-300 mb-6">
              The South Asian University ACM Student Chapter is dedicated to advancing computing 
              innovation across South Asia through workshops, events, and collaborative learning.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#1e6cff] transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-[#1e6cff] transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <li key={index} className="flex items-center text-gray-300 text-sm">
                  <span className="mr-2">{info.icon}</span>
                  {info.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t-2 border-[#374151] text-center text-sm text-gray-300">
          <p>© 2025 SAU ACM Student Chapter. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;