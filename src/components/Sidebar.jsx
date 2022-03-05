import React from 'react'
import { links } from '../data'
import { FaTimes} from 'react-icons/fa'
import { useGlobalContext } from '../Context'

const Sidebar = () => {
  const {isSidebarOpen, closeSideBar} = useGlobalContext();
  
  return (
	<div className={`${isSidebarOpen? 'sidebar show-sidebar' : 'sidebar'}`}>
    <FaTimes className='close-icon' onClick={ closeSideBar}/>
    <ul className='side-links'>
          {links.map((link) =>{
            const {id, text, url} = link;
            return(
              <a href={url} 
              key={id}
              className='link'
              
              >{text}</a>
            )
          })}
        </ul>
  </div>
  )
}

export default Sidebar