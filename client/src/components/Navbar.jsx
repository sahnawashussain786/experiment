import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { motion, AnimatePresence } from "framer-motion";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={twMerge(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "glass-nav h-[70px]" : "bg-transparent h-[80px] pt-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300 opacity-80"></div>
              <div className="absolute inset-0 bg-black rounded-xl border border-white/10 flex items-center justify-center z-10">
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
                  F
                </span>
              </div>
            </div>
            <span className="text-2xl font-bold font-heading tracking-wide text-white">
              FIT<span className="text-neon-blue">LIFE</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={clsx(
                    "relative text-sm font-medium transition-colors duration-300 hover:text-white",
                    location.pathname === link.path
                      ? "text-white"
                      : "text-gray-400"
                  )}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-neon-blue rounded-full"
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Side Actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-4">
              <SignedOut>
                <Link to="/sign-in">
                  <button className="text-gray-300 hover:text-white font-medium transition-colors text-sm">
                    Sign In
                  </button>
                </Link>
                <Link to="/sign-up">
                  <button className="px-5 py-2.5 rounded-full bg-white text-black font-bold text-sm hover:bg-gray-100 transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,255,255,0.3)]">
                    Get Started
                  </button>
                </Link>
              </SignedOut>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white hover:text-neon-blue transition-colors"
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: 45, y: 8 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-current rounded-full origin-left"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-current rounded-full"
                />
                <motion.span
                  animate={
                    isMobileMenuOpen
                      ? { rotate: -45, y: -8 }
                      : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-current rounded-full origin-left"
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-deep-bg/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link
                    to={link.path}
                    className="text-3xl font-bold font-heading text-white hover:text-neon-blue transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-auto mb-10 flex flex-col gap-4"
            >
              <SignedOut>
                <Link to="/sign-in" className="w-full">
                  <button className="w-full py-4 rounded-xl border border-white/10 text-white font-bold text-lg hover:bg-white/5 transition-colors">
                    Sign In
                  </button>
                </Link>
                <Link to="/sign-up" className="w-full">
                  <button className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold text-lg shadow-lg shadow-neon-blue/20">
                    Get Started
                  </button>
                </Link>
              </SignedOut>
              <SignedIn>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <UserButton afterSignOutUrl="/" showName />
                  <span className="text-gray-400">Manage Account</span>
                </div>
              </SignedIn>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
