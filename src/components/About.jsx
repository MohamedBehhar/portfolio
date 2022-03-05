import React from 'react'
import {technologies} from '../data'
const About = () => {
  return (
	<div className='about' id='about'>
    <div className='about-center container'>
      <section className="section-title">
        <h1>About</h1>
        <div className="line"></div>
        </section>
      <section className="about-section">
        <article className='description'>
        <p>Hello! My name is Mohamed and I enjoy creating things that live on the internet. My interest in web development started back in 2020 during the  sanitary crisis when I decided to start learning HTML & CSS!</p>
        <p>Fast-forward to today, I have the chance to integrate one of te 
        best of computer programming schooll in the world , 1337 one of 
        42 network schools.</p>
        <p>My main focus these days is to learn more about computer science
        and to become a MERN stack developer.</p>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <div className="tecnologies">
          {technologies.map((tech) =>{
            return(
              <div className="technologie" key={tech.id}>
                <i className='tech-icon'>{tech.icon}</i>
                <h3>{tech.text}</h3>
              </div>
            )
          })}
        </div>
      </article>
        <div className="img-container">
          <img src='images/personal.jpg' alt="portrait" className='personal' />
        </div>
      </section>      
    </div>
	</div>
  )
}

export default About