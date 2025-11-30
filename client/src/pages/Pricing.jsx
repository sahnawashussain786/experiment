import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="w-full overflow-x-hidden bg-deep-bg text-white">
      {/* Hero Section */}
      <div className="relative w-full py-24 md:py-32 bg-deep-bg text-center px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-purple/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up font-heading">
            INVEST IN{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              YOURSELF
            </span>
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mx-auto font-light">
            Choose the plan that fits your goals. No hidden fees, just results.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Basic Plan */}
          <div className="bg-card-bg p-10 rounded-3xl border border-white/5 flex flex-col hover:border-neon-blue/30 hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-white mb-2 font-heading">
              Basic
            </h3>
            <div className="text-5xl font-bold text-white mb-6">
              $29<span className="text-lg text-gray-500 font-normal">/mo</span>
            </div>
            <p className="text-gray-400 mb-8 text-sm">
              Essential access for the self-motivated.
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {[
                "Access to gym floor",
                "Locker room access",
                "Free WiFi",
                "Open 24/7",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <svg
                    className="w-5 h-5 text-neon-blue flex-shrink-0"
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
            <Link
              to="/payment/basic"
              className="w-full py-4 rounded-full font-bold bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-neon-blue/50 transition-all text-center block"
            >
              Choose Basic
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-zinc-900/80 p-10 rounded-3xl border border-neon-purple flex flex-col shadow-[0_0_40px_rgba(139,92,246,0.15)] transform md:-translate-y-4 z-20 backdrop-blur-sm">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg">
              Most Popular
            </div>
            <h3 className="text-3xl font-bold text-white mb-2 font-heading">
              Pro
            </h3>
            <div className="text-6xl font-bold text-white mb-6">
              $59<span className="text-lg text-gray-400 font-normal">/mo</span>
            </div>
            <p className="text-gray-300 mb-8 text-sm">
              Everything you need to level up.
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {[
                "All Basic features",
                "Unlimited Group Classes",
                "Guest pass (1/month)",
                "Sauna & Steam Room",
                "1 Free PT Session",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-white">
                  <svg
                    className="w-5 h-5 text-neon-purple flex-shrink-0"
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
            <Link
              to="/payment/pro"
              className="w-full py-4 rounded-full font-bold bg-gradient-to-r from-neon-blue to-neon-purple text-white hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all transform hover:scale-105 text-center block"
            >
              Choose Pro
            </Link>
          </div>

          {/* Elite Plan */}
          <div className="bg-card-bg p-10 rounded-3xl border border-white/5 flex flex-col hover:border-neon-cyan/30 hover:shadow-xl transition-all duration-300 group">
            <h3 className="text-2xl font-bold text-white mb-2 font-heading">
              Elite
            </h3>
            <div className="text-5xl font-bold text-white mb-6">
              $99<span className="text-lg text-gray-500 font-normal">/mo</span>
            </div>
            <p className="text-gray-400 mb-8 text-sm">
              Maximum results, maximum support.
            </p>
            <ul className="space-y-4 mb-10 flex-1">
              {[
                "All Pro features",
                "Personal Training (2x/mo)",
                "Nutrition Consultation",
                "Priority Support",
                "Towel Service",
                "Smoothie Bar Discount",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <svg
                    className="w-5 h-5 text-neon-cyan flex-shrink-0"
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
            <Link
              to="/payment/elite"
              className="w-full py-4 rounded-full font-bold bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-neon-cyan/50 transition-all text-center block"
            >
              Choose Elite
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16 font-heading">
            Compare <span className="text-neon-blue">Plans</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-card-bg rounded-3xl shadow-xl overflow-hidden border border-white/5">
              <thead>
                <tr className="bg-zinc-900/80 text-white border-b border-white/10">
                  <th className="p-8 text-lg font-heading">Features</th>
                  <th className="p-8 text-center text-lg font-heading">
                    Basic
                  </th>
                  <th className="p-8 text-center bg-neon-purple/10 text-neon-purple text-lg font-heading border-x border-white/5">
                    Pro
                  </th>
                  <th className="p-8 text-center text-lg font-heading">
                    Elite
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  {
                    feature: "Gym Access",
                    basic: true,
                    pro: true,
                    elite: true,
                  },
                  { feature: "Free WiFi", basic: true, pro: true, elite: true },
                  {
                    feature: "Locker Rooms",
                    basic: true,
                    pro: true,
                    elite: true,
                  },
                  {
                    feature: "Group Classes",
                    basic: false,
                    pro: true,
                    elite: true,
                  },
                  {
                    feature: "Guest Passes",
                    basic: false,
                    pro: "1/mo",
                    elite: "Unlimited",
                  },
                  {
                    feature: "Sauna Access",
                    basic: false,
                    pro: true,
                    elite: true,
                  },
                  {
                    feature: "Personal Training",
                    basic: false,
                    pro: false,
                    elite: "2x/mo",
                  },
                  {
                    feature: "Nutrition Plan",
                    basic: false,
                    pro: false,
                    elite: true,
                  },
                  {
                    feature: "Towel Service",
                    basic: false,
                    pro: false,
                    elite: true,
                  },
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="p-6 font-medium text-gray-300 pl-8">
                      {row.feature}
                    </td>
                    <td className="p-6 text-center text-gray-500">
                      {row.basic === true ? (
                        <span className="text-neon-blue">✔</span>
                      ) : row.basic === false ? (
                        <span className="text-gray-600">—</span>
                      ) : (
                        <span className="text-gray-300">{row.basic}</span>
                      )}
                    </td>
                    <td className="p-6 text-center text-white bg-neon-purple/5 border-x border-white/5 font-semibold">
                      {row.pro === true ? (
                        <span className="text-neon-purple">✔</span>
                      ) : row.pro === false ? (
                        <span className="text-gray-600">—</span>
                      ) : (
                        <span className="text-white">{row.pro}</span>
                      )}
                    </td>
                    <td className="p-6 text-center text-gray-500">
                      {row.elite === true ? (
                        <span className="text-neon-cyan">✔</span>
                      ) : row.elite === false ? (
                        <span className="text-gray-600">—</span>
                      ) : (
                        <span className="text-gray-300">{row.elite}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-deep-bg border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-all duration-500">
          {[
            {
              text: "30-Day Money Back Guarantee",
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              text: "No Hidden Fees",
              icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              text: "Secure Payment",
              icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z",
            },
            {
              text: "Cancel Anytime",
              icon: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z",
            },
          ].map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 group">
              <svg
                className="w-8 h-8 text-neon-blue group-hover:text-neon-purple transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={badge.icon}
                ></path>
              </svg>
              <span className="font-bold text-gray-300 group-hover:text-white transition-colors">
                {badge.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-deep-bg">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-16 font-heading">
            Frequently Asked <span className="text-neon-purple">Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is there a joining fee?",
                a: "We have a one-time initiation fee of $49 for Basic and Pro plans. It's waived for Elite members!",
              },
              {
                q: "Can I cancel anytime?",
                a: "Yes, we offer month-to-month contracts. Just give us 30 days notice.",
              },
              {
                q: "Are classes included?",
                a: "Group classes are included in Pro and Elite memberships. Basic members can pay a drop-in fee.",
              },
              {
                q: "Do you offer day passes?",
                a: "Yes, day passes are available for $15 if you want to try us out before committing.",
              },
            ].map((item, idx) => (
              <div key={idx} className="border-b border-white/10 pb-6">
                <h3 className="text-xl font-semibold text-white mb-2 font-heading">
                  {item.q}
                </h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900/50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6 font-heading">
            Still have questions?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-10 py-4 border border-white/20 text-white rounded-full hover:bg-white hover:text-black transition-all font-bold"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
