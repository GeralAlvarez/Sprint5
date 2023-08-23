import React from 'react'
import './ImageTextSection.css'

function ImageTextSection(props) {
  return (
    <section className="section3">
          <img src={props.img} alt="Feature" />
          <div className="section3Desc">
            <h1>{props.secTitle}</h1>
            <p>{props.sectionPar}</p>
            <p>{props.sectionPara}</p>
            <a className='arrow' href={props.link}>See how Fylo works</a>
          </div>
        </section>
  )
}

export default ImageTextSection