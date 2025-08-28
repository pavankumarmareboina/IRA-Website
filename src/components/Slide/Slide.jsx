import React from "react";
import "./Slide.css";
import coverImage from "../../assets/iraBanner.jpeg";
import SignupBtn from "../Button/SignupBtn";

const Slide = () => {
  return (
    <div
      className="slideMainContainer"
      style={{ backgroundImage: `url(${coverImage})` }}
    >
      <div className="slideSubMainContainer">
        <div className="slideMainLeftContainer">
          <h2>IRA SKILL VARASITY</h2>
          <h3>EDUCATIONAL & CAREER DEVELOPMENT PLATFORM</h3>
          <p>
            IRA Skill Varsity is an educational and career development platform
            initiated under the leadership of IRA Educational and Welfare
            Society (est. 2015) and IRA Consultancy and Research Pvt Ltd (est.
            2023). With a focus on transforming lives through quality education,
            practical skills, and employability training, IRA Skill Varsity
            operates across the educational spectrum—from early childhood
            education to college-level job readiness programs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide;
