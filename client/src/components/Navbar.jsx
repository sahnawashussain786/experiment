import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignInButton } from "@clerk/clerk-react";

const Navbar = () => {
  const navigate = useNavigate();
  const menuButtons = document.querySelectorAll(".menu-btn");
  const mobileMenus = document.querySelectorAll(".mobile-menu");

  menuButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      mobileMenus[index].classList.toggle("hidden");
    });
  });

  return (
    <nav className="h-[80px] relative w-full px-6 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between z-30 bg-black/50 backdrop-blur-md border-b border-white/10 transition-all">
      <Link to="/" className="flex items-center gap-2 group">
        {/* Logo Placeholder - Replaced SVG with text/icon combo for now */}
        <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:shadow-indigo-500/50 transition-all">
          F
        </div>
        <span className="text-2xl font-bold text-white tracking-wide">
          FIT<span className="text-indigo-400">LIFE</span>
        </span>
      </Link>

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

      <div className="hidden md:flex items-center gap-4">
        <SignedOut>
          <Link to="/sign-in">
            <button className="text-gray-300 hover:text-white font-medium transition-colors">
              Sign In
            </button>
          </Link>
          <Link to="/sign-up">
            <button
              type="button"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-500/30 active:scale-95 transition-all w-32 h-10 rounded-full"
            >
              Get Started
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>

      <button
        aria-label="menu-btn"
        type="button"
        className="menu-btn inline-block md:hidden active:scale-90 transition text-white"
      >
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
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      <div className="mobile-menu absolute top-[80px] left-0 w-full bg-zinc-900/95 backdrop-blur-xl border-b border-white/10 p-6 hidden md:hidden shadow-2xl">
        <ul className="flex flex-col space-y-6 text-gray-300 text-lg font-medium text-center">
          <li>
            <Link to="/" className="hover:text-white transition">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-white transition">
              Services
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-white transition">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-white transition">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </li>
        </ul>
        <div className="mt-8 flex flex-col gap-4">
          <SignedOut>
            <Link to="/sign-in" className="block">
              <button className="w-full py-3 text-gray-300 hover:text-white font-medium border border-white/10 rounded-full">
                Sign In
              </button>
            </Link>
            <Link to="/sign-up" className="block">
              <button
                type="button"
                className="bg-gradient-to-r from-indigo-600 to-violet-600 text-white w-full py-3 rounded-full font-bold shadow-lg"
              >
                Get Started
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <div className="flex justify-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

