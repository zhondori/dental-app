import React from "react";
import { Container, Row, Col } from "reactstrap";
import Logo from "../../Main_images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faGoogle, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col md="3" className="first">
            <img src={Logo} alt="logo" />
            <div className="footer__about-us">
              <h4>About Us</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </p>
            </div>
          </Col>
          <Col md="3" className="footer__list">
            <ul className="list-unstyled">
              <li>
                <p>Bussines hours:</p>
                <p>Monday to Saturday 9:30 am - 4:30 pm</p>
              </li>
              <li>
                <p>Address:</p>
                <p>A-67 south Ex Delhi-11002</p>
              </li>
              <li>
                <p>Email:</p>
                <p>abc@abc.com</p>
              </li>
              <li>
                <p>Phone:</p>
                <p>1800 - 458495-4455</p>
              </li>
            </ul>
          </Col>
          <Col md="3" className="third">
              <h4>Stay Connected</h4>
              <ul className="list-unstyled">
                  <li><FontAwesomeIcon icon={faFacebookF} /> <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
                  <li><FontAwesomeIcon icon={faTwitter} /> <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
                  <li><FontAwesomeIcon icon={faGoogle} /> <a href="https://google.com" target="_blank" rel="noreferrer">Google</a></li>
                  <li><FontAwesomeIcon icon={faInstagram} /> <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                  <li><FontAwesomeIcon icon={faYoutube} /> <a href="https://youtube.com" target="_blank" rel="noreferrer">Youtube</a></li>
              </ul>
          </Col>
          <Col md="3" className="fourth">
            <h4>Newsletter</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="email-form">
                <input type="email" placeholder="Enter Email ID" name="email"/>
                <button type="submit" id="email">Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;