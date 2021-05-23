import { useState } from "react";
import "./LoginScreen.css";
import logo from "../tayovie-logo-1.png";
import SignUpScreen from "./SignUpScreen";


function LoginScreen() {
    const [signIn, setSignIn] = useState(false)
 
 
return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src={logo} alt="tayovieLogo" />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Films, TV Programmes And More...</h1>
            <h3>
              Ready to watch ? Enter Your email to create or restart your
              membership
            </h3>
            <div className="loginScreen__input">
              <form action>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                 
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
