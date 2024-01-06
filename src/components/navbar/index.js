import React from "react";
import "./index.css";
const Navbar = () => {
  return (
    <div className="nav">
      <a href="#about" className="logo">
        Modelyn Torff
      </a>
      <input type="checkbox" id="toggle" />
      <label htmlFor="toggle" className="toggle-l">
        <img
          src="https://res.cloudinary.com/dofzu13gt/image/upload/v1703316857/menu-bar_pwk2x5.png"
          alt="img-hamberger"
          className="img-hamberger"
        />
      </label>

      <ul className="all-lists">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contacts">Contacts</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
