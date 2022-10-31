import React from "react";
import "./hero.css";
import pic1 from "../../assets/images/hero1.png";
import pic2 from "../../assets/images/hero2.png";
import pic3 from "../../assets/images/hero3.png";

const Hero = () => {
  return (
    <div>
      <section className="container">
        <div className="main-hero">
          <div className="global-head">
            <h1>Client-First helps us develop organized websites in Webflow</h1>
          </div>
          <div className="hero-para">
            <p>
              Client-First is a set of guidelines and strategies to help us
              build Webflow websites. Built and managed by Finsweet.
            </p>
          </div>
          <div className="global-btn btn">
            <button>Learn Client-First with docs</button>
          </div>
        </div>
        <div className="hero-dashboard">
          <div className="dashboard1">
            <img src={pic1} alt="dashboard1" />
          </div>
          <div>
            <img src={pic2} alt="dashboard1" />
          </div>
          <div>
            <img src={pic3} alt="dashboard1" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
