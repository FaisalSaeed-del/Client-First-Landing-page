import React from "react";
import "./clientgoal.css";
import g1 from "../../assets/images/green.svg";
import g2 from "../../assets/images/yellow.svg";
import g3 from "../../assets/images/blue.svg";
import g4 from "../../assets/images/purple.svg";
import g5 from "../../assets/images/red.svg";
import g6 from "../../assets/images/bulb.svg";

const Clientgoal = () => {
  return (
    <div>
      <section className="container">
        <div className="main-client">
          <div className="global-head">
            <h2>Goals of Client-First</h2>
          </div>
          <div className="client-items">
            <div className="client-goals">
              <div className="goals">
                <div>
                  <img src={g1} alt="" />
                </div>
                <div className="client-text">
                  <p>1. Create a project organization system.</p>
                </div>
              </div>
              <div className="goals">
                <div>
                  <img src={g4} alt="" />
                </div>
                <div className="client-text">
                  <p>4. Standardize processes across pages.</p>
                </div>
              </div>
            </div>
            <div className="client-goals">
              <div className="goals">
                <div>
                  <img src={g2} alt="" />
                </div>
                <div className="client-text">
                  <p>2. Work faster in Webflow, with less effort.</p>
                </div>
              </div>
              <div className="goals">
                <div>
                  <img src={g5} alt="" />
                </div>
                <div className="client-text">
                  <p>5. Build scalable, manageable projects.</p>
                </div>
              </div>
            </div>
            <div className="client-goals">
              <div className="goals">
                <div>
                  <img src={g3} alt="" />
                </div>
                <div className="client-text">
                  <p>3. Define a class strategy for the project.</p>
                </div>
              </div>
              <div className="goals">
                <div>
                  <img src={g6} alt="" />
                </div>
                <div className="client-text">
                  <p>6. Unify a build strategy as a team.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clientgoal;
