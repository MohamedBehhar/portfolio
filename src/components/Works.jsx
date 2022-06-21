import React from 'react'
import {works} from '../data'
import {BsGithub} from 'react-icons/bs'
import {FaExternalLinkSquareAlt} from 'react-icons/fa'

const Works = () => {
  return (
	<div className='works' id='works'>
    <div className="works-center container reveal">
        <section className="section-title">
        <h1>My Works</h1>
        <div className="line"></div>
        </section>
        <div className="work-grid">
        {works.map((work) =>{
          const {id, title, description, url, img, github} = work;
          return(
            <div className="work" key={id}>
              <a href={url} target="_blank"  rel="noreferrer">
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
                <div className="work-text">
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <a href={url} target="_blank" rel="noreferrer" >
                    <FaExternalLinkSquareAlt className="link-icon"/>
                  </a>
                  <a href={github} target="_blank" rel="noreferrer" >
                    <BsGithub className="link-icon"/>
                  </a>
                </div>
              </a>
            </div>
          )
        })}
        </div>
    </div>
  </div>
  )
}

export default Works