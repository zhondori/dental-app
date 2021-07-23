import React from "react";
import { Container, Row, Col } from "reactstrap";
import Doctor from "../../Home/Doctors/Doctor/Doctor";
import DoctorData from "../../../JSON/DoctorData.json";
import BottomNav from "../BottomNav/BottomNav";
import "./DocCard.scss";

function DocCard() {
    return (
        <div className="docCard">
            <Container>
                <Row>
                    <Col md="12">
                        <h3>Our Distinguished Dental Specialists</h3>
                    </Col>
                    <Col md="12">
                        <Row>
                            {DoctorData.map(doctor => (
                                <Doctor key={doctor.id} src={doctor.img} name={doctor.name} position={doctor.position}/>
                            ))}
                        </Row>
                    </Col>
                    <Col md="12">
                        <Row>
                            {DoctorData.map(doctor => (
                                <Doctor key={doctor.id} src={doctor.img} name={doctor.name} position={doctor.position}/>
                            ))}
                        </Row>
                    </Col>
                    <BottomNav />
                </Row>
            </Container>
        </div>
    )
}

export default DocCard;