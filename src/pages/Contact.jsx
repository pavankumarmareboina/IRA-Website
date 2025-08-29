import React, { useEffect, useState } from "react";
import ContactUs from "../components/contactus/ContactUs";
import "./Contact.css"

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
    <div className="contactContainer">
        <h2 className="text-white text-3xl font-extrabold  text-center secondaryHeading">
          Contact us
        </h2>
     <ContactUs/>
    </div>
  );
};

export default Contact;
