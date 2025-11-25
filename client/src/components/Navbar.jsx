import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="h-[80px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-black/50 backdrop-blur-md border-b border-white/10 transition-all">
      <Link
        to="/"
        className="flex items-center gap-2 group"
        onClick={closeMenu}
      >
        {/* Logo Placeholder */}
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-indigo-500/50 transition-all">
          F
        </div>
        <span className="text-2xl font-bold text-white tracking-wide">
          FIT<span className="text-indigo-400">LIFE</span>
        </span>
      </Link>

      {/* Desktop navigation */}
      <ul className="text-gray-300 md:flex hidden items-center gap-8 font-medium">
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_10px_rgba(129,140,248,0.5)] transition-all duration-300"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_10px_rgba(129,140,248,0.5)] transition-all duration-300"
            to="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_10px_rgba(129,140,248,0.5)] transition-all duration-300"
            to="/pricing"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_10px_rgba(129,140,248,0.5)] transition-all duration-300"
            to="/about"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_10px_rgba(129,140,248,0.5)] transition-all duration-300"
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Right side actions */}
      <div className="flex items-center gap-4">
        {/* Desktop sign buttons */}
        <div className="hidden md:flex items-center gap-4">
          <SignedOut>
            <Link to="/sign-in">
              <button className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer">
                Sign In
              </button>
            </Link>
            <Link to="/sign-up">
              <button
                type="button"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 transition-all w-32 h-10 rounded-full cursor-pointer"
              >
                Get Started
              </button>
            </Link>
          </SignedOut>
        </div>
        {/* Mobile sign buttons (outside the collapsible menu) */}
        <div className="flex md:hidden items-center gap-2">
          <SignedOut>
            <Link to="/sign-in" onClick={closeMenu}>
              <button className="text-gray-300 hover:text-white font-medium transition-colors cursor-pointer">
                Sign In
              </button>
            </Link>
            <Link to="/sign-up" onClick={closeMenu}>
              <button
                type="button"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 transition-all w-24 h-9 rounded-full cursor-pointer"
              >
                Get Started
              </button>
            </Link>
          </SignedOut>
        </div>
        {/* User Button - always visible */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
        {/* Mobile menu toggle */}
        <button
          aria-label="menu-btn"
          type="button"
          className="menu-btn inline-block md:hidden active:scale-90 transition text-white cursor-pointer p-2"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu absolute top-[80px] left-0 w-full bg-zinc-900/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden shadow-2xl z-40 animate-fade-in-up">
          <ul className="flex flex-col space-y-6 text-gray-300 text-lg font-medium text-center mb-6">
            <li>
              <Link
                to="/"
                className="hover:text-white transition block py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-white transition block py-2"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-white transition block py-2"
                onClick={closeMenu}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-white transition block py-2"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-white transition block py-2"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
