import React from "react";
import "./AboutCards.css";
// import Image from "../../../../assets/footerCardsImgLeft.png";

const AboutCardsLeft = ({ title, para, Image }) => {
  return (
    <div id="AboutCardsContainer">
      <div className="AboutCardsContainerRight">
        <img
          className="AboutCardsContainerRightImage"
          style={{ width: "100%" }}
          src={Image}
          alt=""
        />
      </div>
      <div className="AboutCardsContainerLeft">
        <h3>{title}</h3>
        <p>
          {para}
        </p>
      </div>
    </div>
  );
};

export default AboutCardsLeft;
