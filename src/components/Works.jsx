import React from 'react'
import {works} from '../data'

const Works = () => {
  return (
	<div className='works' id='works'>
    <div className="works-center container">
        <section className="section-title">
        <h1>My Works</h1>
        <div className="line"></div>
        </section>
        <div className="work-flex">
        {works.map((work) =>{
          const {id, title, description, url, img} = work;
          return(
            <div className="work" key={id}>
              <div className="img-container">
                <img src={img} alt="" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={url}>Click me</a>
            </div>
          )
        })}
        </div>
    </div>
  </div>
  )
}

export default Works