import React from 'react';
import { Facebook, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="section-title">Contact</h1>
        <p className="text-lg mb-8">Email: sau.acm@example.com</p>
        
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://twitter.com/sau_acm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:text-[#0D9488]"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://facebook.com/sauacm"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:text-[#0D9488]"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        <div className="bg-[var(--secondary)] w-[300px] h-[200px] mx-auto rounded-lg flex items-center justify-center">
          <p className="text-[var(--text)]">X Feed Placeholder</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;