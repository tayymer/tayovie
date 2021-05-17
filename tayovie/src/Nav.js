import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./tayovie-logo-1.png";

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__white"}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={logo} alt="logo-tayovie" />
        <img
          className="nav__avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="logo-tayovie"
        />
      </div>
    </div>
  );
}

export default Nav;
