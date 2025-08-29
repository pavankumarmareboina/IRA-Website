import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achievements = () => {
  const stats = [
    {
      number: 12000,
      suffix: "+",
      text: "Students trained across Andhra Pradesh, Telangana, Karnataka, and Tamil Nadu",
    },
    {
      number: 1000,
      suffix: "+",
      text: "Candidates placed through 100+ institutional collaborations",
    },
    {
      number: 100,
      suffix: "+",
      text: "Institutional collaborations with engineering, degree, and management colleges",
    },
    {
      number: 50,
      suffix: "+",
      text: "Successful CSR-funded & government-sponsored projects",
    },
  ];

  return (
    <section className="w-full bg-black py-20 px-6">
      <h2 className="text-white text-3xl font-extrabold text-center secondaryHeading">
        Achievements & Success Story
      </h2>

      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 achievementsContainer mt-12">
        {stats.map((stat, idx) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.3, // triggers when 30% visible
          });

          return (
            <div
              key={idx}
              ref={ref}
              className="flex flex-col items-center justify-center border border-neutral-800 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 h-50 p-10 text-center achievementsSubContainer cards"
            >
              {/* Animated Counter */}
              <h3 className="text-4xl font-extrabold text-green-400 mb-4">
                {inView ? (
                  <CountUp end={stat.number} duration={2.5} separator="," />
                ) : (
                  "0"
                )}
                {stat.suffix}
              </h3>
              {/* Description */}
              <p className="text-gray-300 text-base leading-relaxed">
                {stat.text}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
