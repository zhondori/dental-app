import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Logo from "../../Main_images/logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram , faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./Navbar.scss";

const Navbar = () => {
    return (
        <div className="navbar">
            <Container>
                <Row>
                    <Col md="5" className="nav" sm="12" xs="12">
                        <ul className="nav__list">
                            <li className="nav__list_item"><Link to="/about" className="nav__list_item_link">About</Link></li>
                            <li className="nav__list_item"><Link to="/doctor" className="nav__list_item_link">Doctor</Link></li>
                            <li className="nav__list_item"><Link to="/blog" className="nav__list_item_link">Blog</Link></li>
                            <li className="nav__list_item"><Link to="/contact" className="nav__list_item_link">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col md="2" className="logo" sm="12" xs="12">
                        <Link to="/"><img src={Logo} alt="LogoIpsum"/></Link>
                    </Col>
                    <Col md="5" className="socials" sm="12" xs="12">
                        <ul className="list-inline">
                            <li className="list-inline-item">
                                <a href="https://instagram.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook}/></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://twitter.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter}/></a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://youtube.com" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube}/></a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>    
    )
}
export default Navbar;