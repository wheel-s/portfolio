import React from 'react'

import mobile from './mobile.module.css'
import {NavLink} from 'react-router-dom'

import homes from '../images/home.png'
import banks from '../images/game.png'

import close from '../images/close.png'


const MobileNav = (props) => {



  function closeMenu(){
      props.onCancel()
      
  }

  const pathName = window.location.pathname
  const  isActive = pathName === '/' || pathName.startsWith(`/`)
    const home='/'
    const game = '/games'



  return (
    <div className={mobile.mobile}>
    <div className='close'>
      <div className={mobile.nav}>
        

        <div className={mobile.bar}>
        <img src={close} width={20} height={19} className={mobile.close} alt={'yes'} onClick={closeMenu}></img>
          
      <div className={mobile.section}>
      <h2 className={mobile.name}>George</h2>
     
     

      </div>
      <div className={('links' , {'active':isActive})}  >

        <div className={mobile.home } >
           
            <NavLink to={home} className={mobile.homelink}>
            <img src={homes} alt={'yes'} className={mobile.homeimg} width={28}></img>
              Home
             </NavLink>
           </div> 

         
         
      
     
                <div className={mobile.banks}>
          
          <NavLink to={game} className={mobile.banklink} >
          <img src={banks} alt={'yes'} className={mobile.bank} width={24} ></img>
            contact me
            </NavLink>
           </div>

    
           
           
          
      </div>
      </div>
      </div> 
      </div>
        
    </div>
  )
}

export default MobileNav