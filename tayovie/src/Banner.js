import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <header className="banner" style={{
        backgroundSize:"cover",
        backgroundImage:`url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/yellow-film-club-online-registration-banner-design-template-abd9992106556c37d7b940c913dd7c6b_screen.jpg?ts=1566575106")`,
        backgroundPosition:"center center",
       }}>
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
            <button>Play</button>
            <button>My List</button>


        </div>
      </div>
    </header>
  );
}

export default Banner;
