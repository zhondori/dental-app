import React from "react";
import { Container, Row, Col } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faHeart } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import "./BigContent.scss";

function BigContent({ obj }) {
  return (
    <div className="big-content">
      <Container>
        <Row>
          <Col md="6" className="col-img">
            <LazyLoadImage src={obj.image} alt="content" effect="blur" />
          </Col>
          <Col md="6" className="col-text">
            <h2 className="col-text__title">{obj.blogTitle}</h2>
            <div className="settings">
              <p className="settings__author">{obj.author}</p>
              <p className="settings__date">{obj.date}</p>
              <p className="settings__comments">
                <FontAwesomeIcon icon={faComments} />
                {obj.comments}
              </p>
              <p className="settings__likes">
                <FontAwesomeIcon icon={faHeart} />
                {obj.likes}
              </p>
            </div>
            <p className="big-content__text">
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
              <br />
              <br />
              It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using
              'Content here &nbsp;<Link to="/">Read more...</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default BigContent;
