import React from "react";
import { Container, Row, Col } from "reactstrap";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./FluidPage.scss";

function FluidPage({ src }) {
  return (
    <div className="fluid-page">
      <Container>
        <Row>
          <Col md="6">
            <h2>We do our best since 2003</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>
          <Col md="6">
            <LazyLoadImage src={src} alt="user with doctor" effect="blur" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FluidPage;