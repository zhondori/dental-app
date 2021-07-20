import React from "react";
import Header from "./Header/Header";
import Ads from "./Ads/Ads";
import Cards from "./Cards/Cards";
import Recomedded from "./Recomedded/Recomedded";
import Services from "./Services/Services";
import Doctors from "./Doctors/Doctors";
import Comments from "./Comments/Comments";
import Blog from "./Blog/Blog";

const Home = () => {
    return (
        <div>
            <Header />
            <Ads />
            <Cards />
            <Recomedded />
            <Services />
            <Doctors />
            <Comments />
            <Blog />
        </div>
    )
}
export default Home;