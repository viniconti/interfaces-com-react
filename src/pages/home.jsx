import { useState } from "react";
import "./home.css";
import { useNavigate } from "react-router-dom";

function Home() {

  return (
    <div className="home-page">
      <header className="header">
        <div className="top">
          <img src="" alt="" className="logo" />
          <ul className="right-top">
            <li className="item-li">Home</li>
            <li className="item-li">Destinations</li>
            <li className="item-li">Tours</li>
            <li className="item-li">Contact</li>
            <button className="bookNow"></button>
          </ul>
        </div>

        <div className="left-side">

        </div>
      </header>
    </div>
  );
}

export default Home;