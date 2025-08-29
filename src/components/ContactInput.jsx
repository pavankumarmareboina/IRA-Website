import React from "react";
import styled from "styled-components";

const ContactInput = ({ typepurpose, label, name, value, onChange }) => {
  return (
    <StyledWrapper>
      <div className="input-field">
        <input
          required
          autoComplete="off"
          type={typepurpose}
          id={label}
          name={name}
          className="contact-input"
          value={value}
          onChange={onChange}
        />
        <label htmlFor={label}>{label}</label>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .input-field {
    position: relative;
    margin-bottom: 20px;
  }

  .input-field label {
    position: absolute;
    color: #8d8d8d;
    pointer-events: none;
    background-color: transparent;
    left: 15px;
    transform: translateY(0.6rem);
    transition: all 0.3s ease;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
  }

  .input-field input {
    padding: 10px 15px;
    font-size: 1rem;
    border-radius: 14px;
    border: solid 1px #2a2a2d;
    letter-spacing: 1px;
    width: 100%;
    font-family: "Inter", sans-serif;
    font-weight: 400;
    background-color: #17181f;
    color: white;
  }

  .input-field input:focus,
  .input-field input:valid {
    outline: none;
  }

  .input-field input:focus ~ label,
  .input-field input:valid ~ label {
    transform: translateY(-50%) translateX(-18px) scale(0.9);
    background-color: #17181f;
    width: max-content;
    padding: 0 5px;
    color: #e0e0e2;
    letter-spacing: 1px;
    border: none;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    font-size: 16px;
    margin: 0 10px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export default ContactInput;
