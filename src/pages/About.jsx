import React from "react";
import "./About.css";
import IRAGroup from "../assets/IRAGroup.jpeg";
import MemberPage from "../components/MemberPage";

const About = () => {
  return (
    <div className="AboutContainer">
      <h2 className="text-white text-3xl font-extrabold  text-center secondaryHeading">
        About Us
      </h2>
      <div className="AboutSubContainer">
        <div className="highlightsdiv">
          <div className="highlightright">
            <h2>We're here to - Guarantee your success</h2> <br />
            <p>
              IRA Skill Varsity stands as a premier hub for professional skill
              development, committed to delivering high-quality training that
              empowers learners for the future. Over the years, IRA Skill
              Varsity has built a reputation for excellence by blending academic
              rigor with industry-driven practices.
            </p>{" "}
            <br />
            <p>
              A proud milestone in this journey has been its collaboration with
              leading educational and industry partners, ensuring students gain
              access to globally recognized curriculum, advanced resources, and
              hands-on learning. This unique approach bridges the gap between
              theoretical knowledge and practical expertise, equipping learners
              with the latest in-demand skills.
            </p>
          </div>
          <div className="highlightleft">
            <img src={IRAGroup} alt="" />
          </div>
        </div>
      </div>
      <div className="AboutContainer">
       
        <MemberPage />
      </div>
    </div>
  );
};

export default About;
