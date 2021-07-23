import React from "react";
import { Container, Row, Col } from "reactstrap";
import ClientImage from "../../../Main_images/img1.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./Rec.scss";

function Recomedded() {
  return (
    <div className="rec">
      <Container>
        <Row>
          <Col md="6">
            <LazyLoadImage 
            src={ClientImage}
            alt="client recomedded"
            effect="blur"
            />
          </Col>
          <Col md="6">
            <h3>Relax your dentist knows best</h3>
            <ul>
              <li>
                <h4>Dental hygiene never forget!</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </li>
              <li>
                <h4>Don’t rush when you brush!</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </li>
              <li>
                <h4>Visit your dentist once in 6 months</h4>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </p>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
export default Recomedded;
