import React from "react";
import Navbar from "../navbar";
import "./index.css";
const About = () => {
  return (
    <>
      <Navbar />

      <div className="main-page" id="about">
        <div className="left-content">
          <h1 className="left-heading">UI/UX DESIGNER</h1>
          <p className="left-para">Hello, my name is Madelyn Torff</p>
          <p className="left-para1">
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="buttons">
            <button type="button" className="button-mainpage">
              Projects
            </button>
            <button type="button" className="button-mainpage1">
              LinkedIn
            </button>
          </div>
        </div>
        <div className="second-side">
          <img
            src="https://res.cloudinary.com/dofzu13gt/image/upload/v1704397818/image_k1bgwc.png"
            alt="img1"
            className="img-mainpage"
          />
        </div>
      </div>
    </>
  );
};
export default About;
