import React from "react";
import "./projectfolder.css";
import project from "../../assets/images/project.png";

const Projectfolder = () => {
  return (
    <div>
      <section className="container">
        <div className="main-project">
          <div className="global-head">
            <h1>Create better projects with Folders</h1>
          </div>
          <div className="project-para">
            <p>
              Client-First introduces a folder system add-on for Webflow
              Designer. Organize a project's classes with Folders.
            </p>
          </div>
          <div className="project-img">
            <img src={project} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projectfolder;
