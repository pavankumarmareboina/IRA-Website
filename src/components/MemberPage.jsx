import React from "react";
import "./DevelopersPage.css";
// import ProfileCard from "./ProfileCard";
import AneelLaxmanGanji from "../assets/Members/AneelLaxmanGanji.jpeg";
import NatarajanKandaswamy from "../assets/Members/NatarajanKandaswamy.jpg";
import SaraswathiPasupuleti from "../assets/Members/SaraswathiPasupuleti.jpg";
import ProfileCard from "./ProfileCard";

const teamMembers = [
  {
    id: 1,
    img: `${AneelLaxmanGanji}`,
    name: "Aneel Laxman Ganji",
    role: "Director",
  },
  {
    id: 2,
    img: `${NatarajanKandaswamy}`,
    name: "Natarajan Kandaswamy",
    role: "Content Curators",
  },
  {
    id: 3,
    img: `${SaraswathiPasupuleti}`,
    name: "Saraswathi Pasupuleti",
    role: "UI/UX Designer",
  },
];

const MemberPage = () => {
  return (
    <div className="DevelopersPageMainContainer">
      <h2 className="text-white text-3xl font-extrabold  text-center secondaryHeading">
        Our Team Success
      </h2>
      <div className="MainDevelopersCards">
        {teamMembers.map((member) => (
          <ProfileCard
            key={member.id}
            Name={member.name}
            role={member.role}
            Img={member.img}
          />
        ))}
      </div>
    </div>
  );
};

export default MemberPage;
