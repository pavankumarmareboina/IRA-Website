import React, { useEffect, useState } from "react";

const Playschool = () => {
  const [playschool, setPlayschool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayschool(data.playschool);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">{playschool.name}</h2>
      <ul className="grid gap-4 md:grid-cols-2">
        {playschool.features.map((feature) => (
          <li key={feature} className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow text-gray-700">
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playschool;
