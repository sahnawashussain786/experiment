import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  RedirectToSignIn,
  useUser,
  useAuth,
} from "@clerk/clerk-react";

const PaymentContent = () => {
  const { plan } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const { getToken } = useAuth();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("card"); // 'card' or 'upi'

  // Plan details mapping
  const planDetails = {
    basic: { name: "Basic Plan", price: 29 },
    pro: { name: "Pro Plan", price: 59 },
    elite: { name: "Elite Plan", price: 99 },
  };

  const selectedPlan = planDetails[plan] || planDetails.basic;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = await getToken();

      // In a real app, you would gather form data here
      const paymentData = {
        plan: selectedPlan.name,
        paymentMethod,
        amount: selectedPlan.price,
      };

      const response = await fetch("http://localhost:5000/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(paymentData),
      });

      if (response.ok) {
        setSuccess(true);
        setTimeout(() => {
          navigate("/");
        }, 3000);
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (error) {
      console.error("Payment Error:", error);
      alert("An error occurred during payment.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-deep-bg px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[120px]"></div>
        <div className="bg-card-bg p-8 sm:p-10 rounded-3xl shadow-2xl text-center max-w-md w-full border border-white/5 relative z-10 animate-fade-in-up">
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-neon-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-neon-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
            <svg
              className="w-10 h-10 sm:w-12 sm:h-12 text-neon-cyan"
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
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-heading">
            Payment Successful!
          </h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Welcome to the FitLife family! You are now subscribed to the{" "}
            <span className="font-bold text-neon-purple">
              {selectedPlan.name}
            </span>
            .
          </p>
          <Link
            to="/"
            className="inline-block w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all transform hover:scale-[1.02]"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-deep-bg py-12 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Order Summary */}
        <div className="bg-card-bg text-white p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-white/5 sticky top-24">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 md:mb-8 font-heading">
            Order Summary
          </h2>
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-white/10">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Plan</h3>
              <select
                value={plan}
                onChange={(e) => navigate(`/payment/${e.target.value}`)}
                className="bg-zinc-900/50 text-white text-sm rounded-lg px-3 py-2 border border-white/10 focus:ring-2 focus:ring-neon-blue outline-none cursor-pointer hover:border-white/20 transition-colors w-full sm:w-auto"
              >
                {Object.keys(planDetails).map((key) => (
                  <option key={key} value={key}>
                    {planDetails[key].name}
                  </option>
                ))}
              </select>
              <p className="text-gray-400 text-xs sm:text-sm mt-2">
                Monthly Subscription
              </p>
            </div>
            <div className="text-2xl sm:text-3xl font-bold text-neon-blue">
              ${selectedPlan.price}
            </div>
          </div>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-gray-400 text-sm sm:text-base">
              <span>Subtotal</span>
              <span>${selectedPlan.price}.00</span>
            </div>
            <div className="flex justify-between text-gray-400 text-sm sm:text-base">
              <span>Tax (Estimated)</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-lg sm:text-xl font-bold pt-4 border-t border-white/10">
              <span>Total</span>
              <span>${selectedPlan.price}.00</span>
            </div>
          </div>
          <div className="bg-neon-purple/10 p-4 sm:p-5 rounded-xl text-xs sm:text-sm text-gray-300 border border-neon-purple/20 flex items-start gap-3">
            <svg
              className="w-5 h-5 text-neon-purple flex-shrink-0 mt-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
            <p>
              You will be charged{" "}
              <span className="font-bold text-white">
                ${selectedPlan.price}
              </span>{" "}
              monthly. Cancel anytime from your dashboard.
            </p>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-card-bg p-6 sm:p-8 md:p-10 rounded-2xl md:rounded-3xl shadow-2xl border border-white/5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6 md:mb-8 font-heading">
            Payment Details
          </h2>

          {/* Payment Method Toggle */}
          <div className="flex gap-3 sm:gap-4 mb-6 md:mb-8">
            <button
              type="button"
              onClick={() => setPaymentMethod("card")}
              className={`flex-1 py-3 rounded-xl font-semibold border transition-all text-sm sm:text-base ${
                paymentMethod === "card"
                  ? "bg-neon-blue/10 border-neon-blue text-neon-blue shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                  : "border-white/10 text-gray-400 hover:bg-white/5"
              }`}
            >
              Credit Card
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("upi")}
              className={`flex-1 py-3 rounded-xl font-semibold border transition-all text-sm sm:text-base ${
                paymentMethod === "upi"
                  ? "bg-neon-purple/10 border-neon-purple text-neon-purple shadow-[0_0_15px_rgba(139,92,246,0.2)]"
                  : "border-white/10 text-gray-400 hover:bg-white/5"
              }`}
            >
              UPI
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
            {paymentMethod === "card" ? (
              <>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2 ml-1">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 text-white focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder-gray-600 hover:border-white/20"
                    placeholder="John Doe"
                    defaultValue={user?.fullName || ""}
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2 ml-1">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      maxLength="19"
                      className="w-full px-4 py-3 pl-12 rounded-xl bg-zinc-900/50 border border-white/10 text-white focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder-gray-600 hover:border-white/20"
                      placeholder="0000 0000 0000 0000"
                    />
                    <svg
                      className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
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

                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2 ml-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      required
                      maxLength="5"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 text-white focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder-gray-600 hover:border-white/20"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2 ml-1">
                      CVC
                    </label>
                    <input
                      type="text"
                      required
                      maxLength="3"
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900/50 border border-white/10 text-white focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder-gray-600 hover:border-white/20"
                      placeholder="123"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-400 mb-2 ml-1">
                  UPI ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 pl-12 rounded-xl bg-zinc-900/50 border border-white/10 text-white focus:ring-1 focus:ring-neon-blue focus:border-neon-blue outline-none transition-all placeholder-gray-600 hover:border-white/20"
                    placeholder="username@upi"
                  />
                  <svg
                    className="w-6 h-6 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.131A8 8 0 008 8M2.205 7.704C1.611 6.23 1.208 4.655 1.035 3m19.93 0c-.173 1.655-.576 3.23-1.17 4.704M11 2v2m2 0v2M6.7 3.3l1.4 1.4M17.3 3.3l-1.4 1.4"
                    ></path>
                  </svg>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 ml-1">
                  Enter your Virtual Payment Address (VPA) to proceed.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                `Pay $${selectedPlan.price}.00`
              )}
            </button>

            <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-2">
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
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                ></path>
              </svg>
              Secure 256-bit SSL Encrypted Payment
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

const Payment = () => {
  return (
    <>
      <SignedIn>
        <PaymentContent />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
};

export default Payment;
