import React from "react";
import "./ProfileCard.css";
import { IoMail } from "react-icons/io5";

// import github from "../../../../assets/github.svg";
// import linkedin from "../../../../assets/linkedin.svg";
// import mailicon from "../../../../assets/mail.svg";

const ProfileCard = ({ Name, role, Img }) => {
  return (
    <div className="DevelopersPageCardsMainContainer">
      <div className="DevelopersPageCardsTop">
        <img loading="lazy" src={Img} alt={`${Img}`} />
      </div>
      <div className="DevelopersPageCardsBottom">
        <p className="developersCardsUpperP">{Name}</p>
        <p className="developersCardsBottomP">{role}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
