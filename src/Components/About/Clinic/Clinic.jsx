import React from "react";
import { Container, Row, Col } from "reactstrap";
import ClinicData from "../../../JSON/ClinicData.json";
import ClinicCard from "./ClinicCard/ClinicCard";
import "./Clinic.scss";

function Clinic() {
  return (
    <div className="clinic">
      <Container>
        <Row>
          <Col md="12">
            <h2>Clinic Departments</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </Col>
          <Col md="12">
            <Row>
              {ClinicData.map((data) => (
                <ClinicCard
                  key={data.id}
                  title={data.title}
                  paragraph={data.content}
                />
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Clinic;
