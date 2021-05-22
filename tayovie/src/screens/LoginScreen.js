import React from "react";
import "./LoginScreen.css";
import logo from "../tayovie-logo-1.png";

function LoginScreen() {
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={logo} alt="tayovieLogo" />
        <button className="loginScreen__button">Sign In</button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        <>
          <h1>Films, TV Programmes And More...</h1>
          <h3>
            Ready to watch ? Enter Your email to create or restart your
            membership
          </h3>
          <div className="loginScreen__input">
            <form action>
              <input type="email" placeholder="Email Address" />
              <button className="loginScreen__getStarted"> GET STARTED</button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
}

export default LoginScreen;
