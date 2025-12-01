import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-deep-bg text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-heading"
        >
          Get in <span className="text-neon-blue">Touch</span>
        </motion.h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Have questions? We're here to help you on your fitness journey.
        </p>
      </section>

      <div className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card-bg p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-8 font-heading">
            Send us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  className="peer w-full px-4 py-3 rounded-xl bg-deep-bg border border-white/10 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder-transparent"
                  placeholder="First Name"
                />
                <label
                  htmlFor="firstName"
                  className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-neon-blue peer-focus:text-xs peer-focus:bg-card-bg peer-focus:px-1"
                >
                  First Name
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  className="peer w-full px-4 py-3 rounded-xl bg-deep-bg border border-white/10 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder-transparent"
                  placeholder="Last Name"
                />
                <label
                  htmlFor="lastName"
                  className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-neon-blue peer-focus:text-xs peer-focus:bg-card-bg peer-focus:px-1"
                >
                  Last Name
                </label>
              </div>
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                className="peer w-full px-4 py-3 rounded-xl bg-deep-bg border border-white/10 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder-transparent"
                placeholder="Email Address"
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-neon-blue peer-focus:text-xs peer-focus:bg-card-bg peer-focus:px-1"
              >
                Email Address
              </label>
            </div>

            <div className="relative">
              <textarea
                id="message"
                rows="4"
                className="peer w-full px-4 py-3 rounded-xl bg-deep-bg border border-white/10 text-white focus:outline-none focus:border-neon-blue transition-colors placeholder-transparent resize-none"
                placeholder="Message"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-focus:-top-2.5 peer-focus:text-neon-blue peer-focus:text-xs peer-focus:bg-card-bg peer-focus:px-1"
              >
                Message
              </label>
            </div>

            <button
              type="button"
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-lg"
            >
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Info & Map */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          {/* Contact Info */}
          <div className="grid gap-6">
            {[
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                ),
                title: "Visit Us",
                content: "123 Fitness Blvd, Muscle City, CA 90210",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                ),
                title: "Email Us",
                content: "hello@fitlife.com",
              },
              {
                icon: (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    ></path>
                  </svg>
                ),
                title: "Call Us",
                content: "+1 (555) 123-4567",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center text-neon-blue">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="h-80 rounded-3xl overflow-hidden border border-white/10 relative group">
            <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center">
              <span className="text-gray-500">Map Integration Placeholder</span>
            </div>
            {/* Overlay for style */}
            <div className="absolute inset-0 bg-neon-blue/5 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
