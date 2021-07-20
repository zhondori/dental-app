import React from "react";
import Header from "./Header/Header";
import Ads from "./Ads/Ads";
import Cards from "./Cards/Cards";
import Recomedded from "./Recomedded/Recomedded";
import Services from "./Services/Services";
import Doctors from "./Doctors/Doctors";

const Home = () => {
    return (
        <div>
            <Header />
            <Ads />
            <Cards />
            <Recomedded />
            <Services />
            <Doctors />
        </div>
    )
}
export default Home;