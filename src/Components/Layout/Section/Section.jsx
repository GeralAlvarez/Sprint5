import React from "react";
import "./Section.css";
import FeatureSection from "../../UI/FeatureSection";
import FeatureCardsSection from "../../UI/FeatureCardsSection";
import ImageTextSection from "../../UI/ImageTextSection";
import illustrationIntro from "../../../../public/images/illustration-intro.png";
import curvyDesktop from "../../../../public/images/bg-curvy-desktop.svg";
import productive from "../../../../public/images/illustration-stay-productive.png";

function Section() {
  return (
    <>
      <FeatureSection
        imageUrl={illustrationIntro}
        title="All your files in one secure location, accessible anywhere."
        paragraph="Fylo stores al your most important files in one secure location.
        Access them wherever you need, share and collaborate with friends
        family, and co-workers."
        imagUrl={curvyDesktop}
      />

      <section className="section2">
        <div className="services">
          <FeatureCardsSection />
        </div>
      </section>

      <ImageTextSection
        img={productive}
        secTitle="Stay productive, wherever you are"
        sectionPar=" Never let location be an issue when accessing your files. Fylo has
      you covered for all of your file storage needs."
        sectionPara="Securely share files and folders with friends, family and colleagues
      for live collaboration. No email attachments required."
        link=""
      />
    </>
  );
}

export default Section;
