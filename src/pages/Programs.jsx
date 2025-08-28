import React, { useEffect, useState } from "react";

const Programs = () => {
  const [programs, setPrograms] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setPrograms(data.programs);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Programs</h2>
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Focus Areas</h3>
        <ul className="list-disc pl-6 space-y-1">
          {programs.focusAreas.map((area) => (
            <li key={area} className="text-gray-700">{area}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2">Highlights</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {programs.highlights.map((item) => (
            <div key={item.title} className="bg-white rounded shadow p-4 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-blue-600 mb-1">{item.title}</h4>
              <p className="text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
