import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-deep-bg py-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-blue/10 rounded-full blur-[120px]"></div>

      <div className="relative z-10 w-full max-w-md px-4">
        <SignIn
          path="/sign-in"
          routing="path"
          signUpUrl="/sign-up"
          appearance={{
            variables: {
              colorPrimary: "#6366f1", // neon-blue
              colorText: "#ffffff",
              colorBackground: "#18181b", // card-bg
              colorInputBackground: "#09090b", // deep-bg
              colorInputText: "#ffffff",
              borderRadius: "1rem",
              fontFamily: '"Inter", sans-serif',
            },
            elements: {
              card: "bg-card-bg border border-white/5 shadow-2xl",
              headerTitle: "text-white font-heading font-bold text-2xl",
              headerSubtitle: "text-gray-400",
              socialButtonsBlockButton:
                "bg-white/5 border-white/10 text-white hover:bg-white/10",
              socialButtonsBlockButtonText: "text-white font-semibold",
              dividerLine: "bg-white/10",
              dividerText: "text-gray-400",
              formFieldLabel: "text-gray-400",
              formFieldInput:
                "bg-deep-bg border-white/10 text-white focus:border-neon-blue transition-colors",
              footerActionLink:
                "text-neon-blue hover:text-neon-purple transition-colors",
            },
          }}
        />
      </div>
    </div>
  );
};

export default SignInPage;
