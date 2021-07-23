import React from "react";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments, faHeart } from "@fortawesome/free-regular-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./BlogContent.scss";

export default function BlogContent({
  src,
  author,
  date,
  comments,
  likes,
  blogTitle,
  blogContent,
}) {
  return (
    <Col md="4" className="blogContent">
      <LazyLoadImage src={src} alt="customer" effect="blur" />
      <div className="blogContent__data">
        <span className="blogContent__data_author">{author}</span>
        <span className="blogContent__data_date">{date}</span>
        <span className="blogContent__data_icon">
          <FontAwesomeIcon cursor="pointer" icon={faComments} />{" "}
          <p>{comments}</p>
        </span>
        <span className="blogContent__data_icon">
          <FontAwesomeIcon cursor="pointer" icon={faHeart} /> <p>{likes}</p>
        </span>
      </div>
      <h4>{blogTitle}</h4>
      <p>{blogContent}</p>
    </Col>
  );
}
