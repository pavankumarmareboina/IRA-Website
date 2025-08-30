import React, { useState } from "react";
import KeyHighlights from "../KeyHighlights";
import "./ContactUs.css";
import ContactInput from "../ContactInput";
import ContactBtn from "../ContactBtn";
import SubscribedMsg from "../SubscribedMsg";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interestedIn: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // To control form visibility

  // Add your Google Apps Script URL here
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwQ8z4RkSw_PEstuVZC84BuzBV2Z0JNKFvEc4ZuQFMDAL9NJRGIC8kY1CiUJ10DPg1X/exec"; // Replace with your script URL

  // Handle input changes and update form state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the specific field in formData
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formBody = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      interestedIn: formData.interestedIn,
      message: formData.message,
    });

    // Make the API call to Google Apps Script to save the data
    fetch(scriptURL, {
      method: "POST",
      body: formBody,
    })
      .then((response) => {
        //console.log("Success:", response);
        // Set form submission state to true
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div id="ContactUsMainContainer">
      <div className="ContactUsInputContainer">
        <div className="ContactUsInputContainerTop">
          <h2>We’d Love to Hear From You!</h2>
        </div>
        <div className="ContactUsInputContainerBottom">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              <div className="ContactUsInputContainerBottomMainInput">
                <div className="ContactUsInputContainerBottomMainInputSubContainer">
                  <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
                    <ContactInput
                      typepurpose="text"
                      label="Name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
                    <ContactInput
                      typepurpose="email"
                      label="Email address"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
                    <ContactInput
                      typepurpose="number"
                      label="Phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="ContactUsInputContainerBottomMainInputSeperateContaier">
                    <ContactInput
                      typepurpose="text"
                      label="Interested in"
                      name="interestedIn"
                      value={formData.interestedIn}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="ContactUsTextarea">
                  <textarea
                    name="message"
                    placeholder="How can we help?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  ></textarea>
                </div>
                <div className="contactBtn">
                  <ContactBtn title="Submit" />
                </div>
              </div>
            </form>
          ) : (
            <SubscribedMsg
              title={formData.name} // Display the name here after submission
              msgAbove={"Thank you for your interest in us."}
              messageData={"We will get back to you shortly."}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
