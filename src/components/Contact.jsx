import React from 'react'

const Contact = () => {
  return (
	<div className='contact' id='contact'>
    <div className="contact-center container">
      <section className="section-title">
          <h1>Get in touch!</h1>
          <div className="line"></div>
      </section>
      <div className="form-container">
      <form action="" className='form'>
          <p>Although I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
          <input type="text" id='name' placeholder='Name'  required/>
          <input type="email" id='email' placeholder='Email'  required/>
          <textarea id='message' rows='4' placeholder='How can i help you!'  required></textarea>
          <button className="submit" type='submit'>Send</button>
      </form>
      </div>
    </div>
  </div>
  )
}

export default Contact