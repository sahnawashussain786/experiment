import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const stats = [
    { label: "Years of Excellence", value: "10+" },
    { label: "Certified Trainers", value: "50+" },
    { label: "Happy Members", value: "2k+" },
    { label: "Locations", value: "5" },
  ];

  const timeline = [
    {
      year: "2013",
      title: "The Beginning",
      description:
        "FitLife was founded with a single location and a vision to change lives through fitness.",
    },
    {
      year: "2016",
      title: "Expansion",
      description:
        "Opened 3 new locations and launched our signature HIIT program.",
    },
    {
      year: "2019",
      title: "Digital Evolution",
      description:
        "Launched our mobile app and virtual training platform to reach members worldwide.",
    },
    {
      year: "2023",
      title: "Community First",
      description:
        "Reached 2,000 active members and established the FitLife Community Fund.",
    },
  ];

  return (
    <div className="bg-deep-bg text-white min-h-screen pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-8 font-heading"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-purple">
              Story
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We believe that fitness is not just about the body, but about the
            mind and spirit. Our mission is to empower individuals to reach
            their full potential through holistic wellness.
          </motion.p>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-16 bg-zinc-900/30 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">
                {stat.value}
              </div>
              <div className="text-neon-blue text-sm uppercase tracking-wider font-bold">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 font-heading">
            The <span className="text-neon-cyan">Journey</span>
          </h2>
          <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 space-y-16">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative pl-12 md:pl-0"
              >
                {/* Dot */}
                <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-neon-blue shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>

                <div
                  className={`md:flex items-start justify-between gap-10 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="md:w-1/2 mb-4 md:mb-0"></div> {/* Spacer */}
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <span className="text-neon-purple font-bold text-xl mb-2 block">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-3 font-heading">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 bg-zinc-900/20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 font-heading">
            Meet the <span className="text-neon-lime">Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Rivera",
                role: "Head Trainer",
                img: "https://ui-avatars.com/api/?name=Alex+Rivera&background=6366f1&color=fff",
              },
              {
                name: "Sarah Chen",
                role: "Yoga Instructor",
                img: "https://ui-avatars.com/api/?name=Sarah+Chen&background=06b6d4&color=fff",
              },
              {
                name: "Marcus Johnson",
                role: "Strength Coach",
                img: "https://ui-avatars.com/api/?name=Marcus+Johnson&background=8b5cf6&color=fff",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-card-bg rounded-3xl p-8 border border-white/5 text-center group hover:border-neon-lime/30 transition-all duration-300"
              >
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white/5 group-hover:border-neon-lime transition-colors">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                  {member.name}
                </h3>
                <p className="text-neon-lime font-medium mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">
                  "Dedicated to helping you achieve your personal best through
                  science-based training."
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
