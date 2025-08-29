import React from "react";
import "./WhatsAppIconFixed.css";
import WhatsAppIcon from "../../assets/Whatsapp.png";

const WhatsAppIconFixed = () => {
  const phoneNumber = "8179132255"; // replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fixed"
    >
      <img src={WhatsAppIcon} alt="WhatsApp" />
    </a>
  );
};

export default WhatsAppIconFixed;
