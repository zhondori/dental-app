import React from "react";
import { Container, Row, Col } from "reactstrap";
import CommentCard from "./Comment-card/CommentCard";
import CommentsData from "../../../JSON/Comments.json";
import "./Comments.scss";

function Comments() {
    return (
        <div className="comments">
            <Container>
                <Row>
                    <Col d="12">
                        <h3>Our Clients Speak</h3>
                        <p>We have been working with clients around the world</p>
                    </Col>
                    <Col md="12">
                        <Row>
                            {CommentsData.map(comment => (
                                <CommentCard commentTitle={comment.commentTitle}  comment={comment.comment} commenterImage={comment.commentImg} commenterName={comment.commenterName} commenterJob={comment.commenterJob} />
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Comments;