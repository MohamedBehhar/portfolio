import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_kdpiou9', 'template_uplvcof', form.current, 'HUgVHHUAN5bWJ2zej')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset();
      const notification = document.querySelector('.sent-notification').classList;
      notification.add('show-sent-notification');  
      setTimeout(() => {
        notification.remove('show-sent-notification')
      }, 2000);
    };


  return (
	<div className='contact' id='contact'>
    <div className="contact-center container reveal">
      <section className="section-title">
          <h1>Get in touch!</h1>
          <div className="line"></div>
      </section>
      <div className="form-container">
      <form className='form' ref={form} onSubmit={sendEmail}>
      <p className="sent-notification">
        Email sent :D!
      </p>
          <h2>Interested in working together?</h2>
          <p>Fill out the form below with some info about your project and i will get back to you as soon as I can.
          Please allow a couple days for me to respond</p>
          <input type="text" id='name' name='name' placeholder='Name'  required/>
          <input type="text" id='subject' name='subject' placeholder='Subject'  required/>
          <input type="email" id='email' name='email' placeholder='Email'  required/>
          <textarea id='message' rows='8' name='message' placeholder='Tell me a little about your project!'  required></textarea>
            <button className="submit-btn" type='submit'>Send</button>
      </form>
      </div>
    </div>
  </div>
  )
}

export default Contact