import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

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
    <nav className="fixed top-0 left-0 w-full h-[80px] px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-50 bg-deep-bg/80 backdrop-blur-md border-b border-white/5 transition-all">
      <Link
        to="/"
        className="flex items-center gap-2 group"
        onClick={closeMenu}
      >
        {/* Logo Placeholder */}
        <div className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-neon-blue/20 group-hover:shadow-neon-purple/50 transition-all duration-300">
          F
        </div>
        <span className="text-2xl font-bold text-white tracking-wide font-heading">
          FIT<span className="text-neon-blue">LIFE</span>
        </span>
      </Link>

      {/* Desktop navigation */}
      <ul className="text-gray-400 md:flex hidden items-center gap-8 font-medium">
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
            to="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
            to="/pricing"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
            to="/about"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
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
              <button className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                Sign In
              </button>
            </Link>
            <Link to="/sign-up">
              <button
                type="button"
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-semibold hover:shadow-lg hover:shadow-neon-blue/40 active:scale-95 transition-all w-32 h-10 rounded-full cursor-pointer"
              >
                Get Started
              </button>
            </Link>
          </SignedOut>

          {/* User Button - always visible */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>

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
        <div className="mobile-menu fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-deep-bg/95 backdrop-blur-xl border-t border-white/10 p-6 md:hidden z-40 animate-fade-in-up flex flex-col">
          <ul className="flex flex-col space-y-6 text-gray-300 text-xl font-medium text-center mb-auto mt-10">
            <li>
              <Link
                to="/"
                className="hover:text-neon-cyan transition block py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-neon-cyan transition block py-2"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-neon-cyan transition block py-2"
                onClick={closeMenu}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-neon-cyan transition block py-2"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-neon-cyan transition block py-2"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-4 items-center border-t border-white/10 pt-8 pb-10">
            <SignedOut>
              <Link to="/sign-in" onClick={closeMenu} className="w-full">
                <button className="w-full text-gray-300 hover:text-white font-medium transition-colors cursor-pointer py-3 border border-white/10 rounded-xl">
                  Sign In
                </button>
              </Link>
              <Link to="/sign-up" onClick={closeMenu} className="w-full">
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/30 active:scale-95 transition-all py-4 rounded-xl cursor-pointer text-lg"
                >
                  Get Started
                </button>
              </Link>
            </SignedOut>
            <SignedIn>
              <div className="flex items-center justify-center w-full py-4">
                <UserButton afterSignOutUrl="/" />
              </div>
            </SignedIn>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
