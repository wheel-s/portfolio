import React from 'react'



import more from '../images/road.png'
import home from '../images/home.png'

import contact from '../images/contact.png'
import project from '../images/project.png'
import logo from '../images/about.png'

const Layout = () => {

      const show = ()=>{
        const bar = document.querySelector('#bar')
         const shoe = document.querySelector('#shw')
        bar.classList.toggle('yes')
         shoe.classList.toggle('shw')
      }

        const Home =()=>{
    
           window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'

           })
        }
        const About =()=>{
          
           window.scrollTo({
            top:16000,
            left:0,
            behavior:'smooth'

           })
          }
        const Project=()=>{
    
           window.scrollTo({
            top:700,
            left:0,
            behavior:'smooth'

           })
        }

        const Contact =()=>{
    
           window.scrollTo({
            top:1000,
            left:0,
            behavior:'smooth'

           })
        }
        
  return (
    <div >
    
    

        <div className='mobilenav' id='bar'>
          
          <div className='nav'>
            

            <p className='nam'>my-portfolio</p>
            <div>
      
             <p className='veri'>map</p>
             <img src={more} alt={'yes'} width={65} height={65} className='logos' onClick={show}></img>
             <div className='bubar'>
                
             </div>
                        
           </div>
          
           
          </div>
          <div className='show' id='shw'>
           <section className='flex'>
            <div className='flax'id='home' onClick={Home}>
           <img src={home} alt={'yes'} width={30} height={30} className='img' onClick={show}></img>
               <p>Home</p>
            </div>
              <div className='flax' id='about' onClick={Contact}>
           <img src={logo} alt={'yes'} width={30} height={30} className='img' onClick={show}></img>
               <p>About</p>
            </div>

        
           </section>
               <section className='flex' onClick={Project}>
            <div className='flax'>
           <img src={project} alt={'yes'} width={30} height={30} className='img' onClick={show}></img>
               <p>projects</p>
            </div>
              <div className='flax'onClick={About}>
           <img src={contact} alt={'yes'} width={30} height={30} className='img' onClick={show}></img>
               <p>contact</p>
            </div>


           </section>
           </div>

        </div>
      
      
            
    </div>
  )
}

export default Layout