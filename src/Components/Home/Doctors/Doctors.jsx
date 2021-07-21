import React from "react";
import data from "../../../JSON/DoctorData.json";
import Doctor from "./Doctor/Doctor";
import { Container, Row, Col } from "reactstrap";
import "./Doctors.scss";

function Doctors() {
  return (
    <div className="docs">
      <Container>
        <Row>
          <Col md="12" className="text-center">
            <h3>Our Distinguished Dental Specialists</h3>
          </Col>
          {data.map((doctor) => (
            <Doctor
              key={doctor.id}
              name={doctor.name}
              src={doctor.img}
              position={doctor.position}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Doctors;
