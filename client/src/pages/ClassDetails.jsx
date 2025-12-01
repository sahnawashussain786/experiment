import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { classes } from "../data/classes";

const ClassDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const classItem = classes.find((c) => c.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!classItem) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-deep-bg text-white">
        <h2 className="text-3xl font-bold mb-4 font-heading">
          Class Not Found
        </h2>
        <Link
          to="/"
          className="text-neon-blue hover:text-neon-cyan transition-colors"
        >
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-deep-bg text-white">
      {/* Hero Section */}
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={classItem.img}
            alt={classItem.title}
            className="w-full h-full object-cover opacity-50 md:opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-bg/90 via-deep-bg/60 to-deep-bg"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up font-heading tracking-tight drop-shadow-lg">
            {classItem.title}
          </h1>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-white text-sm md:text-base font-medium">
            <span className="bg-neon-purple/20 border border-neon-purple/40 px-5 py-2 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(139,92,246,0.2)]">
              {classItem.intensity} Intensity
            </span>
            <span className="bg-neon-blue/20 border border-neon-blue/40 px-5 py-2 rounded-full backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              {classItem.duration}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 font-heading">
                About the <span className="text-neon-blue">Class</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {classItem.longDesc}
              </p>
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 font-heading">
                Key <span className="text-neon-purple">Benefits</span>
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                {classItem.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-4 bg-card-bg p-4 sm:p-5 rounded-xl md:rounded-2xl border border-white/5 hover:border-neon-blue/30 transition-all group shadow-lg hover:shadow-xl"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-neon-blue/10 flex items-center justify-center flex-shrink-0 border border-neon-blue/20 group-hover:border-neon-blue/50 transition-colors">
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue"
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
                    <span className="text-gray-300 font-medium text-sm sm:text-base">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-card-bg p-8 rounded-3xl shadow-xl border border-white/5">
              <h3 className="text-xl font-bold text-white mb-8 font-heading">
                Class Schedule
              </h3>
              <div className="flex items-start gap-4 mb-8">
                <svg
                  className="w-7 h-7 text-neon-purple mt-1 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <div>
                  <p className="text-white font-semibold mb-2">Weekly Times</p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {classItem.schedule}
                  </p>
                </div>
              </div>
              <button
                onClick={() => navigate("/contact")}
                className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all transform hover:scale-[1.02]"
              >
                Book a Session
              </button>
            </div>

            <div className="bg-zinc-900/80 p-8 rounded-3xl text-white border border-white/5">
              <h3 className="text-xl font-bold mb-4 font-heading">
                Need Help?
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Not sure if this class is right for you? Talk to one of our
                trainers.
              </p>
              <Link
                to="/contact"
                className="text-neon-cyan font-medium hover:text-neon-blue transition-colors flex items-center gap-2"
              >
                Contact Us <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
