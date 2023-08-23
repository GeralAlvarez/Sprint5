import React from "react";
import "./Testimonial.css";
import testimonialsData from '../../assets/data/testimonials.json';
function Testimonial() {
  return (

    <div className="testimonials-article">
      
    {testimonialsData.map((testimonials, index) => (
      <div key={index} className="testimonialDesc">
        <p>{testimonials.quote}</p>
        <div className="profileWrapper">
          <img src={testimonials.image} alt="" className="profile" />
          <div className="profileDesc">
            <h4>{testimonials.name}</h4>
            <small>{testimonials.title}</small>
          </div>
        </div>
      </div>
       ))}
      </div>

  );
}

export default Testimonial;
