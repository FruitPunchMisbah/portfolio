import React from "react";
import Page from "../Page";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "My Work",
          // quote: "Revolutionizing architecture for the AI future.",
          content: [
            "Coming Soon! Stay Tuned!",
          ],
        }}
         imageSrc={"/images/Doraemon1.jpg"}
      />
    </>
  );
};

export default AboutPage;
