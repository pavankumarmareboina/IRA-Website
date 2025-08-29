import React, { useEffect, useState } from "react";
import WhatsAppCard from "./WhatsAppCard";

const Impact = () => {
  const [impact, setImpact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setImpact(data.impact);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="homepageCardSection">
        <h2 className="text-white text-3xl font-extrabold  text-center secondaryHeading">
          Get in Touch
        </h2>
      <WhatsAppCard />
    </div>
  );
};

export default Impact;
