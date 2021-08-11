import React from "react";
import { Col } from "reactstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import "./CommentCard.scss";

function CommentCard({
  commentTitle,
  comment,
  commenterImage,
  commenterName,
  commenterJob,
}) {
  return (
    <Col md="4" className="comment-card">
      <div className="comment-content">
        <h3>{commentTitle}</h3>
        <p>{comment}</p>
      </div>
      <div className="commenter">
        <LazyLoadImage src={commenterImage} effect="blur" alt="commenter" />
        <h4>{commenterName}</h4>
        <p>{commenterJob}</p>
      </div>
    </Col>
  );
}

export default CommentCard;
