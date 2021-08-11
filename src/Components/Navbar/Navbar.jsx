import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../../Main_images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Navbar.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    let y = window.scrollY;
    if (y > 250) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div
      className="navbar-m"
      style={{
        position: scroll ? "fixed" : "relative",
      }}
    >
      <Container>
        <Row>
          <Col
            md="5"
            className="nav"
            sm="12"
            xs="12"
            style={{
              top: show ? "79px" : "-100%",
            }}
          >
            <ul className="nav__list">
              <li className="nav__list_item">
                <Link to="/about" className="nav__list_item_link">
                  About
                </Link>
              </li>
              <li className="nav__list_item">
                <Link to="/doctor" className="nav__list_item_link">
                  Doctor
                </Link>
              </li>
              <li className="nav__list_item">
                <Link to="/blog" className="nav__list_item_link">
                  Blog
                </Link>
              </li>
              <li className="nav__list_item">
                <Link to="/contact" className="nav__list_item_link">
                  Contact
                </Link>
              </li>
            </ul>
          </Col>
          <Col md="2" className="logo" sm="12" xs="12">
            <Link to="/">
              <img src={Logo} alt="LogoIpsum" />
            </Link>
            <FontAwesomeIcon
              icon={faBars}
              className="bar"
              onClick={() => setShow((prev) => !prev)}
            />
          </Col>
          <Col md="5" className="socials" sm="12" xs="12"
          style={{
              top: show ? "228px" : "-100%" 
          }}
          >
            <ul className="list-inline">
              <li className="list-inline-item">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://youtube.com" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Navbar;
