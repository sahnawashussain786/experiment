import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";
import yogaImg from "../assets/yoga.png";
import strengthImg from "../assets/strength.png";
import cardioImg from "../assets/cardio.png";

import { classes } from "../data/classes";

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden bg-deep-bg text-white">
      {/* Hero Section */}
      <div className="relative w-full min-h-[500px] sm:min-h-[600px] md:h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImg}
            alt="Gym Hero"
            className="w-full h-full object-cover opacity-50 md:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-deep-bg via-deep-bg/90 md:via-deep-bg/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-transparent to-transparent"></div>
        </div>

        {/* Animated Glows - Reduced on mobile */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-purple/20 md:bg-neon-purple/30 rounded-full blur-[80px] md:blur-[128px] animate-pulse-glow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-neon-blue/15 md:bg-neon-blue/20 rounded-full blur-[80px] md:blur-[128px] animate-pulse-glow delay-1000"></div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col justify-center h-full py-20 md:py-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-4 md:mb-6 animate-fade-in-up font-heading">
            UNLEASH YOUR <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-cyan">
              FULL POTENTIAL
            </span>
          </h1>
          <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl max-w-2xl mb-8 md:mb-10 font-light leading-relaxed">
            Join the elite fitness community where technology meets sweat.
            Experience world-class equipment, expert trainers, and a vibe that
            pushes you further.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link
              to="/sign-in"
              className="px-8 md:px-10 py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-full hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all transform hover:scale-105 text-center text-base md:text-lg border border-white/10 min-h-[56px] flex items-center justify-center"
            >
              Start Your Journey
            </Link>
            <Link
              to="/pricing"
              className="px-8 md:px-10 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-neon-cyan/50 transition-all text-center text-base md:text-lg hover:text-neon-cyan min-h-[56px] flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-zinc-900/50 backdrop-blur-sm py-12 md:py-16 border-y border-white/5 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
          {[
            { label: "Active Members", value: "2,000+" },
            { label: "Expert Trainers", value: "50+" },
            { label: "Classes Weekly", value: "100+" },
            { label: "Satisfaction", value: "99%" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center group">
              <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-neon-cyan transition-colors font-heading">
                {stat.value}
              </span>
              <span className="text-gray-400 text-xs sm:text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Classes Section */}
      <section className="py-16 md:py-24 bg-deep-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6 font-heading">
              Our Premium <span className="text-neon-purple">Classes</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg px-4">
              From high-intensity cardio to serene yoga sessions, we have
              something for every fitness level. Click on a class to learn more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {classes.map((item, idx) => (
              <Link
                to={`/classes/${item.id}`}
                key={idx}
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-white/5 bg-card-bg shadow-2xl cursor-pointer block hover:border-neon-purple/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all z-10"></div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 bg-gradient-to-t from-deep-bg via-deep-bg/90 to-transparent z-20">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 font-heading group-hover:text-neon-cyan transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm opacity-100 md:opacity-0 md:group-hover:opacity-100 transform md:translate-y-4 md:group-hover:translate-y-0 transition-all duration-300">
                    {item.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 bg-zinc-900/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-neon-blue/10 rounded-full blur-[80px] md:blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid md:grid-cols-2 gap-10 md:gap-16 items-center relative z-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8 font-heading">
              Why Choose <span className="text-neon-blue">FitLife?</span>
            </h2>
            <p className="text-gray-400 mb-8 md:mb-10 text-base md:text-lg leading-relaxed">
              We're not just a gym; we're a community dedicated to your
              transformation. Our facilities are designed to inspire and
              motivate.
            </p>
            <div className="space-y-4 md:space-y-6">
              {[
                "24/7 Access to all locations",
                "Personalized nutrition plans",
                "Mobile app for tracking progress",
                "Sauna and recovery zones",
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-4 group">
                  <div className="w-8 h-8 min-w-[32px] rounded-full bg-neon-blue/20 flex items-center justify-center group-hover:bg-neon-blue transition-colors">
                    <svg
                      className="w-4 h-4 text-neon-blue group-hover:text-white transition-colors"
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
                  <span className="text-base md:text-lg text-gray-200 group-hover:text-white transition-colors">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-0">
            <div className="space-y-4 md:space-y-6 md:mt-12">
              <div className="h-40 sm:h-48 md:h-56 bg-card-bg border border-white/5 rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-center items-center hover:bg-zinc-800 hover:border-neon-blue/30 hover:shadow-[0_0_20px_rgba(99,102,241,0.1)] transition-all duration-300 group">
                <svg
                  className="w-12 h-12 text-neon-blue mb-6 group-hover:scale-110 transition-transform"
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
                <span className="font-bold text-lg font-heading">
                  Open 24/7
                </span>
              </div>
              <div className="h-56 bg-card-bg border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center hover:bg-zinc-800 hover:border-neon-purple/30 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] transition-all duration-300 group">
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                <span className="font-bold text-lg font-heading">
                  High Energy
                </span>
              </div>
            </div>
            <div className="space-y-6">
              <div className="h-56 bg-card-bg border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center hover:bg-zinc-800 hover:border-neon-cyan/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] transition-all duration-300 group">
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
                <span className="font-bold text-lg font-heading">
                  Community
                </span>
              </div>
              <div className="h-56 bg-card-bg border border-white/5 rounded-3xl p-8 flex flex-col justify-center items-center hover:bg-zinc-800 hover:border-white/20 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 group">
                <svg
                  className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="font-bold text-lg font-heading">Results</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-deep-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 font-heading">
            Stories of <span className="text-neon-cyan">Transformation</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Member since 2021",
                quote:
                  "FitLife completely changed my perspective on fitness. The community here is unmatched.",
                img: "https://ui-avatars.com/api/?name=Sarah+Jenkins&background=6366f1&color=fff",
              },
              {
                name: "Mike Ross",
                role: "Pro Athlete",
                quote:
                  "The facilities are world-class. Everything I need for my training is right here.",
                img: "https://ui-avatars.com/api/?name=Mike+Ross&background=8b5cf6&color=fff",
              },
              {
                name: "Emily Chen",
                role: "Yoga Enthusiast",
                quote:
                  "The yoga classes are my sanctuary. The instructors are incredibly knowledgeable and supportive.",
                img: "https://ui-avatars.com/api/?name=Emily+Chen&background=06b6d4&color=fff",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-card-bg p-8 rounded-3xl border border-white/5 hover:border-neon-blue/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-white/10"
                  />
                  <div>
                    <h4 className="font-bold text-white text-lg font-heading">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-neon-blue">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-400 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex text-yellow-400 mt-6 gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 font-heading">
            Simple <span className="text-neon-purple">Pricing</span>
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
                className={`relative p-10 rounded-3xl border ${
                  plan.popular
                    ? "border-neon-purple bg-zinc-900/80 shadow-[0_0_30px_rgba(139,92,246,0.15)] scale-105 z-10"
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
                      className="flex items-center justify-center gap-3 text-gray-300"
                    >
                      <svg
                        className="w-5 h-5 text-neon-cyan"
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
                  className={`w-full py-4 rounded-full font-bold transition-all text-lg ${
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

      {/* Blog Preview Section */}
      <section className="py-24 bg-deep-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-heading">
                Latest from the <span className="text-neon-blue">Blog</span>
              </h2>
              <p className="text-gray-400 text-lg">
                Expert tips, nutrition advice, and success stories.
              </p>
            </div>
            <Link
              to="/blog"
              className="text-neon-blue hover:text-neon-purple font-medium flex items-center gap-2 transition-colors"
            >
              View all articles
              <svg
                className="w-4 h-4"
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
                title: "10 Tips for Building Muscle",
                category: "Training",
                date: "Oct 12, 2023",
                img: strengthImg,
              },
              {
                title: "The Ultimate Guide to Meal Prep",
                category: "Nutrition",
                date: "Oct 08, 2023",
                img: cardioImg,
              },
              {
                title: "Mindfulness in Motion",
                category: "Wellness",
                date: "Oct 05, 2023",
                img: yogaImg,
              },
            ].map((post, idx) => (
              <div
                key={idx}
                className="group cursor-pointer bg-card-bg border border-white/5 rounded-3xl overflow-hidden hover:transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-neon-blue/10 transition-all duration-300"
              >
                <div className="h-56 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                    <span className="text-neon-blue">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-purple transition-colors font-heading">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
                    Discover the secrets to achieving your fitness goals with
                    our comprehensive guide...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-blue to-neon-purple opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20 mix-blend-overlay"></div>

        {/* Abstract Shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-heading">
            Join the Movement
          </h2>
          <p className="text-white/90 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
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
