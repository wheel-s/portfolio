import React from 'react'
import { useState } from 'react'
import Sidebar from './side-bar'
import MobileNav from './mobileNav'
import menu from '../images/menu.png'
import more from '../images/road.png'



import logo from '../images/logo.png'

const Layout = () => {

  const url = logo || 'image'
    const [IsOpen, setIsOpen] = useState(false)
    function openMenu(){
      
      setIsOpen(true)
    }
    
  function closeMenu(){
    
    setIsOpen(false)
}


    const loggedIn = {firstName:'Adran', lastName:'JSM'}

  return (
    <div >
      <div className='sidebar'>
      <Sidebar user={loggedIn} />
      </div>
    

        <div className='mobilenav'>
          
          <div className='nav'>
            
          <img src={menu} alt={'yes'} width={29} height={29} className='navbar' onClick={openMenu}></img>
            <p className='nam'>my-portfolio</p>
            <div>
          
           
             
              <p className='veri'></p>
             <img src={more} alt={'yes'} width={65} height={65} className='logos'></img>
                        
           </div>
           
          </div>
         
        </div>
        
           {IsOpen &&  <MobileNav onCancel={closeMenu}/> }
            
    </div>
  )
}

export default Layout