import React from "react";
import servicesHero from "../assets/cardio.png"; // Reusing cardio image as hero
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="w-full overflow-x-hidden bg-deep-bg text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHero}
            alt="Services Hero"
            className="w-full h-full object-cover opacity-50 md:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-bg/90 via-deep-bg/60 to-deep-bg"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up font-heading tracking-tight">
            OUR{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-cyan">
              SERVICES
            </span>
          </h1>
          <p className="text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl font-light leading-relaxed drop-shadow-lg">
            Comprehensive fitness solutions designed to help you reach your peak
            performance.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-deep-bg relative">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-neon-purple/10 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {[
              {
                title: "Personal Training",
                desc: "One-on-one coaching tailored to your specific goals. Our certified trainers create personalized workout plans, monitor your progress, and provide the motivation you need to succeed.",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                color: "text-neon-blue",
                bg: "bg-neon-blue/10",
                border: "hover:border-neon-blue/50",
                shadow: "group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]",
              },
              {
                title: "Group Classes",
                desc: "Join our high-energy group sessions ranging from HIIT and Spin to Yoga and Pilates. Experience the power of community and push your limits together.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                color: "text-neon-purple",
                bg: "bg-neon-purple/10",
                border: "hover:border-neon-purple/50",
                shadow: "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.2)]",
              },
              {
                title: "Nutrition Coaching",
                desc: "Fuel your body right with expert nutritional guidance. We help you build sustainable eating habits that support your training and lifestyle goals.",
                icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
                color: "text-neon-cyan",
                bg: "bg-neon-cyan/10",
                border: "hover:border-neon-cyan/50",
                shadow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
              },
              {
                title: "Recovery & Spa",
                desc: "Rest is just as important as work. Access our premium sauna, steam rooms, and massage therapy services to recover faster and feel rejuvenated.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                color: "text-pink-500",
                bg: "bg-pink-500/10",
                border: "hover:border-pink-500/50",
                shadow: "group-hover:shadow-[0_0_20px_rgba(236,72,153,0.2)]",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className={`flex flex-col sm:flex-row gap-6 p-6 sm:p-8 rounded-2xl md:rounded-3xl border border-white/5 shadow-lg hover:shadow-2xl transition-all duration-300 bg-card-bg ${service.border} ${service.shadow} group`}
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 ${service.bg} ${service.color} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mx-auto sm:mx-0 group-hover:scale-110 transition-transform duration-300`}
                >
                  <svg
                    className="w-7 h-7 sm:w-8 sm:h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={service.icon}
                    ></path>
                  </svg>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3 font-heading group-hover:text-neon-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-zinc-900/50 text-white relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 md:mb-16 font-heading">
            How It <span className="text-neon-purple">Works</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-10 md:top-12 left-0 w-full h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple transform -translate-y-1/2 z-0 opacity-30"></div>

            {[
              {
                step: "01",
                title: "Consultation",
                desc: "We start with a thorough assessment of your fitness level, goals, and medical history.",
              },
              {
                step: "02",
                title: "Custom Plan",
                desc: "Our experts design a tailored training and nutrition program just for you.",
              },
              {
                step: "03",
                title: "Real Results",
                desc: "Follow the plan, track your progress, and see the transformation unfold.",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center group">
                <div className="w-20 h-20 md:w-24 md:h-24 bg-deep-bg rounded-full flex items-center justify-center mx-auto mb-6 md:mb-8 border-4 border-zinc-800 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-neon-blue transition-colors duration-300">
                  <span className="text-2xl md:text-3xl font-bold text-neon-blue font-heading">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 font-heading text-white">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base max-w-xs mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services FAQ Section */}
      <section className="py-24 bg-deep-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-12 font-heading">
            Common <span className="text-neon-cyan">Questions</span>
          </h2>
          <div className="grid gap-6">
            {[
              {
                q: "Do I need to book classes in advance?",
                a: "Yes, we recommend booking at least 24 hours in advance via our mobile app to secure your spot.",
              },
              {
                q: "Are personal trainers included in the membership?",
                a: "Personal training is an add-on service, but Elite members get 2 complimentary sessions per month.",
              },
              {
                q: "What should I bring to my first session?",
                a: "Just bring comfortable workout clothes, a water bottle, and a towel. We provide everything else!",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card-bg p-8 rounded-2xl shadow-lg border border-white/5 hover:border-neon-purple/30 transition-all"
              >
                <h3 className="text-xl font-bold text-white mb-3 font-heading">
                  {item.q}
                </h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-zinc-900/80 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl font-bold text-white mb-6 font-heading">
            Ready to Transform?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Check out our membership plans and find the perfect fit for your
            fitness journey.
          </p>
          <Link
            to="/pricing"
            className="inline-block px-10 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all transform hover:scale-105"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
