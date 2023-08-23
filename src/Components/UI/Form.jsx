import React, { useState } from "react";
import "./Form.css";
import Button from "./Button";

function Form(props) {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return pattern.test(email);
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    setIsValid(validateEmail(newEmail));
    setIsEmailSent(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      setIsEmailSent(true);
      setEmail("");
    }
  };
  return (
    <div className="container">
      <div className="sign-up-section">
        <div className="sign-up-desc">
          <h1>{props.title}</h1>
          <p>{props.par}</p>
          <form action="#" onSubmit={handleFormSubmit}>
            <input
              type="email"
              value={email}
              id="email"
              placeholder="email@example.com"
              onChange={handleEmailChange}
            />
            <Button text="Get Started For Free" />
            {!isValid && (
              <p className="error">Please enter a valid email address</p>
            )}
            {isEmailSent && (
            <p className="success">¡Submitted successfully!</p>
          )}
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default Form;