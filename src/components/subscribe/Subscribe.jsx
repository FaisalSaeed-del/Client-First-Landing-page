import React from "react";
import "./subscribe.css";
import F1 from "../../assets/images/finsweet.svg";

const Subscribe = () => {
  return (
    <div>
      <section className="container">
        <div className="sub-main">
          <div className="sub-text">
            <div className="sub-head">
              <h3>Subscribe to Finsweet</h3>
            </div>
            <div className="sub-para">
              <p>
                Get product updates, news, content, and invites to cool events.
              </p>
            </div>
          </div>
          <div className="sub-input">
            <div className="input-field">
              <input type="text" placeholder="Your Email..." />
            </div>
            <div className="input-btn">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        {/* copy right section  */}
        <div className="main-copy">
          <div className="copy-items">
            <div className="copy-first">
              <p>© 2022 Client-First Webflow Style System</p>
            </div>
            <div className="copy-sec">
              <span>Made with 💪 by </span>
              <img src={F1} alt="finsweet" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscribe;
