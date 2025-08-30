import React from "react";
import "./FAQSection.css";
import ToggleExpandCard from "../ui/ToggleCard/ToggleExpandCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const FAQSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray(".ToggleExpandCardContainer").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 90%", 
          toggleActions: "play none none none", 
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });
    });
  }, []);
  const websiteFAQs = [
  {
    question: "What is IRA Skill Varsity?",
    answer:
      "IRA Skill Varsity is an education and career platform that bridges the gap between learning and employment through practical training.",
  },
  {
    question: "Who leads IRA Skill Varsity?",
    answer:
      "It is led by Pasupuleti Saraswathi, Aneel Laxman Ganji, and Natarajan Kandaswamy, who bring expertise in education, media, and operations.",
  },
  {
    question: "What programs are offered?",
    answer:
      "IRA offers training in Spoken English, Digital Literacy, GST & Tally, Data Analytics, Design Thinking, CRM Tools, and Career Readiness.",
  },
  {
    question: "What are IRA’s major achievements?",
    answer:
      "IRA trained 12,000+ students and placed 1,000+ candidates through drives like Tirupati Employment Drive, JNTU Kakinada Mega Drive, and Naan Mudhalvan.",
  },
  {
    question: "Does IRA also focus on early education?",
    answer:
      "Yes, IRA runs The Little Hoots Playschool in Hyderabad, offering child-centered learning with creative and eco-friendly practices.",
  },
  {
    question: "How are the programs delivered?",
    answer:
      "Programs are delivered in-person, online, and hybrid formats with assessments, projects, and placement support.",
  },
];

  return (
    <div className="FAQSectionContainer">
      {/* <MainTitle content={""}/> */}
      <div className="FAQSectionLeft">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="FAQSectionRight">
        {websiteFAQs.map((faq, index) => (
          <ToggleExpandCard
            key={index}
            questions={faq.question}
            answers={faq.answer}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
