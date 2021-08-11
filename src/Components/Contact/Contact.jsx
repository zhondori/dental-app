import React from "react";
import Navigation from "../Navigation/Navigation";
import Maps from "./Maps/Maps";
import Comments from "../Home/Comments/Comments";
import Info from "./Info/Info";
import Form from "./Form/Form";

const Contact = () => {
  return (
    <div className="contact">
        <Navigation navHeading="Contact" navTitle="Our Contact"/>
        <Info />
        <Maps />
        <Form />
        <Comments />
    </div>
  );
};

export default Contact;
