import React, { useEffect, useState } from "react";
import communicationImg from "../assets/programsAssets/communication.png";
import accountsImg from "../assets/programsAssets/accounts.png";
import dashboardImg from "../assets/programsAssets/dashboard.png";
import literacyImg from "../assets/programsAssets/Literacy.png";
import steps from "../Data/Steps";
import "./Programs.css";
import AboutCards from "../components/AboutCards";
import targetImage from "../assets/programsAssets/target.png";
import whatWeDoImage from "../assets/programsAssets/whatwedo.png";
import uniqueImage from "../assets/programsAssets/Unique.png";
import AboutCardsLeft from "../components/AboutCardsLeft";

const imgCollection = [
  communicationImg,
  literacyImg,
  accountsImg,
  dashboardImg,
];
const Programs = () => {
  const [programs, setPrograms] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data.programs);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className=" mx-auto py-10 px-4 bg-black programsMainContainer">

      <section className="homepageCardSection py-16 px-6 gap-7">
        <h2 className="text-white text-3xl font-extrabold  text-center secondaryHeading">
          Focus Areas
        </h2>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
          {programs.focusAreas.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-center items-center border border-neutral-800 rounded-2xl shadow-lg hover:shadow-xl hover:border-green-200 transition-transform duration-300 h-[480px] w-full overflow-hidden p-7"
            >
              {/* Image top - 40% height */}
              <div className="h-[60%] w-full p-20 flex justify-center items-center imgcontainer">
                <img
                  src={imgCollection[idx]}
                  alt={item.title}
                  className="h-full w-2/3 object-contain m-20 flex"
                />
              </div>

              {/* Text + Button bottom */}
              <div className="flex flex-col items-center justify-center h-[40%] p-6 text-center w-[80%] homecard programscard">
                <div>
                  {/* <h3 className="text-orange-400 font-semibold text-base mb-2">
                    {item}
                  </h3> */}
                  <h3 className="text-2xl font-bold text-white tracking-wide  mb-3">
                    {item}
                  </h3>
                  {/* <p className="text-gray-300 text-base leading-relaxed">
                    {item}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div className="homepageCardSection">
        {/* <h3 className="text-lg font-semibold mb-2">Highlights</h3> */}
        <h2 className="text-white text-3xl font-extrabold  text-center secondaryHeading">
          Highlights
        </h2>
        {/* <div className="grid gap-4 md:grid-cols-2">
          {programs.highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-blue-600 mb-1">{item.title}</h4>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div> */}
        <div className="AboutCardsAboutContainer">
          <AboutCards
            Image={targetImage}
            title={"Tirupati Employment Drive (2023)"}
            para={
              "Successfully trained 2300+ students, facilitated 300+ job placements across diverse industries, empowering learners with in-demand skills and career opportunities"
            }
          />
          <AboutCardsLeft
            Image={whatWeDoImage}
            title={"Mega Drive at JNTU Kakinada (2024)"}
            para={
              "Engaged 14,000+ learners through impactful programs and enabled 1360 successful placements, driving skill development and career growth at scale."
            }
          />
          
        </div>
      </div>
    </div>
  );
};

export default Programs;
