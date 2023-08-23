import React from "react";
import './Footer.css'
import Form from "../../UI/Form";
import logo from "../../../../public/images/logo.svg";
import phone from "../../../../public/images/icon-phone.svg";
import email from "../../../../public/images/icon-email.svg";
import location from "../../../../public/images/icon-location.svg";
import facebook from "../../../../public/images/facebook.svg";
import twitter from "../../../../public/images/twitter.svg";
import instagram from "../../../../public/images/instagram.svg";

function Footer() {
  return (
    <>
    <div className="from-footer">
    <Form
      title="Get early access today"
      par="It only takes a minute to sign up and our free starter tier is
    extremely generous. If you have any questions, our support
    team would be happy to help you."
    />
    </div>

    <footer>
    <div className="img-logo">
      <img src={logo} alt="Logo" className="logo" />
    </div>
    <div className="footer-body">
      <div className="location">
        <div className="logo-location">
          <img src={location} alt="logo-location" />
        </div>
        <p className="fas">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>

      <div className="reach-us">
        <ul>
          <li>
            <img src={phone} alt="phone" className="phone" />
            +1-543-123-4567
          </li>

          <li className="fa">
            <img src={email} alt="email" className="email" />
            example@fylo.com
          </li>
        </ul>
      </div>

      <div className="about-us">
        <ul>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>

      <div className="contact-us">
        <ul>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li>
            <a href="#">Terms</a>
          </li>
          <li>
            <a href="#">Privacy</a>
          </li>
        </ul>
      </div>

      <div className="social-link">
        <a href="#">
          <img src={facebook} alt="fc"/>
        </a>
        <a href="#">
          <img src={twitter} alt="tw"/>
        </a>
        <a href="#">
          <img src={instagram} alt="ig"/>
        </a>
      </div>
    </div>
  </footer>
  </>
  );
}

export default Footer;
