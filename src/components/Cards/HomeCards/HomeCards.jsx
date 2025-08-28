import React from "react";
import steps from "../../../Data/Steps";

const HomeCards = () => {
  return (
    <section className="bg-black w-full min-h-screen py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between bg-neutral-900 border border-neutral-800 rounded-2xl shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 p-6 text-center"
          >
            <div>
              <h3 className="text-orange-400 font-semibold text-sm mb-1">
                {item.step}
              </h3>
              <h2 className="text-2xl font-bold text-white tracking-wide uppercase mb-3">
                {item.title}
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
            <button className="mt-6 bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-orange-600 transition-colors duration-200">
              {item.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeCards;
