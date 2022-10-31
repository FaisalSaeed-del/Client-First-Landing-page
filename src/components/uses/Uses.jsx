import React from "react";
import "./uses.css";
import U1 from "../../assets/images/u1.svg";
import U2 from "../../assets/images/u2.svg";
import U3 from "../../assets/images/u3.svg";
import U4 from "../../assets/images/u4.svg";

const Uses = () => {
  return (
    <div>
      <section className="container">
        <div className="main-use">
          <div className="global-head">
            <h2>Goals of Client-First</h2>
          </div>
          <div className="client-use">
            <div className="client-goals">
              <div className="goals">
                <div>
                  <img src={U1} alt="" />
                </div>
                <div className="client-para">
                  <p>
                    Finsweet has 7+ years of Webflow experience and is a Webflow
                    Enterprise Partner.
                  </p>
                </div>
              </div>
              <div className="goals">
                <div>
                  <img src={U3} alt="" />
                </div>
                <div className="client-para">
                  <p>
                    Finsweet has 7+ years of Webflow experience and is a Webflow
                    Enterprise Partner.
                  </p>
                </div>
              </div>
            </div>
            <div className="client-goals">
              <div className="goals">
                <div>
                  <img src={U2} alt="" />
                </div>
                <div className="client-para">
                  <p>
                    Finsweet has 7+ years of Webflow experience and is a Webflow
                    Enterprise Partner.
                  </p>
                </div>
              </div>
              <div className="goals">
                <div>
                  <img src={U4} alt="" />
                </div>
                <div className="client-para">
                  <p>
                    Finsweet has 7+ years of Webflow experience and is a Webflow
                    Enterprise Partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Uses;
