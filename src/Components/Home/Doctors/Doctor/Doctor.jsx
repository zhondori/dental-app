import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Col } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Doctor.scss";

function Doctor({ src, name, position }) {
    return (
        <Col md="3" className="doctor-card">
            <LazyLoadImage 
            src={src}
            alt="doctor"
            effect="blur"
            />
            <h3>{name}</h3>
            <p>{position}</p>
            <ul>
                <li>
                    <a href="https://facebook.com"><FontAwesomeIcon icon={faFacebookF} /></a>
                </li>
                <li>
                    <a href="https://facebook.com"><FontAwesomeIcon icon={faTwitter} /></a>
                </li>
                <li>
                    <a href="https://facebook.com"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
            </ul>
        </Col>
    )
}

export default Doctor;