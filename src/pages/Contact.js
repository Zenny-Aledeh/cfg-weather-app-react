import React, { useState } from "react";
import "./Contact.css";

export default function Email() {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    
    alert('Your email has been sent.'); 
    };
    
  return (
  <div className="contact-container">
    <form className="contactform" onSubmit={handleSubmit}>
      <div className="contactdiv">
        <label htmlFor="name">
          <h3>Name: </h3> 
        </label>
        <input className="contactinput" type="text" id="name" required />
      </div>
      <div className="contactdiv">
        <label htmlFor="email">
          <h3>Email: </h3> 
        </label>
        <input className="contactinput" type="email" id="email" required />
      </div>
      <div className="messagediv">
        <label className="message" htmlFor="message">
          <h3>Message:  </h3>  
        </label>
        <textarea id="message" required />
      </div>
      <button className="contactbutton" type="submit">{status}</button>
    </form>
    </div> 
    
  );
    
  };
