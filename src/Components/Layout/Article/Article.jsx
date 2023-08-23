import React from "react";
import "./Article.css";
import Testimonial from "../../UI/Testimonial";
import quotes from "../../../../public/images/bg-quotes.png";

function Article() {
  return (
    <article className="testimonialArticle">
      <div className="testimonial">
        <div className="testimonialCard">
          <img src={quotes} alt="quotes" className="quotes" />
          <Testimonial />
        </div>
      </div>
    </article>
  );
}

export default Article;
