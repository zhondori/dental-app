import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./Form.scss";

const Form = () => {
  return (
    <div className="form">
      <Container>
        <Row>
          <Col md="12">
            <h2>Get in touch</h2>
          </Col>
          <Col md="12">
            <div className="form-box">
              <div className="name-email">
                <div className="name">
                  <label htmlFor="name">Your name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className="email">
                  <label htmlFor="email">Your email</label>
                  <input type="text" name="email" id="email" />
                </div>
              </div>
                <div className="subject">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" />
                </div>
                <div className="message">
                  <label htmlFor="message">Your Message</label>
                  <textarea name="message" id="message"></textarea>
                </div>
                <div className="button-box">
                    <button>Send</button>
                </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Form;
