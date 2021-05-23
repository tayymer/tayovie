import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import "./Nav.css";
import logo from "./tayovie-logo-1.png";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
   
  const refreshPage = () => {
   window.location.reload(); 
 
  }

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
        <img 
        onClick= { refreshPage }
        className="nav__logo" src={logo} alt="logo-tayovie" />
        <img
          onClick={() => history.push("/profile")}
          className="nav__avatar"
          src="https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png"
          alt="logo-tayovie"
        />
      </div>
    </div>
  );
}

export default Nav;

 // netflix avatar
 /* https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png */ 
