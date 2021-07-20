import React from "react";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Content.scss";

function Content({ title, paragraph, button }) {
    return (
        <Col md="4" className="content">
            <h3>{title}</h3>
            <p>{paragraph}</p>
            <Link to="/">{button} &nbsp;<FontAwesomeIcon icon={faArrowRight}/></Link>
        </Col>   
    )
}

export default Content;