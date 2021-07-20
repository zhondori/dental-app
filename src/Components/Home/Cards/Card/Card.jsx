import React from "react";
import "./Card.scss";

const Card = ({ imgSource, heading, paragraph, imgName }) => {
    return (
        <div className="d-card">
            <img src={imgSource} alt={imgName} />
            <h4>{heading}</h4>
            <p>{paragraph}</p>
        </div>
    )
}

export default Card;