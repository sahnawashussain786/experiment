import React from "react";
import aboutHero from "../assets/about_hero.png";
import trainer1 from "../assets/trainer1.png";
import trainer2 from "../assets/trainer2.png";
import trainer3 from "../assets/strength.png"; // Using strength image as placeholder for 3rd trainer
import yogaImg from "../assets/yoga.png";
import cardioImg from "../assets/cardio.png";

const AboutUs = () => {
  return (
    <div className="w-full overflow-x-hidden bg-deep-bg text-white">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="About Us Hero"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep-bg/80 via-deep-bg/50 to-deep-bg"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up font-heading">
            OUR <span className="text-neon-purple">STORY</span>
          </h1>
          <p className="text-gray-300 text-base md:text-xl max-w-2xl font-light">
            More than just a gym. We are a movement dedicated to physical and
            mental transformation.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-deep-bg relative">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-[100px]"></div>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 font-heading">
              Built on <span className="text-neon-blue">Passion</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              Founded in 2015, FitLife began with a simple mission: to create a
              space where everyone, regardless of their fitness level, feels
              empowered to push their limits. What started as a small garage gym
              has grown into a state-of-the-art facility, but our core values
              remain the same.
            </p>
            <p className="text-gray-400 leading-relaxed text-lg">
              We believe in the power of community, the science of training, and
              the art of discipline. Every piece of equipment, every class, and
              every trainer is handpicked to ensure you get the best experience
              possible.
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden shadow-2xl order-1 md:order-2 border border-white/5 group">
            <div className="absolute inset-0 bg-neon-purple/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <img
              src={aboutHero}
              alt="Gym History"
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-20 bg-zinc-900/50 border-y border-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Years Strong", value: "8+" },
            { label: "Happy Members", value: "15k+" },
            { label: "Locations", value: "12" },
            { label: "Awards Won", value: "25+" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              <span className="text-4xl md:text-6xl font-bold mb-2 text-white group-hover:text-neon-cyan transition-colors font-heading">
                {stat.value}
              </span>
              <span className="text-gray-400 uppercase tracking-wider text-sm font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-deep-bg">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-16 font-heading">
            Meet The <span className="text-neon-purple">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "Head Trainer", img: trainer1 },
              { name: "Sarah Smith", role: "Yoga Instructor", img: trainer2 },
              { name: "Mike Johnson", role: "Strength Coach", img: trainer3 },
            ].map((trainer, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-3xl bg-card-bg border border-white/5 hover:border-neon-purple/30 transition-all duration-300"
              >
                <div className="h-80 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-deep-bg via-transparent to-transparent z-10 opacity-80"></div>
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="absolute bottom-0 left-0 w-full p-8 text-left z-20">
                  <h3 className="text-2xl font-bold text-white mb-1 font-heading group-hover:text-neon-purple transition-colors">
                    {trainer.name}
                  </h3>
                  <p className="text-neon-blue font-medium">{trainer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-zinc-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 font-heading">
            Our Core <span className="text-neon-blue">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community",
                desc: "We support each other. Your win is our win.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                color: "text-neon-blue",
                bg: "bg-neon-blue/10",
              },
              {
                title: "Excellence",
                desc: "We strive for perfection in everything we do.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                color: "text-neon-purple",
                bg: "bg-neon-purple/10",
              },
              {
                title: "Growth",
                desc: "Constant improvement is the only way forward.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
                color: "text-neon-cyan",
                bg: "bg-neon-cyan/10",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-card-bg p-10 rounded-3xl shadow-lg hover:shadow-2xl transition border border-white/5 hover:border-white/20 group"
              >
                <div
                  className={`w-16 h-16 ${value.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <svg
                    className={`w-8 h-8 ${value.color}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={value.icon}
                    ></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 font-heading group-hover:text-neon-blue transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-deep-bg">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 font-heading">
            Inside <span className="text-neon-purple">FitLife</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {[aboutHero, trainer1, trainer2, trainer3, yogaImg, cardioImg].map(
              (img, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-white/5 hover:border-neon-blue/50 ${
                    idx === 0 || idx === 3 ? "col-span-2 row-span-2" : ""
                  }`}
                >
                  <img
                    src={img}
                    alt="Gym Gallery"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700 opacity-80 hover:opacity-100"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
