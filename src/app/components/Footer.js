import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; 2022-2023 VideoMax - YouTube and Reels Downloader</p>
        <nav aria-label="Footer Navigation" className="text-sm">
          <a href="/privacy-policy" className="text-white hover:underline mx-2" aria-label="Privacy Policy">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="text-white hover:underline mx-2" aria-label="Terms of Service">
            Terms of Service
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
