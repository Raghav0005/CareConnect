import React from "react";
import logo from "./careconnect-logo.png";

const About = () => {
  return (
      <div className='About'>
        <div className="logodiv">
          <img className="CareConnectLogo" src={logo}></img>
        </div>
        <h2>
          Who We Are
        </h2>
        <p>We are Careconnect! As an organization based out of Toronto, Ontario,
          we are looking for a way to connect people with their personal support
          workers easily and quickly. This allows the right PSW to be connected with
          the right person.</p>
  
        <h2>
          Contact Us
        </h2>
        <p>Email: pswconnectors@gmail.com</p>
        <p>Phone: (416) 999-9999</p>
      </div>
    );
}
export default About;