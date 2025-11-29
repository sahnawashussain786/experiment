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
      <div className="min-h-screen flex flex-col items-center justify-center bg-zinc-900 text-white">
        <h2 className="text-3xl font-bold mb-4">Class Not Found</h2>
        <Link to="/" className="text-indigo-500 hover:text-indigo-400">
          Return Home
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-zinc-50">
      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px]">
        <img
          src={classItem.img}
          alt={classItem.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in-up">
            {classItem.title}
          </h1>
          <div className="flex gap-4 text-white/90 text-sm md:text-base font-medium">
            <span className="bg-indigo-600/80 px-4 py-1 rounded-full backdrop-blur-sm">
              {classItem.intensity} Intensity
            </span>
            <span className="bg-zinc-800/80 px-4 py-1 rounded-full backdrop-blur-sm">
              {classItem.duration}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About the Class
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                {classItem.longDesc}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Key Benefits
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {classItem.benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 bg-white p-4 rounded-xl border border-gray-100 shadow-sm"
                  >
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-indigo-600"
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
                    <span className="text-gray-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Class Schedule
              </h3>
              <div className="flex items-start gap-4 mb-6">
                <svg
                  className="w-6 h-6 text-indigo-600 mt-1"
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
                  <p className="text-gray-900 font-medium mb-1">Weekly Times</p>
                  <p className="text-gray-600 text-sm">{classItem.schedule}</p>
                </div>
              </div>
              <button
                onClick={() => navigate("/contact")}
                className="w-full py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-200"
              >
                Book a Session
              </button>
            </div>

            <div className="bg-zinc-900 p-8 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Need Help?</h3>
              <p className="text-gray-400 mb-6">
                Not sure if this class is right for you? Talk to one of our
                trainers.
              </p>
              <Link
                to="/contact"
                className="text-indigo-400 font-medium hover:text-indigo-300 flex items-center gap-2"
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
