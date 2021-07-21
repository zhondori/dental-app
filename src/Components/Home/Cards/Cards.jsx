import React from "react";
import JSonData from "../../../JSON/CardContent.json";
import Card from "./Card/Card";
import { Col, Row, Container } from "reactstrap";
import "./Cards.scss";

const Cards = () => {
  return (
    <div className="cards">
      <Container>
        <Row>
          <Col md="12">
            {JSonData.map(data => {
              return (
                <Card
                key={data.id}
                  imgSource={data.src}
                  imgName={data.imgAlt}
                  paragraph={data.paragraph}
                  heading={data.heading}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
