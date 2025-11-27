import React from "react";
import aboutHero from "../assets/about_hero.png";
import trainer1 from "../assets/trainer1.png";
import trainer2 from "../assets/trainer2.png";
import trainer3 from "../assets/strength.png"; // Using strength image as placeholder for 3rd trainer

const AboutUs = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative w-full h-[40vh] md:h-[60vh] min-h-[400px]">
        <div className="absolute inset-0">
          <img
            src={aboutHero}
            alt="About Us Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up">
            OUR STORY
          </h1>
          <p className="text-gray-200 text-base md:text-xl max-w-2xl">
            More than just a gym. We are a movement dedicated to physical and
            mental transformation.
          </p>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Built on Passion
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
              Founded in 2015, FitLife began with a simple mission: to create a
              space where everyone, regardless of their fitness level, feels
              empowered to push their limits. What started as a small garage gym
              has grown into a state-of-the-art facility, but our core values
              remain the same.
            </p>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              We believe in the power of community, the science of training, and
              the art of discipline. Every piece of equipment, every class, and
              every trainer is handpicked to ensure you get the best experience
              possible.
            </p>
          </div>
          <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden shadow-2xl order-1 md:order-2">
            <img
              src={aboutHero}
              alt="Gym History"
              className="w-full h-full object-cover transform hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Years Strong", value: "8+" },
            { label: "Happy Members", value: "15k+" },
            { label: "Locations", value: "12" },
            { label: "Awards Won", value: "25+" },
          ].map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-bold mb-2 animate-pulse">
                {stat.value}
              </span>
              <span className="text-indigo-200 uppercase tracking-wider text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 md:mb-16">
            Meet The Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "Head Trainer", img: trainer1 },
              { name: "Sarah Smith", role: "Yoga Instructor", img: trainer2 },
              { name: "Mike Johnson", role: "Strength Coach", img: trainer3 },
            ].map((trainer, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl bg-zinc-800"
              >
                <div className="h-64 md:h-80 overflow-hidden">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-xl font-bold text-white">
                    {trainer.name}
                  </h3>
                  <p className="text-indigo-400">{trainer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-20 bg-zinc-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 md:mb-16">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Community",
                desc: "We support each other. Your win is our win.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
              {
                title: "Excellence",
                desc: "We strive for perfection in everything we do.",
                icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
              },
              {
                title: "Growth",
                desc: "Constant improvement is the only way forward.",
                icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition border border-gray-100"
              >
                <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-indigo-600"
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Inside <span className="text-indigo-600">FitLife</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
            {[
              "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000",
              "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80&w=1000",
              "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80&w=1000",
              "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&q=80&w=1000",
              "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&q=80&w=1000",
              "https://images.unsplash.com/photo-1605296867304-6f77ac88cb02?auto=format&fit=crop&q=80&w=1000",
            ].map((img, idx) => (
              <div
                key={idx}
                className={`rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  idx === 0 || idx === 3 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={img}
                  alt="Gym Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
