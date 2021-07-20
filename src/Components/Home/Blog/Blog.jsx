import React from "react";
import { Container, Row, Col } from "reactstrap";

function Blog() {
    return (
        <div className="blog">
            <Container>
                <Row>
                    <Col md="12">
                        <h3>Our Blog</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Blog;