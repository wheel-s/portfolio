import React from 'react'
import Layout from '../../components/layout'
import games from './games.module.css'
import { NavLink } from 'react-router-dom'



const Games = () => {
      return(
    <div className='wrapper'>
     
        <div><Layout/></div>
      <div className={games.wrap}>
         <div className={games.card9}>
                    
          <p>Mobile No:+2347066926765   </p>
          <p>Email Address: toshirou2002@gmial.com</p>

          <p className={games.p}> <NavLink to='/'> @Home </NavLink></p>
         </div>
         </div>
    </div>
  )
}

export default Games