import React from 'react';

const Resources: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="section-title">Resources</h1>
        <a
          href="https://dl.acm.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--accent)] hover:underline"
        >
          Explore the ACM Digital Library
        </a>
      </div>
    </div>
  );
}

export default Resources;