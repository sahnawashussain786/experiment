import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "29",
      description: "Essential access for the casual gym-goer.",
      features: [
        "Access to gym floor",
        "Locker room access",
        "Free WiFi",
        "1 Guest pass/month",
      ],
      color: "text-white",
      buttonColor: "bg-white/10 hover:bg-white/20",
    },
    {
      name: "Pro",
      price: "59",
      description: "Perfect for those dedicated to their fitness journey.",
      features: [
        "All Basic features",
        "Unlimited Group classes",
        "Sauna & Steam room",
        "Towel service",
        "5 Guest passes/month",
      ],
      popular: true,
      color: "text-neon-purple",
      buttonColor: "bg-white text-black hover:bg-gray-100",
    },
    {
      name: "Elite",
      price: "99",
      description: "The ultimate package for maximum results.",
      features: [
        "All Pro features",
        "2 Personal Training sessions/mo",
        "Nutrition consultation",
        "Priority support",
        "Unlimited Guest passes",
        "Private locker",
      ],
      color: "text-neon-blue",
      buttonColor: "bg-neon-blue hover:bg-neon-purple",
    },
  ];

  return (
    <div className="bg-deep-bg text-white min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-blue/10 rounded-full blur-[150px] pointer-events-none"></div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-heading"
        >
          Choose Your <span className="text-neon-purple">Power</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl text-gray-300 max-w-2xl mx-auto"
        >
          Transparent pricing. No hidden fees. Cancel anytime.
        </motion.p>
      </section>

      {/* Pricing Cards */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-3xl border ${
                plan.popular
                  ? "border-neon-purple bg-zinc-900/80 shadow-[0_0_50px_rgba(139,92,246,0.15)] md:scale-110 z-10"
                  : "border-white/10 bg-card-bg hover:border-white/20"
              } flex flex-col h-full transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-neon-blue to-neon-purple text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg uppercase tracking-wider">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3
                  className={`text-2xl font-bold mb-2 font-heading ${plan.color}`}
                >
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold text-white">
                  ${plan.price}
                </span>
                <span className="text-gray-500">/month</span>
              </div>

              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <svg
                      className={`w-5 h-5 mt-0.5 ${
                        plan.popular ? "text-neon-purple" : "text-neon-blue"
                      }`}
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
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/payment/${plan.name.toLowerCase()}`}
                className="w-full"
              >
                <button
                  className={`w-full py-4 rounded-xl font-bold transition-all duration-300 shadow-lg ${plan.buttonColor}`}
                >
                  Choose {plan.name}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900/20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-heading">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Can I freeze my membership?",
                a: "Yes, you can freeze your membership for up to 3 months per year for a small fee.",
              },
              {
                q: "Is there a joining fee?",
                a: "We occasionally have promotions with $0 joining fee. Otherwise, it's a one-time $49 fee.",
              },
              {
                q: "Can I bring a guest?",
                a: "Basic members get 1 guest pass per month. Pro and Elite members get more!",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-card-bg border border-white/5 rounded-2xl p-6"
              >
                <h3 className="text-lg font-bold text-white mb-2">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
