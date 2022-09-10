import React from 'react'

const Home = () => {
  return (
	<div className='home' id='home'>
		<section className='home-center container'>
		<div className="img-container">
			<img src="images/hug-pic.jpg" alt="" className='home-picture'/>
		</div>
		<article className='description'>
			<p className='greeting'>hi, my name is</p>
			<h1 className="name">Mohamed</h1> 
			<h1 className="title">I love turning design into Code</h1>
			<p>I'm Mohamed, a front-end web developer based in Morocco.<br />
			I really enjoy working with Html, Css, JavaScript and React to creat beautiful and responsive User Interface. <br />
			Currently, I'm  looking for my first experience as a front-end web developer in ReactJs / NextJs.</p>
			<p className='resume'><a href="/files/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
			</p>
		</article>
		</section>
	</div>
  )
}

export default Home