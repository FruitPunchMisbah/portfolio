import React from "react";
import Page from "../Page";
import "./DevWorkPage.scss";

const DevWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={true}
        panelContent={{
          title: "About Me",
          quote: "The art of knowing is knowing what to ignore.",
          content: [
            <>
              Hello, My name is Misbahul Hasan. I am a CSE undergrad at UIET
              Kanpur.
              <br />
              {""}
              <a
                href="https://github.com/FruitPunchMisbah"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit my Github.
                <br />
              </a>
              <a
                href="https://www.linkedin.com/in/misbahul-hasan-385039326/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit my LinkedIn.
                <br />
              </a>
              <a
                href="https://www.instagram.com/fruitpunchmisbah/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit my Instagram.
                <br />
              </a>
            </>,
          ],
        }}
        imageSrc={"/images/Doraemon2.jpeg"}
      />
    </>
  );
};

export default DevWorkPage;
