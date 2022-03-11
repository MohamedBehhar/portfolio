import React from 'react'
import {FaHeartbeat} from 'react-icons/fa'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'


const Footer = () => {
  return (
	<div className='footer'>
		<div className='footer-text'>
			<p>Build with  </p>
			<FaHeartbeat className='heart'/>
			<p>   by Mohamed Behhar</p>
		</div>
		<div className='footer-icons'>
			<a href="https://www.linkedin.com/in/mohamed-behhar-332025155/" target="_blank" rel="noreferrer" >
				<BsLinkedin className='footer-icon'/>
			</a>
			<a href="https://github.com/MohamedBehhar" target="_blank" rel="noreferrer" >
				<BsGithub className='footer-icon'/>
			</a>
			<a href="mailto: behharmohamed18@gmail.com" >
				<MdEmail className='footer-icon'/>
			</a>
		</div>
	</div>
  )
}

export default Footer