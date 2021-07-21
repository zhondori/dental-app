import React from "react";
import "./Navigation.scss";

function Navigation({ navHeading }) {
  return (
    <div className="navigation">
      <h3>{navHeading}</h3>
      <p>Home / {navHeading}</p>
    </div>
  );
}

export default Navigation;
