import React, { useEffect, useState } from "react";
import "./Home.css";
import Slide from "../components/Slide/Slide";
import steps from "../Data/Steps";

import learn1 from "../assets/learn1.webp";
import learn2 from "../assets/learn2.webp";
import learn3 from "../assets/learn3.webp";
import learn4 from "../assets/learn4.webp";
import Achievements from "../components/Achievements/Achievements";
import MagicBento from "../components/MagicBento";
// import SpotlightCard from "../components/ui/SpotlightCard/SpotlightCard";

const imgCollection = [learn1, learn2, learn3, learn4];

const Home = () => {
  const [IRA_learning, setIRA_learning] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const merged = data.IRA_learning.map((item, index) => ({
          ...item,
          learn1PNG: imgCollection[index],
        }));
        setIRA_learning(merged);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="homeContainer w-full bg-black min-h-screen">
      <section className="heroSection w-full">
        <Slide />
      </section>

      {/* Training Program Section */}
      <section className="homepageCardSection py-16 px-6 gap-7">
        <h2 className="text-white text-3xl font-extrabold  text-center secondaryHeading">
          Explore Coaching Training Program
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-neutral-900 border border-neutral-800 rounded-2xl shadow-lg hover:shadow-xl hover:border-green-200 transition-transform duration-300 h-[480px] w-full overflow-hidden p-7"
            >
              {/* Image top - 40% height */}
              <div className="h-[60%] w-full p-20 flex justify-center items-center">
                <img
                  src={imgCollection[idx]}
                  alt={item.title}
                  className="h-full w-2/3 object-contain m-20 flex"
                />
              </div>

              {/* Text + Button bottom */}
              <div className="flex flex-col justify-between h-[40%] p-6 text-center homecard">
                <div>
                  <h3 className="text-orange-400 font-semibold text-base mb-2">
                    {item.step}
                  </h3>
                  <h2 className="text-2xl font-bold text-white tracking-wide uppercase mb-3">
                    {item.title}
                  </h2>
                  <p className="text-gray-300 text-base leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <button className="homebutton mt-6 bg-green-400 text-black px-5 py-6 rounded-lg font-semibold shadow-md hover:bg-green-500 transition-colors duration-200 w-full h-15 text-lg">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements and Impact  */}
      <section className="homepageCardSection">
        <Achievements />
      </section>
      <section className="homepageCardSection">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </section>
    </div>
  );
};

export default Home;
