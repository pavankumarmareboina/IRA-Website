import React from "react";
import "./first.css";

const FirstHash = ({title, para}) => {
  return (
    <div className="FirstHashContainer">
      <h1>{title}</h1>
      <p>{para}</p>
    </div>
  );
};

export default FirstHash;
