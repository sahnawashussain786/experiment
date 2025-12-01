import React from "react";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        e.target.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  };

  return (
    <div className="w-full overflow-x-hidden bg-deep-bg text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] bg-deep-bg flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-deep-bg via-deep-bg/90 to-deep-bg z-0"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5 z-0"></div>

        {/* Glows */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-neon-blue/10 rounded-full blur-[80px] md:blur-[120px] animate-pulse-glow"></div>

        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up font-heading tracking-tight">
            GET IN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">
              TOUCH
            </span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            We'd love to hear from you. Visit us, call us, or send a message to
            start your journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <div className="order-2 md:order-1 space-y-8 md:space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 md:mb-8 font-heading">
                Contact <span className="text-neon-purple">Information</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8 md:mb-10">
                Have questions? We're here to help. Reach out to us through any
                of the following channels.
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="flex items-start gap-5 md:gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-neon-blue/10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 border border-neon-blue/20 group-hover:border-neon-blue/50 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-neon-blue"
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
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 font-heading group-hover:text-neon-blue transition-colors">
                    Visit Us
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                    123 Fitness Blvd, Suite 100
                    <br />
                    Los Angeles, CA 90001
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 md:gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-neon-purple/10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 border border-neon-purple/20 group-hover:border-neon-purple/50 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-neon-purple"
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
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 font-heading group-hover:text-neon-purple transition-colors">
                    Call Us
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    +1 (555) 123-4567
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm mt-1">
                    Mon-Fri: 8am - 8pm
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5 md:gap-6 group p-4 rounded-2xl hover:bg-white/5 transition-colors duration-300">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-neon-cyan/10 rounded-xl md:rounded-2xl flex items-center justify-center flex-shrink-0 border border-neon-cyan/20 group-hover:border-neon-cyan/50 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 text-neon-cyan"
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
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 font-heading group-hover:text-neon-cyan transition-colors">
                    Email Us
                  </h3>
                  <p className="text-gray-400 text-sm md:text-base">
                    hello@fitlife.com
                  </p>
                  <p className="text-gray-400 text-sm md:text-base">
                    support@fitlife.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card-bg p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-white/5 order-1 md:order-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-neon-purple/5 rounded-full blur-[80px]"></div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 md:mb-8 font-heading relative z-10">
              Send us a Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-5 md:space-y-6 relative z-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2 ml-1">
                    First Name
                  </label>
                  <input
                    name="firstName"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all placeholder-gray-600 hover:border-white/20 min-h-[48px]"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2 ml-1">
                    Last Name
                  </label>
                  <input
                    name="lastName"
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all placeholder-gray-600 hover:border-white/20 min-h-[48px]"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2 ml-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all placeholder-gray-600 hover:border-white/20 min-h-[48px]"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 text-white focus:border-neon-blue focus:ring-1 focus:ring-neon-blue outline-none transition-all placeholder-gray-600 hover:border-white/20 resize-none"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer min-h-[56px] flex items-center justify-center text-base md:text-lg tracking-wide"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 md:mt-24 rounded-3xl overflow-hidden h-64 md:h-96 bg-zinc-900 relative flex items-center justify-center group cursor-pointer border border-white/5 hover:border-neon-cyan/30 transition-all">
          <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/-118.2437,34.0522,12,0/1200x600?access_token=YOUR_TOKEN')] bg-cover bg-center opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-deep-bg rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(6,182,212,0.3)] border border-neon-cyan/30 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-neon-cyan"
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
            </div>
            <h3 className="text-3xl font-bold text-white mb-2 font-heading">
              Find Us On Map
            </h3>
            <p className="text-gray-400">Click to open in Google Maps</p>
          </div>
        </div>

        {/* Best Time to Visit */}
        <div className="mt-20 md:mt-24">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12 md:mb-16 font-heading">
            Best Time to <span className="text-neon-blue">Visit</span>
          </h2>
          <div className="bg-card-bg p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-white/5 overflow-x-auto">
            <div className="flex items-end justify-between h-48 sm:h-56 gap-3 md:gap-6 min-w-[300px]">
              {[
                { time: "6am", height: "h-32", busy: "High" },
                { time: "9am", height: "h-20", busy: "Med" },
                { time: "12pm", height: "h-24", busy: "Med" },
                { time: "3pm", height: "h-16", busy: "Low" },
                { time: "5pm", height: "h-40", busy: "Peak" },
                { time: "8pm", height: "h-28", busy: "High" },
                { time: "10pm", height: "h-12", busy: "Low" },
              ].map((slot, idx) => (
                <div
                  key={idx}
                  className="flex-1 flex flex-col justify-end group cursor-pointer"
                >
                  <div className="relative w-full">
                    <div
                      className={`w-full ${slot.height} bg-zinc-800 rounded-t-lg md:rounded-t-xl group-hover:bg-gradient-to-t group-hover:from-neon-blue group-hover:to-neon-purple transition-all duration-500 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="absolute -top-8 md:-top-10 left-1/2 transform -translate-x-1/2 bg-white text-black text-[10px] md:text-xs font-bold py-1 px-2 md:px-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg whitespace-nowrap z-20">
                        {slot.busy}
                      </div>
                    </div>
                  </div>
                  <div className="text-center text-[10px] sm:text-xs md:text-sm text-gray-500 mt-3 md:mt-4 font-medium group-hover:text-white transition-colors">
                    {slot.time}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Hub */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-10 font-heading">
            Follow Our <span className="text-neon-purple">Journey</span>
          </h2>
          <div className="flex justify-center gap-8">
            {[
              {
                name: "Instagram",
                color:
                  "hover:bg-pink-600 hover:shadow-[0_0_20px_rgba(219,39,119,0.5)]",
                icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
              },
              {
                name: "Twitter",
                color:
                  "hover:bg-blue-400 hover:shadow-[0_0_20px_rgba(96,165,250,0.5)]",
                icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z",
              },
              {
                name: "Facebook",
                color:
                  "hover:bg-blue-600 hover:shadow-[0_0_20px_rgba(37,99,235,0.5)]",
                icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className={`w-14 h-14 rounded-full flex items-center justify-center text-white bg-zinc-800 border border-white/10 ${social.color} hover:scale-110 transition-all duration-300 shadow-lg`}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
