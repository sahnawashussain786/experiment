import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="w-full overflow-x-hidden bg-zinc-50">
      {/* Hero Section */}
      <div className="relative w-full py-16 md:py-24 bg-zinc-900 text-center px-6">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          INVEST IN{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
            YOURSELF
          </span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
          Choose the plan that fits your goals. No hidden fees, just results.
        </p>
      </div>

      {/* Pricing Cards */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
            <div className="text-5xl font-bold text-gray-900 mb-6">
              $29<span className="text-lg text-gray-500 font-normal">/mo</span>
            </div>
            <p className="text-gray-600 mb-8">
              Essential access for the self-motivated.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "Access to gym floor",
                "Locker room access",
                "Free WiFi",
                "Open 24/7",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0"
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
              className="w-full py-3 rounded-full font-semibold bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all text-center block"
            >
              Choose Basic
            </Link>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-zinc-900 p-8 rounded-3xl border border-indigo-500 flex flex-col shadow-2xl transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-indigo-600 to-violet-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wide">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Pro</h3>
            <div className="text-5xl font-bold text-white mb-6">
              $59<span className="text-lg text-gray-400 font-normal">/mo</span>
            </div>
            <p className="text-gray-400 mb-8">
              Everything you need to level up.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "All Basic features",
                "Unlimited Group Classes",
                "Guest pass (1/month)",
                "Sauna & Steam Room",
                "1 Free PT Session",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <svg
                    className="w-5 h-5 text-indigo-400 flex-shrink-0"
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
              className="w-full py-3 rounded-full font-bold bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:scale-105 text-center block"
            >
              Choose Pro
            </Link>
          </div>

          {/* Elite Plan */}
          <div className="bg-white p-8 rounded-3xl border border-gray-200 flex flex-col hover:shadow-xl transition-all">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Elite</h3>
            <div className="text-5xl font-bold text-gray-900 mb-6">
              $99<span className="text-lg text-gray-500 font-normal">/mo</span>
            </div>
            <p className="text-gray-600 mb-8">
              Maximum results, maximum support.
            </p>
            <ul className="space-y-4 mb-8 flex-1">
              {[
                "All Pro features",
                "Personal Training (2x/mo)",
                "Nutrition Consultation",
                "Priority Support",
                "Towel Service",
                "Smoothie Bar Discount",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0"
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
              className="w-full py-3 rounded-full font-semibold bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all text-center block"
            >
              Choose Elite
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-white rounded-2xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-zinc-900 text-white">
                  <th className="p-6">Features</th>
                  <th className="p-6 text-center">Basic</th>
                  <th className="p-6 text-center bg-indigo-600">Pro</th>
                  <th className="p-6 text-center">Elite</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
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
                  <tr key={idx} className="hover:bg-gray-50 transition">
                    <td className="p-6 font-medium text-gray-900">
                      {row.feature}
                    </td>
                    <td className="p-6 text-center text-gray-600">
                      {row.basic === true ? (
                        <span className="text-green-500">✔</span>
                      ) : row.basic === false ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        row.basic
                      )}
                    </td>
                    <td className="p-6 text-center text-gray-900 bg-indigo-50/50 font-semibold">
                      {row.pro === true ? (
                        <span className="text-green-500">✔</span>
                      ) : row.pro === false ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        row.pro
                      )}
                    </td>
                    <td className="p-6 text-center text-gray-600">
                      {row.elite === true ? (
                        <span className="text-green-500">✔</span>
                      ) : row.elite === false ? (
                        <span className="text-gray-300">—</span>
                      ) : (
                        row.elite
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
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
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
            <div key={idx} className="flex items-center gap-3">
              <svg
                className="w-8 h-8 text-indigo-600"
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
              <span className="font-bold text-gray-900">{badge.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
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
              <div key={idx} className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.q}
                </h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-zinc-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-6">
            Still have questions?
          </h2>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
