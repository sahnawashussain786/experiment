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
      <div className="min-h-screen flex items-center justify-center bg-zinc-50 px-6">
        <div className="bg-white p-8 rounded-3xl shadow-xl text-center max-w-md w-full border border-gray-100">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-600"
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Payment Successful!
          </h2>
          <p className="text-gray-600 mb-8">
            Welcome to the FitLife family! You are now subscribed to the{" "}
            <span className="font-bold text-indigo-600">
              {selectedPlan.name}
            </span>
            .
          </p>
          <Link
            to="/"
            className="inline-block w-full py-3 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all"
          >
            Go to Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-20 px-6">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Order Summary */}
        <div className="bg-zinc-900 text-white p-8 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-bold mb-8">Order Summary</h2>
          <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-700">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-1">Plan</h3>
              <select
                value={plan}
                onChange={(e) => navigate(`/payment/${e.target.value}`)}
                className="bg-zinc-800 text-white text-sm rounded-lg px-3 py-2 border border-zinc-700 focus:ring-2 focus:ring-indigo-500 outline-none cursor-pointer"
              >
                {Object.keys(planDetails).map((key) => (
                  <option key={key} value={key}>
                    {planDetails[key].name}
                  </option>
                ))}
              </select>
              <p className="text-gray-400 text-sm mt-1">Monthly Subscription</p>
            </div>
            <div className="text-2xl font-bold">${selectedPlan.price}</div>
          </div>
          <div className="space-y-4 mb-8">
            <div className="flex justify-between text-gray-400">
              <span>Subtotal</span>
              <span>${selectedPlan.price}.00</span>
            </div>
            <div className="flex justify-between text-gray-400">
              <span>Tax (Estimated)</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between text-xl font-bold pt-4 border-t border-gray-700">
              <span>Total</span>
              <span>${selectedPlan.price}.00</span>
            </div>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-xl text-sm text-gray-400">
            <p>
              You will be charged ${selectedPlan.price} monthly. Cancel anytime.
            </p>
          </div>
        </div>

        {/* Payment Form */}
        <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Payment Details
          </h2>

          {/* Payment Method Toggle */}
          <div className="flex gap-4 mb-8">
            <button
              type="button"
              onClick={() => setPaymentMethod("card")}
              className={`flex-1 py-3 rounded-xl font-semibold border transition-all ${
                paymentMethod === "card"
                  ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              Credit Card
            </button>
            <button
              type="button"
              onClick={() => setPaymentMethod("upi")}
              className={`flex-1 py-3 rounded-xl font-semibold border transition-all ${
                paymentMethod === "upi"
                  ? "bg-indigo-50 border-indigo-500 text-indigo-700"
                  : "border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              UPI
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {paymentMethod === "card" ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                    placeholder="John Doe"
                    defaultValue={user?.fullName || ""}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      maxLength="19"
                      className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
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

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      required
                      maxLength="5"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="MM/YY"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      required
                      maxLength="3"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                      placeholder="123"
                    />
                  </div>
                </div>
              </>
            ) : (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  UPI ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 pl-12 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
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
                <p className="text-sm text-gray-500 mt-2">
                  Enter your Virtual Payment Address (VPA) to proceed.
                </p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
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
