import React from "react";
import "./Navigation.scss";

function Navigation({ navHeading, navTitle }) {
  return (
    <div className="navigation">
      <h3>{navTitle}</h3>
      <p>Home / {navHeading}</p>
    </div>
  );
}

export default Navigation;