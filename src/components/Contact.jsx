import React,{useRef} from 'react'
import emailjs from '@emailjs/browser';
// init("fKA8pJJpN9Fvvwlrr");

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_ekri5uo', 'template_43fc65f', form.current, 'fKA8pJJpN9Fvvwlrr')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
      e.target.reset();
    };

  return (
	<div className='contact' id='contact'>
    <div className="contact-center container">
      <section className="section-title">
          <h1>Get in touch!</h1>
          <div className="line"></div>
      </section>
      <div className="form-container">
      <form className='form' ref={form} onSubmit={sendEmail}>
          <p>I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
          <input type="text" id='name' name='name' placeholder='Name'  required/>
          <input type="text" id='subject' name='subject' placeholder='Subject'  required/>
          <input type="email" id='email' name='email' placeholder='Email'  required/>
          <textarea id='message' rows='4' name='message' placeholder='How can i help you!'  required></textarea>
          <button className="submit" type='submit'>Send</button>
      </form>
      </div>
    </div>
  </div>
  )
}

export default Contact