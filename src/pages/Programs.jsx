import React, { useEffect, useState } from "react";
import communicationImg from "../assets/programsAssets/communication.png"
import accountsImg from "../assets/programsAssets/accounts.png"
import dashboardImg from "../assets/programsAssets/dashboard.png"
import literacyImg from "../assets/programsAssets/Literacy.png"
import steps from "../Data/Steps";
import "./Programs.css"

const imgCollection = [communicationImg, literacyImg, accountsImg, dashboardImg];
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
      {/* <h2 className="text-2xl font-bold mb-6 text-blue-700">Programs</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Focus Areas</h3>
        <ul className="list-disc pl-6 space-y-1">
          {programs.focusAreas.map((area) => (
            <li key={area} className="text-gray-700">{area}</li>
          ))}
        </ul>
      </div> */}
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
                  <h2 className="text-2xl font-bold text-white tracking-wide  mb-3">
                    {item}
                  </h2>
                  {/* <p className="text-gray-300 text-base leading-relaxed">
                    {item}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <div>
        <h3 className="text-lg font-semibold mb-2">Highlights</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {programs.highlights.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow"
            >
              <h4 className="font-bold text-blue-600 mb-1">{item.title}</h4>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
