import { FaWhatsapp } from "react-icons/fa";
import React from "react";
import "./WhatsAppCard.css";

export default function WhatsAppCard() {
  const phoneNumber = "+918179132255"; // your WhatsApp number (with country code)
  const whatsappLink = `https://wa.me/${phoneNumber}`;

  return (
    <div className="w-150 h-80 shadow-lg rounded-2xl flex flex-col items-center justify-around p-6 whatsappcard">
      {/* Top WhatsApp Icon */}
      <FaWhatsapp className="text-green-500 text-7xl mt-4 size-[130px]" />

      {/* <div className="flex-1" /> */}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-3/4 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-[20px] text-center transition duration-300 h-15 flex justify-center items-center"
      >
        Chat With Us
      </a>
    </div>
  );
}
