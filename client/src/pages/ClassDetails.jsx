import React from "react";
import { useParams, Link } from "react-router-dom";
import { classes } from "../data/classes";
import { motion } from "framer-motion";

const ClassDetails = () => {
  const { id } = useParams();
  const classItem = classes.find((c) => c.id === id);

  if (!classItem) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-deep-bg text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Class Not Found</h2>
          <Link to="/" className="text-neon-blue hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-deep-bg text-white min-h-screen pb-20">
      {/* Immersive Header */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-deep-bg z-10"></div>
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={classItem.img}
          alt={classItem.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 z-20 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-neon-blue/20 text-neon-blue text-sm font-bold tracking-wider mb-4 border border-neon-blue/20">
              {classItem.intensity} Intensity
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-heading mb-4 text-white">
              {classItem.title}
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 grid md:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="md:col-span-2 space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6 font-heading text-white">
              Overview
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {classItem.longDesc}
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-6 font-heading text-white">
              Benefits
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {classItem.benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/5"
                >
                  <div className="w-8 h-8 rounded-full bg-neon-purple/20 flex items-center justify-center text-neon-purple">
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
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-gray-200 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-card-bg border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 font-heading text-white">
              Class Details
            </h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-gray-500 mb-1">
                    Duration
                  </span>
                  <span className="text-white font-bold">
                    {classItem.duration}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-400">
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
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-gray-500 mb-1">
                    Schedule
                  </span>
                  <span className="text-white font-bold">
                    {classItem.schedule}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full py-4 bg-neon-blue text-white font-bold rounded-xl hover:bg-neon-purple transition-colors shadow-lg shadow-neon-blue/20">
              Book This Class
            </button>
            <p className="text-center text-xs text-gray-500 mt-4">
              Free for Pro and Elite members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
