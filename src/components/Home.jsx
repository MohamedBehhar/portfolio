import React from "react";

const Home = () => {
  return (
    <div className="home" id="home">
      <section className="home-center container">
        <div className="img-container">
          <img src="images/Developer.svg" alt="" className="home-picture" />
        </div>
        <article className="description">
          <p className="greeting">hi, my name is</p>
          <h1 className="name">Mohamed</h1>
          <h1 className="title">I love turning design into Code</h1>
          <p>
            {" "}
            Hello there, I'm Mohamed, a passionate front-end web developer
            hailing from Morocco. <br /> Having successfully navigated my first
            experience as a front-end developer, I've honed my skills in
            crafting seamless and visually appealing User Interfaces using HTML,
            CSS, and JavaScript. I particularly thrive in the world of React,
            where I find joy in building responsive and engaging web
            applications.
            <br /> My journey doesn't stop here; I'm now eagerly seeking new
            opportunities as a front-end web developer, with a keen interest in
            working with ReactJS and NextJS. Let's collaborate to bring
            innovative and captivating digital experiences to life. Feel free to
            explore my portfolio and get in touch for exciting projects and
            collaborations!
          </p>

          <p className="resume">
            <a href="/files/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </p>
        </article>
      </section>
    </div>
  );
};

export default Home;
