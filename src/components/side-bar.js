import React from 'react'
import {NavLink} from 'react-router-dom'
import side from './side-bar.module.css'

import more from '../images/logo.png'
import homes from '../images/home.png'
import banks from '../images/game.png'




const Sidebar = ({user}) => {
  const pathName = window.location.pathname
 const  isActive = pathName === '/' || pathName.startsWith(`/`)
   const home='/'
   const game = '/games'
 
  
  

  return (
    <div className={side.bar}>
      <div className={side.section}>
        <div className={side.begin}>
      <img src={more} width={65} height={64} className={side.img} alt={'yes'}></img>
      <h2 className={side.name}>George</h2>
     </div>
      </div>
      <div className={('links' , {'active':isActive})} >

        <div className={side.home } >
           
            <NavLink to={home} className={side.homelink}>
            <img src={homes} alt={'yes'} className={side.homeimg} width={28}></img>
              Home
             </NavLink>
           </div> 
       
     
         <div className={side.banks}>
          
          <NavLink to={game} className={side.banklink} >
          <img src={banks} alt={'yes'} className={side.bank} width={24} ></img>
            Contact me
            </NavLink>
           </div>
       
           
    
          
      </div>

      

    </div>
  )
}

export default Sidebar