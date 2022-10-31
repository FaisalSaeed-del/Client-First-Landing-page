import React from "react";
import "./folderintro.css";
import Packman from "../../assets/images/packman.svg";
import C1 from "../../assets/images/client.svg";
import C2 from "../../assets/images/client2.svg";
import C3 from "../../assets/images/client3.svg";
import C4 from "../../assets/images/client4.svg";
import C5 from "../../assets/images/client5.svg";
import C6 from "../../assets/images/client6.svg";

const Folderintro = () => {
  return (
    <div className="main-bg">
      <section className="container">
        <div className="main-folder">
          <img src={Packman} alt="" />

          <div className="global-head">
            <h1>Create better projects with Folders</h1>
          </div>
          <div className="project-para">
            <p>
              Client-First introduces a folder system add-on for Webflow
              Designer. Organize a project's classes with Folders.
            </p>
          </div>
        </div>
        {/* Folder Introduction */}
        <div className="main-card">
          <div className="client-card">
            <div className="client-item">
              <div className="client-desc">
                <div>
                  <img src={C1} alt="" />
                </div>
                <div className="client-name">
                  <span>Wade Warren</span>
                </div>
              </div>
              <div className="client-para">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="client-item">
              <div className="client-desc">
                <div>
                  <img src={C6} alt="" />
                </div>
                <div className="client-name">
                  <span>Wade Warren</span>
                </div>
              </div>
              <div className="client-para">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="client-item">
              <div className="client-desc">
                <div>
                  <img src={C2} alt="" />
                </div>
                <div className="client-name">
                  <span>Wade Warren</span>
                </div>
              </div>
              <div className="client-para">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
          <div className="client-card">
            <div className="client-item">
              <div className="client-desc">
                <div>
                  <img src={C3} alt="" />
                </div>
                <div className="client-name">
                  <span>Wade Warren</span>
                </div>
              </div>
              <div className="client-para">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="client-item">
              <div className="client-desc">
                <div>
                  <img src={C4} alt="" />
                </div>
                <div className="client-name">
                  <span>Wade Warren</span>
                </div>
              </div>
              <div className="client-para">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="client-item">
              <div className="client-desc">
                <div>
                  <img src={C5} alt="" />
                </div>
                <div className="client-name">
                  <span>Wade Warren</span>
                </div>
              </div>
              <div className="client-para">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="pr-btn">
          <button>Load More</button>
        </div>
      </section>
    </div>
  );
};

export default Folderintro;
