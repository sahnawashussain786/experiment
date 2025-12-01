import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const Payment = () => {
  const { plan } = useParams();
  const planName = plan
    ? plan.charAt(0).toUpperCase() + plan.slice(1)
    : "Membership";

  return (
    <div className="min-h-screen bg-deep-bg text-white pt-20 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-zinc-900/50 p-8 rounded-3xl border border-white/10 h-fit"
        >
          <h2 className="text-2xl font-bold mb-6 font-heading">
            Order Summary
          </h2>
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/10">
            <div>
              <h3 className="font-bold text-lg text-white">{planName} Plan</h3>
              <p className="text-gray-400 text-sm">Monthly subscription</p>
            </div>
            <span className="text-xl font-bold text-neon-blue">
              {plan === "basic" ? "$29" : plan === "pro" ? "$59" : "$99"}
            </span>
          </div>
          <div className="flex justify-between items-center mb-2 text-sm text-gray-400">
            <span>Subtotal</span>
            <span>
              {plan === "basic"
                ? "$29.00"
                : plan === "pro"
                ? "$59.00"
                : "$99.00"}
            </span>
          </div>
          <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
            <span>Tax (Estimated)</span>
            <span>$0.00</span>
          </div>
          <div className="flex justify-between items-center pt-4 border-t border-white/10">
            <span className="font-bold text-lg">Total</span>
            <span className="font-bold text-2xl text-white">
              {plan === "basic"
                ? "$29.00"
                : plan === "pro"
                ? "$59.00"
                : "$99.00"}
            </span>
          </div>

          <div className="mt-8 bg-neon-blue/10 rounded-xl p-4 border border-neon-blue/20">
            <p className="text-sm text-neon-blue flex items-center gap-2">
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
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                ></path>
              </svg>
              Secure SSL Encryption
            </p>
          </div>
        </motion.div>

        {/* Payment Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-card-bg p-8 rounded-3xl border border-white/10 shadow-2xl"
        >
          <h2 className="text-2xl font-bold mb-6 font-heading">
            Payment Details
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Cardholder Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl bg-deep-bg border border-white/10 text-white focus:outline-none focus:border-neon-blue transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2">
                Card Number
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-deep-bg border border-white/10 text-white focus:outline-none focus:border-neon-blue transition-colors pl-12"
                  placeholder="0000 0000 0000 0000"
                />
                <svg
                  className="w-6 h-6 text-gray-500 absolute left-4 top-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  ></path>
                </svg>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Expiry Date
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-deep-bg border border-white/10 text-white focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  CVC
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-deep-bg border border-white/10 text-white focus:outline-none focus:border-neon-blue transition-colors"
                  placeholder="123"
                />
              </div>
            </div>

            <button
              type="button"
              className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-xl hover:shadow-lg hover:shadow-neon-blue/20 transition-all transform hover:-translate-y-1 mt-4"
            >
              Pay Now
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              By clicking "Pay Now", you agree to our Terms of Service and
              Privacy Policy.
            </p>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Payment;
