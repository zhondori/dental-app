import React, { useEffect } from "react";
import Doctors from "../Home/Doctors/Doctors";
import Comments from "../Home/Comments/Comments";
import Navigation from "../Navigation/Navigation";
import AboutContent from "./AboutContent/AboutContent";
import Clinic from "./Clinic/Clinic";

function About() {
    useEffect(() => {
        document.title = "Dental App | About";
    }, [])
    return (
        <div className="about">
            <Navigation navHeading={"About us"} navTitle={"About us"}/>
            <AboutContent />
            <Clinic />
            <Doctors />
            <Comments />
        </div>
    )
}
export default About;