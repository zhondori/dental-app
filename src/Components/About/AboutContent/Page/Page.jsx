import React from "react";
import { Container, Row, Col } from "reactstrap";
import "react-lazy-load-image-component/src/effects/blur.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./Page.scss";

function Page({ src, param, title }) {
  return (
    <div className="page">
      <Container>
        <Row>
          <Col md="6">
            <LazyLoadImage src={src} alt="about" effect="blur" />
          </Col>
          <Col md="6">
            {title}
            <p>{param}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Page;
