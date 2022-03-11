import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'


const Socialicon = () => {
  return (
	<div className='social-icon'>
		<a href="https://www.linkedin.com/in/mohamed-behhar-332025155/" target="_blank" rel="noreferrer" >
			<BsLinkedin />
		</a>
		<a href="https://github.com/MohamedBehhar" target="_blank" rel="noreferrer" >
			<BsGithub />
		</a>
		<a href="mailto: behharmohamed18@gmail.com" >
			<MdEmail />
		</a>
		<div className="s-line"></div>
	</div>
  )
}

export default Socialicon