import React from "react";
import servicesHero from "../assets/cardio.png"; // Reusing cardio image as hero
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[50vh] min-h-[300px]">
        <div className="absolute inset-0">
          <img
            src={servicesHero}
            alt="Services Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up">
            OUR SERVICES
          </h1>
          <p className="text-gray-200 text-base md:text-xl max-w-2xl">
            Comprehensive fitness solutions designed to help you reach your peak
            performance.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: "Personal Training",
                desc: "One-on-one coaching tailored to your specific goals. Our certified trainers create personalized workout plans, monitor your progress, and provide the motivation you need to succeed.",
                icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
                color: "bg-indigo-500",
              },
              {
                title: "Group Classes",
                desc: "Join our high-energy group sessions ranging from HIIT and Spin to Yoga and Pilates. Experience the power of community and push your limits together.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                color: "bg-violet-500",
              },
              {
                title: "Nutrition Coaching",
                desc: "Fuel your body right with expert nutritional guidance. We help you build sustainable eating habits that support your training and lifestyle goals.",
                icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
                color: "bg-pink-500",
              },
              {
                title: "Recovery & Spa",
                desc: "Rest is just as important as work. Access our premium sauna, steam rooms, and massage therapy services to recover faster and feel rejuvenated.",
                icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
                color: "bg-teal-500",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row gap-6 p-6 md:p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all bg-white"
              >
                <div
                  className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center flex-shrink-0 text-white shadow-lg mx-auto sm:mx-0`}
                >
                  <svg
                    className="w-8 h-8"
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
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-zinc-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Check out our membership plans and find the perfect fit for your
            fitness journey.
          </p>
          <Link
            to="/pricing"
            className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:scale-105"
          >
            View Pricing
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
