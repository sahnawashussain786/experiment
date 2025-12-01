import React from "react";
import { SignIn } from "@clerk/clerk-react";
import { motion } from "framer-motion";
import heroImg from "../assets/hero.png";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex bg-deep-bg">
      {/* Left Side - Image */}
      <div className="hidden lg:block w-1/2 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-deep-bg z-10"></div>
        <img
          src={heroImg}
          alt="Gym Motivation"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 left-12 z-20 max-w-lg">
          <h1 className="text-5xl font-bold text-white font-heading mb-4">
            Welcome Back
          </h1>
          <p className="text-xl text-gray-300">
            "The only bad workout is the one that didn't happen."
          </p>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 relative">
        {/* Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[100px] pointer-events-none"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="w-full max-w-md relative z-10"
        >
          <SignIn
            appearance={{
              elements: {
                rootBox: "w-full",
                card: "bg-card-bg border border-white/10 shadow-2xl rounded-3xl w-full",
                headerTitle: "text-white font-heading text-2xl",
                headerSubtitle: "text-gray-400",
                socialButtonsBlockButton:
                  "bg-white/5 border border-white/10 text-white hover:bg-white/10",
                dividerLine: "bg-white/10",
                dividerText: "text-gray-500",
                formFieldLabel: "text-gray-300",
                formFieldInput:
                  "bg-deep-bg border-white/10 text-white focus:border-neon-blue",
                footerActionLink: "text-neon-blue hover:text-neon-purple",
                formButtonPrimary:
                  "bg-neon-blue hover:bg-neon-purple text-white",
              },
            }}
            path="/sign-in"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default SignInPage;
