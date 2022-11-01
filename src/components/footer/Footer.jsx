import React from "react";
import "./footer.css";
import Logo from "../../assets/images/logo.svg";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <section className="container">
        <div className="footer-items">
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="footer-bar">
            <div className="footer-links">
              <h2> Client-First Docs </h2>
              <a href="">Learning path</a>
              <a href="">Learning path</a>
              <a href="">Learning path</a>
              <a href="">Learning path</a>
            </div>
            <div className="footer-links">
              <h2> Client-First Docs </h2>
              <a href="">Learning path</a>
              <a href="">Learning path</a>
            </div>
            <div className="footer-links">
              <h2> Client-First Docs </h2>
              <a href="">Learning path</a>
              <a href="">Learning path</a>
              <a href="">Learning path</a>
              <a href="">Learning path</a>
            </div>
            <div className="footer-links social-icons">
              <h2> Client-First Docs </h2>
              <a href="">
                <BsFacebook />
              </a>
              <a href="">
                <AiFillTwitterCircle />
              </a>
              <a href="">
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
