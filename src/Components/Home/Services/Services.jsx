import React from "react";
import { Col, Container, Row } from "reactstrap";
import Content from "./Content/Content";
import JSON from "../../../JSON/Services.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./Services.scss";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services">
      <Container>
        <Row>
          <Col md="12" className="services__header">
            <h1>Our Umbrella of Services</h1>
            <h1>Pain free procedures in dentistry</h1>
          </Col>
          <Col md="12">
            <Row>
              {JSON.map((content) => (
                <Content
                  key={content.id}
                  title={content.title}
                  paragraph={content.paragraph}
                  button={content.btnText}
                />
              ))}
            </Row>
          </Col>
          <Col md="12" className="bottom">
            <Link to="/">
              Explore All <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
