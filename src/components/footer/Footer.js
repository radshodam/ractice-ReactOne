import React from "react";
import "./footer.css";
const person = [
  {
    what: "what is This?",
    about: "Practice and repeat for training",
  },
];


const Footer = () => {
  return (
    <div className="FooterBackground">
      <div className="Par">
      <p> {person[0].what}</p>
      <p>{person[0].about} </p>
      </div>
    </div>
  );
};
export default Footer;
