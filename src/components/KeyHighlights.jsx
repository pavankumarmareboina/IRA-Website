import React from "react";
import './KeyHighlights.css'

const KeyHighlights = ({text}) => {
  return (
    <div className="KeyHighlightsContainer">
      <p className="KeyHighlightsPara">{text}</p>
    </div>
  );
};

export default KeyHighlights;
