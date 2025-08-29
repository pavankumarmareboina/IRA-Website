import React from "react";
import "./ContactBtn.css";

const BottomBtn = ({ title }) => {
  return (
    <div>
      <button id="SearchInputContainerFormContactUs" type="submit">
        {title}
      </button>
    </div>
  );
};

export default BottomBtn;
