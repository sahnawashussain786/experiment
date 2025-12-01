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
    <nav className="fixed top-0 left-0 w-full h-[60px] md:h-[80px] px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 flex items-center justify-between z-50 bg-deep-bg/90 md:bg-deep-bg/80 backdrop-blur-md border-b border-white/5 transition-all">
      <Link
        to="/"
        className="flex items-center gap-2 group"
        onClick={closeMenu}
      >
        {/* Logo */}
        <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg md:rounded-xl flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg shadow-neon-blue/20 group-hover:shadow-neon-purple/50 transition-all duration-300">
          F
        </div>
        <span className="text-xl md:text-2xl font-bold text-white tracking-wide font-heading">
          FIT<span className="text-neon-blue">LIFE</span>
        </span>
      </Link>

      {/* Desktop navigation */}
      <ul className="text-gray-400 md:flex hidden items-center gap-6 lg:gap-8 font-medium text-sm lg:text-base">
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 py-2 px-1"
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 py-2 px-1"
            to="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 py-2 px-1"
            to="/pricing"
          >
            Pricing
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 py-2 px-1"
            to="/about"
          >
            About Us
          </Link>
        </li>
        <li>
          <Link
            className="hover:text-white hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 py-2 px-1"
            to="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Right side actions */}
      <div className="flex items-center gap-3 md:gap-4">
        {/* Desktop sign buttons */}
        <div className="hidden md:flex items-center gap-3 lg:gap-4">
          <SignedOut>
            <Link to="/sign-in">
              <button className="text-gray-400 hover:text-white font-medium transition-colors cursor-pointer hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] px-3 py-2">
                Sign In
              </button>
            </Link>
            <Link to="/sign-up">
              <button
                type="button"
                className="bg-gradient-to-r from-neon-blue to-neon-purple text-white text-sm font-semibold hover:shadow-lg hover:shadow-neon-blue/40 active:scale-95 transition-all w-28 lg:w-32 h-10 rounded-full cursor-pointer"
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
          className="menu-btn inline-block md:hidden active:scale-90 transition text-white cursor-pointer p-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
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
              width="26"
              height="26"
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
        <div className="mobile-menu fixed top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-deep-bg/98 backdrop-blur-xl border-t border-white/10 p-6 md:hidden z-40 animate-fade-in-up flex flex-col overflow-y-auto">
          <ul className="flex flex-col space-y-2 text-gray-300 text-lg font-medium text-center mb-auto mt-6">
            <li>
              <Link
                to="/"
                className="hover:text-neon-cyan hover:bg-white/5 transition block py-4 px-6 rounded-xl min-h-[56px] flex items-center justify-center"
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="hover:text-neon-cyan hover:bg-white/5 transition block py-4 px-6 rounded-xl min-h-[56px] flex items-center justify-center"
                onClick={closeMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="hover:text-neon-cyan hover:bg-white/5 transition block py-4 px-6 rounded-xl min-h-[56px] flex items-center justify-center"
                onClick={closeMenu}
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-neon-cyan hover:bg-white/5 transition block py-4 px-6 rounded-xl min-h-[56px] flex items-center justify-center"
                onClick={closeMenu}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-neon-cyan hover:bg-white/5 transition block py-4 px-6 rounded-xl min-h-[56px] flex items-center justify-center"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
          <div className="flex flex-col gap-3 items-center border-t border-white/10 pt-6 pb-6">
            <SignedOut>
              <Link
                to="/sign-in"
                onClick={closeMenu}
                className="w-full max-w-sm"
              >
                <button className="w-full text-gray-300 hover:text-white font-medium transition-colors cursor-pointer py-4 border border-white/10 rounded-xl min-h-[56px] hover:bg-white/5">
                  Sign In
                </button>
              </Link>
              <Link
                to="/sign-up"
                onClick={closeMenu}
                className="w-full max-w-sm"
              >
                <button
                  type="button"
                  className="w-full bg-gradient-to-r from-neon-blue to-neon-purple text-white font-semibold hover:shadow-lg hover:shadow-neon-blue/30 active:scale-95 transition-all py-4 rounded-xl cursor-pointer text-lg min-h-[56px]"
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
