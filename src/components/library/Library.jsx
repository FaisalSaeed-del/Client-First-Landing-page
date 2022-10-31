import React from "react";
import "./library.css";
import B1 from "../../assets/images/library.png";
import B2 from "../../assets/images/libr.svg";

const Library = () => {
  return (
    <div className="main-bg">
      <section className="container">
        <div className="main-library">
          <div className="library-item">
            <div className="library-text">
              <div>
                <img src={B2} alt="Library" />
              </div>
              <div className="library-head">
                <h2>The fastest way to build in Webflow</h2>
              </div>
              <div className="library-para">
                <p>
                  Access the world’s largest library of Webflow components built
                  using the Finsweet's Client-First system.
                </p>
              </div>
              <div className="library-btn ">
                <button>Try for Free</button>
              </div>
            </div>
            <div className="library-img">
              <img src={B1} alt="Img" width="100%" />
            </div>
          </div>
        </div>
      </section>
      <div className="library-border"></div>
    </div>
  );
};

export default Library;
