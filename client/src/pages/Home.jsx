import React from "react";
import heroImg from "../assets/hero.png";
import yogaImg from "../assets/yoga.png";
import strengthImg from "../assets/strength.png";
import cardioImg from "../assets/cardio.png";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Gym Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 lg:px-24 xl:px-32">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up">
            UNLEASH YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              FULL POTENTIAL
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-xl mb-10">
            Join the elite fitness community where technology meets sweat.
            Experience world-class equipment, expert trainers, and a vibe that
            pushes you further.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all">
              View Programs
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-zinc-900 py-12 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Active Members", value: "2,000+" },
            { label: "Expert Trainers", value: "50+" },
            { label: "Classes Weekly", value: "100+" },
            { label: "Satisfaction", value: "99%" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-2">
                {stat.value}
              </span>
              <span className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Classes Section */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Premium Classes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From high-intensity cardio to serene yoga sessions, we have
              something for every fitness level.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Yoga & Mindfulness",
                img: yogaImg,
                desc: "Find your balance and inner peace with our expert-led yoga sessions.",
              },
              {
                title: "Strength Training",
                img: strengthImg,
                desc: "Build muscle and power with our state-of-the-art free weights and machines.",
              },
              {
                title: "HIIT & Cardio",
                img: cardioImg,
                desc: "Burn calories and boost endurance in our high-energy cardio zones.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all z-10"></div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/90 to-transparent z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Why Choose <span className="text-indigo-500">FitLife?</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              We're not just a gym; we're a community dedicated to your
              transformation. Our facilities are designed to inspire and
              motivate.
            </p>
            <div className="space-y-6">
              {[
                "24/7 Access to all locations",
                "Personalized nutrition plans",
                "Mobile app for tracking progress",
                "Sauna and recovery zones",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <div className="h-48 bg-zinc-800 rounded-2xl p-6 flex flex-col justify-center items-center hover:bg-zinc-700 transition">
                <svg
                  className="w-10 h-10 text-indigo-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="font-semibold">Open 24/7</span>
              </div>
              <div className="h-48 bg-zinc-800 rounded-2xl p-6 flex flex-col justify-center items-center hover:bg-zinc-700 transition">
                <svg
                  className="w-10 h-10 text-indigo-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                <span className="font-semibold">High Energy</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-48 bg-zinc-800 rounded-2xl p-6 flex flex-col justify-center items-center hover:bg-zinc-700 transition">
                <svg
                  className="w-10 h-10 text-indigo-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  ></path>
                </svg>
                <span className="font-semibold">Community</span>
              </div>
              <div className="h-48 bg-zinc-800 rounded-2xl p-6 flex flex-col justify-center items-center hover:bg-zinc-700 transition">
                <svg
                  className="w-10 h-10 text-indigo-500 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="font-semibold">Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-16">
            Simple Pricing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$29",
                features: [
                  "Access to gym floor",
                  "Locker room access",
                  "Free WiFi",
                ],
              },
              {
                name: "Pro",
                price: "$59",
                features: [
                  "All Basic features",
                  "Group classes included",
                  "Guest pass (1/month)",
                  "Sauna access",
                ],
                popular: true,
              },
              {
                name: "Elite",
                price: "$99",
                features: [
                  "All Pro features",
                  "Personal training (2x/mo)",
                  "Nutrition consultation",
                  "Priority support",
                ],
              },
            ].map((plan, idx) => (
              <div
                key={idx}
                className={`relative p-8 rounded-3xl border ${
                  plan.popular
                    ? "border-indigo-500 shadow-2xl scale-105"
                    : "border-gray-200"
                } flex flex-col`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-5xl font-bold text-gray-900 mb-6">
                  {plan.price}
                  <span className="text-lg text-gray-500 font-normal">/mo</span>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center justify-center gap-2 text-gray-600"
                    >
                      <svg
                        className="w-5 h-5 text-green-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-full font-semibold transition-all ${
                    plan.popular
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
