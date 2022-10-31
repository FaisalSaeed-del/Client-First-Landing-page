import React from "react";
import "./navbar.css";
import Logo from "../../assets/images/logo.svg";
import Vector from "../../assets/images/vector.svg";
import Curly from "../../assets/images/bracket.svg";

const Navbar = () => {
  return (
    <div className="global-bg">
      <section className="container">
        <div>
          <div className="nav-bar">
            <div className="navbar-items">
              <ul>
                <img src={Logo} alt="logo" />
                <li className="client-text">
                  <a href="#">Client-First</a>
                </li>
                <li>
                  <a href="#">Docs</a>
                </li>
                <li>
                  <a href="#">Resources</a>
                </li>
                <li>
                  <a href="#">Languages</a>
                </li>
              </ul>
            </div>
            <div className="navbar-items">
              <ul>
                <img src={Vector} alt="logo" />
                <li>
                  <a href="#">Get the Cloneable</a>
                </li>
                <li>
                  <a href="#">Log in with</a>
                </li>
                <img src={Curly} alt="logo" />
                <li>
                  {" "}
                  <a href="#">Finsweet</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
