import React from "react";
import { Col } from "reactstrap";
import "./ClinicCard.scss";

function ClinicCard({ title, paragraph }) {
  return (
    <Col md="3" className="clinic-column">
      <h4>{title}</h4>
      <p>{paragraph}</p>
    </Col>
  );
}

export default ClinicCard;