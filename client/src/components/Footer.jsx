import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-deep-bg text-gray-400 border-t border-white/5 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent opacity-50 blur-sm"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12 mb-10 md:mb-12">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left">
            <Link
              to="/"
              className="flex items-center gap-2 mb-6 group justify-center sm:justify-start"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-neon-blue/20 group-hover:shadow-neon-purple/50 transition-all duration-300">
                F
              </div>
              <span className="text-xl font-bold text-white tracking-wide font-heading">
                FIT<span className="text-neon-blue">LIFE</span>
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-gray-400 max-w-xs mx-auto sm:mx-0">
              Empowering you to reach your full potential through world-class
              training, community, and technology.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              {/* Social Icons */}
              {[1, 2, 3].map((_, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 min-w-[44px] min-h-[44px] bg-zinc-900/50 border border-white/5 rounded-full flex items-center justify-center hover:bg-neon-blue hover:border-neon-blue hover:text-white transition-all cursor-pointer group"
                >
                  <svg
                    className="w-4 h-4 group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-4 md:mb-6 font-heading text-base md:text-lg">
              Company
            </h4>
            <ul className="space-y-3 md:space-y-4 text-sm">
              <li>
                <Link
                  to="/careers"
                  className="hover:text-neon-cyan transition-colors duration-300 inline-block py-1"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-neon-cyan transition-colors duration-300 inline-block py-1"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/press"
                  className="hover:text-neon-cyan transition-colors duration-300 inline-block py-1"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-4 md:mb-6 font-heading text-base md:text-lg">
              Quick Links
            </h4>
            <ul className="space-y-3 md:space-y-4 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-neon-cyan transition-colors duration-300 inline-block py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="hover:text-neon-cyan transition-colors duration-300 inline-block py-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className="hover:text-neon-cyan transition-colors duration-300 inline-block py-1"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-neon-cyan transition-colors duration-300 inline-block py-1"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-neon-cyan transition-colors duration-300 inline-block py-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="text-center sm:text-left">
            <h4 className="text-white font-bold mb-4 md:mb-6 font-heading text-base md:text-lg">
              Support
            </h4>
            <ul className="space-y-3 md:space-y-4 text-sm">
              <li>
                <Link
                  to="/faq"
                  className="hover:text-neon-cyan transition-colors duration-300 inline-block py-1"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="hover:text-neon-cyan transition-colors duration-300 inline-block py-1"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-neon-cyan transition-colors duration-300 inline-block py-1"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-6 md:pt-8 text-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} FitLife Gym. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
