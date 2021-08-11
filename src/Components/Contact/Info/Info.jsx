import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStreetView,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import "./Info.scss";

const Info = () => {
  return (
    <div className="info">
      <Container>
        <Row>
          <Col md="12">
            <div className="info-child">
              <FontAwesomeIcon icon={faStreetView} className="info-child__icon" />
              <h3 className="info-child__title">Address</h3>
              <div className="info-child__content">
                <p>A-655 Karol bagh, Near Delhi 93 – Map</p>
              </div>
            </div>
            <div className="info-child">
              <FontAwesomeIcon icon={faPhoneVolume} className="info-child__icon" />
              <h3 className="info-child__title">Contact Info</h3>
              <div className="info-child__content">
                <p>Email : techwero@gmail.com</p>
                <p>Phone : +61 3 8376 6284</p>
              </div>
            </div>
            <div className="info-child">
              <FontAwesomeIcon icon={faClock} className="info-child__icon" />
              <h3 className="info-child__title">Open Hour</h3>
              <div className="info-child__content">
                <p>Monday – Friday : 09:00 – 20:00</p>
                <p>Sunday & Saturday: 10:30 – 22:00</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Info;
