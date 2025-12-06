import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState({ type: "", message: "" });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Subscribing..." });

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error("Non-JSON response:", text);
        throw new Error(
          `Server Error: ${response.status} ${response.statusText}`
        );
      }

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setEmail("");
        // Clear success message after 5 seconds
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      } else {
        setStatus({
          type: "error",
          message: data.message || "Something went wrong",
        });
      }
    } catch (error) {
      console.error("Subscription error:", error);
      let errorMessage = "Failed to connect to server";

      if (error.name === "AbortError") {
        errorMessage = "Request timed out. Server took too long.";
      } else if (error.message.includes("Server Error")) {
        errorMessage = error.message;
      } else if (error.message === "Failed to fetch") {
        errorMessage = "Network error. Check your connection.";
      }

      setStatus({ type: "error", message: errorMessage });
    }
  };

  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-neon-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center text-white font-bold">
                F
              </div>
              <span className="text-2xl font-bold text-white font-heading">
                FIT<span className="text-neon-blue">LIFE</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Empowering you to reach your peak potential through world-class
              training, nutrition, and community support.
            </p>
            <div className="flex gap-4">
              {["twitter", "facebook", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-neon-blue hover:text-white transition-all duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Classes", path: "/classes" },
                { name: "Pricing", path: "/pricing" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-heading">
              Support
            </h4>
            <ul className="space-y-4">
              {[
                "FAQ",
                "Terms of Service",
                "Privacy Policy",
                "Cookie Policy",
                "Help Center",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-neon-cyan transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6 font-heading">
              Stay Updated
            </h4>
            <p className="text-gray-400 mb-4">
              Get the latest workout tips and exclusive offers directly to your
              inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue transition-colors"
                required
              />
              <button
                type="submit"
                disabled={status.type === "loading"}
                className="w-full px-4 py-3 rounded-lg bg-neon-blue text-white font-bold hover:bg-neon-purple transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status.type === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
              {status.message && (
                <p
                  className={`text-sm ${
                    status.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} FitLife Gym. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
