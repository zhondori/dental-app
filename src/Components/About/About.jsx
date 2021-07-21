import React from "react";
import Doctors from "../Home/Doctors/Doctors";
import Comments from "../Home/Comments/Comments";
import Footer from "../Footer/Footer";
import Navigation from "../Navigation/Navigation";

function About() {
    return (
        <div className="about">
            <Navigation navHeading={"About us"} />
            <Doctors />
            <Comments />
            <Footer />
        </div>
    )
}
export default About;