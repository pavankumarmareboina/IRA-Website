import React, { useEffect, useState } from "react";

const Contact = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setContact(data.contact);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center py-10">Loading...</div>;

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold mb-6 text-blue-700">Contact Us</h2>
      <div className="bg-white rounded shadow p-6 space-y-4">
        <div>
          <span className="font-semibold text-blue-600">Email:</span> <a href={`mailto:${contact.email}`} className="text-blue-700 hover:underline">{contact.email}</a>
        </div>
        <div>
          <span className="font-semibold text-blue-600">Phone:</span> <a href={`tel:${contact.phone}`} className="text-blue-700 hover:underline">{contact.phone}</a>
        </div>
        <div>
          <span className="font-semibold text-blue-600">Address:</span> <span className="text-gray-700">{contact.address}</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
