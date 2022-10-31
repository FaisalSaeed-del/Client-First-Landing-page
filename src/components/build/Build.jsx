import React from "react";
import "./build.css";
import icon1 from "../../assets/images/purple.svg";
import icon2 from "../../assets/images/u1.svg";
import icon3 from "../../assets/images/u2.svg";

const Build = () => {
  return (
    <div>
      <section className="container">
        <div className="main-build">
          <div className="build-icons">
            <div>
              <img src={icon1} alt="icons" />
            </div>
            <div>
              <img src={icon2} alt="icons" />
            </div>
            <div>
              <img src={icon3} alt="icons" />
            </div>
          </div>
          <div className="global-head">
            <h1> Build your next project with Client-First</h1>
          </div>
          <div className="global-btn">
            <button>Learn Client-First with docs</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Build;
