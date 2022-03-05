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
			<h1 className="name">Mohamed Behhar</h1>
			<h1 className="title">I love turning design into Code</h1>
			<p>I'm Mohamed, a self-taught front-end web developer based in Morocco, i really enjoy working with Html, Css and JavaScript to build websites. <br />Currently im studying computer sciences at <a className='school' href="https://1337.ma/en/"> 1337 school</a> and my aim is to become a MERN full stack developer.</p>
		</article>
		</section>
	</div>
  )
}

export default Home