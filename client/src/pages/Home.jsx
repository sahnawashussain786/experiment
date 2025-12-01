import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";
import yogaImg from "../assets/yoga.png";
import strengthImg from "../assets/strength.png";
import cardioImg from "../assets/cardio.png";
import { classes } from "../data/classes";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full overflow-x-hidden bg-deep-bg text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-deep-bg via-transparent to-deep-bg z-10"></div>
          <img
            src={heroImg}
            alt="Gym Hero"
            className="w-full h-full object-cover opacity-40 scale-105 animate-pulse-glow"
          />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[128px] animate-float"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/20 rounded-full blur-[128px] animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center"
          >
            <motion.span
              variants={itemVariants}
              className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-sm font-bold tracking-wider mb-6 backdrop-blur-md"
            >
              REDEFINE YOUR LIMITS
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold font-heading leading-tight mb-6"
            >
              UNLEASH YOUR <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan animate-shimmer bg-[length:200%_100%]">
                FULL POTENTIAL
              </span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-gray-300 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed font-light"
            >
              Join the elite fitness community where technology meets sweat.
              Experience world-class equipment, expert trainers, and a vibe that
              pushes you further.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link
                to="/sign-up"
                className="px-10 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all transform hover:scale-105 text-lg"
              >
                Start Your Journey
              </Link>
              <Link
                to="/pricing"
                className="px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-neon-cyan/50 transition-all text-lg hover:text-neon-cyan"
              >
                View Pricing
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <svg
            className="w-6 h-6 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-zinc-900/30 border-y border-white/5 relative z-20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: "Active Members", value: "2,000+" },
            { label: "Expert Trainers", value: "50+" },
            { label: "Classes Weekly", value: "100+" },
            { label: "Satisfaction", value: "99%" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <span className="block text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors font-heading">
                {stat.value}
              </span>
              <span className="text-gray-400 text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Classes Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading"
            >
              Premium <span className="text-neon-purple">Classes</span>
            </motion.h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              From high-intensity cardio to serene yoga sessions, we have
              something for every fitness level.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classes.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <Link
                  to={`/classes/${item.id}`}
                  className="group relative block h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-card-bg"
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-transparent to-transparent z-20 opacity-90"></div>

                  <div className="absolute bottom-0 left-0 w-full p-8 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-3xl font-bold text-white mb-3 font-heading group-hover:text-neon-cyan transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {item.shortDesc}
                    </p>
                    <div className="flex items-center gap-2 text-neon-blue font-bold uppercase tracking-wider text-xs">
                      <span>Explore Class</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="py-32 bg-zinc-900/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-neon-blue/10 rounded-full blur-[150px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
              Why Choose <span className="text-neon-blue">FitLife?</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              We're not just a gym; we're a community dedicated to your
              transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6 h-auto md:h-[800px]">
            {/* Large Feature */}
            <div className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-neon-blue/20 flex items-center justify-center mb-6 text-neon-blue">
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      ></path>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-4 font-heading">
                    State-of-the-Art Equipment
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                    Train with the latest technology and premium equipment
                    designed to maximize your performance and safety.
                  </p>
                </div>
                <div className="mt-10 rounded-2xl overflow-hidden h-64 border border-white/5">
                  <img
                    src={strengthImg}
                    alt="Equipment"
                    className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Small Feature 1 */}
            <div className="glass-card rounded-3xl p-8 flex flex-col justify-center hover:bg-white/5 transition-colors group">
              <svg
                className="w-12 h-12 text-neon-purple mb-6 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">
                Open 24/7
              </h3>
              <p className="text-gray-400 text-sm">
                Train on your schedule, day or night.
              </p>
            </div>

            {/* Small Feature 2 */}
            <div className="glass-card rounded-3xl p-8 flex flex-col justify-center hover:bg-white/5 transition-colors group">
              <svg
                className="w-12 h-12 text-neon-cyan mb-6 group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              <h3 className="text-xl font-bold text-white mb-2 font-heading">
                Community
              </h3>
              <p className="text-gray-400 text-sm">
                Join a supportive tribe of fitness enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-32 bg-deep-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-heading">
                Simple <span className="text-neon-purple">Pricing</span>
              </h2>
              <p className="text-gray-400 text-lg">
                No hidden fees. Just results.
              </p>
            </div>
            <Link
              to="/pricing"
              className="text-neon-blue hover:text-white font-bold flex items-center gap-2 transition-colors"
            >
              See all plans
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                ></path>
              </svg>
            </Link>
          </div>

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
                className={`relative p-10 rounded-3xl border ${
                  plan.popular
                    ? "border-neon-purple bg-zinc-900/80 shadow-[0_0_40px_rgba(139,92,246,0.15)] scale-105 z-10"
                    : "border-white/10 bg-card-bg hover:border-white/20"
                } flex flex-col transition-all duration-300`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                  {plan.name}
                </h3>
                <div className="text-5xl font-bold text-white mb-8">
                  {plan.price}
                  <span className="text-lg text-gray-500 font-normal">/mo</span>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center ${
                          plan.popular
                            ? "bg-neon-purple/20 text-neon-purple"
                            : "bg-white/10 text-white"
                        }`}
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all text-lg ${
                    plan.popular
                      ? "bg-white text-black hover:bg-gray-100 hover:shadow-lg"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  Choose {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 font-heading">
            Join the Movement
          </h2>
          <p className="text-white/90 text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Subscribe to our newsletter for exclusive workout plans, nutrition
            tips, and member-only offers.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:bg-white/20 transition backdrop-blur-md"
            />
            <button
              type="button"
              className="px-10 py-4 bg-white text-neon-purple font-bold rounded-full hover:bg-gray-100 transition shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
