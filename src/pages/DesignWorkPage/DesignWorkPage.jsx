import React from "react";
import Page from "../Page";
import "./DesignWorkPage.scss";

const DesignWorkPage = () => {
  return (
    <>
      <Page
        requireDarkRoom={false}
        panelContent={{
          title: "Academic Fiasco",
          // quote: "The best design is more than beautiful, it's meaningful.",
          content: [
            <>
              Are you also a CS Major at UIET Kanpur?
              <br />
              If yes, you should check some of these resources which me and my
              peers prepared.
              <br />
              Good Will Hunting!
              <br />{" "}
              <a
                href="https://linktr.ee/UIETScripts"
                target="_blank"
                rel="noopener noreferrer"
              >
                Notes and other resources.
                <br />
              </a>
              <a
                href="http://z-quizzes.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Physics Viva Questions.
                <br />
              </a>
            </>,
          ],
        }}
        imageSrc={"/images/cat.jpg"}
      />
    </>
  );
};

export default DesignWorkPage;
