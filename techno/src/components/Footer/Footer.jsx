import React from "react";
import "./Footer.css";
import footer from "../../assets/img/footer.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_box">
            <div className="logo">
              <div className="logo-img">
                <img src={footer} alt="" />
              </div>
              <h2>Techno</h2>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock,
              </p>
            </div>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Company</h4>
            <ul className="footer_links">
              <li>
                <Link to={'/cources'}>Our Programs</Link>
              </li>
              <li>
                <Link to={'/services'}>Our Plan</Link>
              </li>
              <li>
                <Link to={''}>Become a member</Link>
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <h4 className="footer_title">Quick Links</h4>
            <ul className="footer_links">
              <li>
              <Link to={'/aboutus'} >About Us</Link>
              </li>
              <li>
              <Link to={'/contact'}>Contact Us</Link>
              </li>
              <li>Support Us</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
