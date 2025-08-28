import React, { useEffect, useState } from "react";

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
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Achievements & Impact</h2>
      <div className="grid gap-6 md:grid-cols-4">
        <div className="bg-white rounded shadow p-6 text-center hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-blue-600">{impact.studentsTrained}</div>
          <div className="text-gray-500 mt-2">Students Trained</div>
        </div>
        <div className="bg-white rounded shadow p-6 text-center hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-blue-600">{impact.placements}</div>
          <div className="text-gray-500 mt-2">Placements</div>
        </div>
        <div className="bg-white rounded shadow p-6 text-center hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-blue-600">{impact.institutions}</div>
          <div className="text-gray-500 mt-2">Institutions</div>
        </div>
        <div className="bg-white rounded shadow p-6 text-center hover:shadow-lg transition-shadow">
          <div className="text-3xl font-bold text-blue-600">{impact.regions.length}</div>
          <div className="text-gray-500 mt-2">Regions</div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="font-semibold mb-2 text-blue-700">Regions Covered:</h3>
        <div className="flex flex-wrap gap-2">
          {impact.regions.map((region) => (
            <span key={region} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">{region}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;
