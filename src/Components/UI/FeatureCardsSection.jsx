import React from "react";
import "./FeatureCardsSection.css";
import featuresData from "../../assets/data/features.json";


const FeatureCardsSection = () => {
  return (

        <div className="feature-cards-section">
          {featuresData.map((feature, index) => (
            <div key={index} className="serviceWrapper ">
              <img
                src={feature.image}
                alt={feature.title}
                className="sectionImg"
              />
              <div className="serviceDesc">
                <h1>{feature.title}</h1>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
  );
};

export default FeatureCardsSection;
