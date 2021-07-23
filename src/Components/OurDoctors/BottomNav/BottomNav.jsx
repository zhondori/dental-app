import React from "react";
import { Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./BottomNav.scss";

function BottomNav() {
    return (
        <Col md="12" className="bottom-nav">
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li><FontAwesomeIcon icon={faChevronRight} /></li>
        </ul>
    </Col>
    ) 
}

export default BottomNav;