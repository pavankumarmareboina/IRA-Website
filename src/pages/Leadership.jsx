import React, { useEffect, useState } from "react";

const Leadership = () => {
  const [leaders, setLeaders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setLeaders(data.leadership);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Leadership Team</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {leaders.map((leader) => (
          <div key={leader.name} className="bg-white rounded shadow p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{leader.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{leader.role}</p>
            <p className="text-gray-700">{leader.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leadership;
