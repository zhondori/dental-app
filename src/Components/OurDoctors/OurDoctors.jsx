import React, { useEffect } from "react";
import Page from "../About/AboutContent/Page/Page";
import Navigation from "../Navigation/Navigation";
import Image from "../../Main_images/img4.png";
import DocCard from "./DocCard/DocCard";

function OurDoctors() {
  useEffect(() => {
    document.title = "Dental App | Doctor";
  }, []);
  const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an 
    unknown printer took a galley of type and scrambled it to make a type specimen book. It 
    has survived not only five centuries, but also the leap into electronic typesetting, remaining
    essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
     PageMaker including versions of Lorem Ipsum.`;
  return (
    <div className="our-doctors">
      <Navigation navHeading="Doctor" navTitle="Our Doctors" />
      <Page
        param={text}
        title={
          <h3>
            <span>Our Doctors</span>
          </h3>
        }
        src={Image}
      />
      <DocCard />
    </div>
  );
}

export default OurDoctors;
