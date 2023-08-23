import React from "react";
import './FeatureSection.css'
import Button from './Button'


const FeatureSection = (props) => {
  return (
    <section className="section1">
      <div className="illustration">
        <img src={props.imageUrl} alt="Feature" />
      </div>
      <div className="introIllustration">
      <h1>{props.title}</h1>
      <p>{props.paragraph}</p>
      <Button 
      type='button'
      text="Get Started"
      />
      </div>
      <img src={props.imagUrl} alt="Feature" className="bgCurvy"/>
    </section>
  );
};


export default FeatureSection;
