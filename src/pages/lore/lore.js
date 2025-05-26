import React from 'react'
import lore from './lore.module.css'
import Layout from '../../components/layout'





const Lore = () => {
  return (
    <div className='wrapper'>
         <div> <Layout/></div>
        <div className={lore.header}>
          <div className={lore.roadmap}>
            
           <div className={lore.flex}>
            <div className={lore.card1}>
              <p> A dynamic web developer/ engineer</p>
              
              </div>
            <div className={lore.card2}><p>passionate about creating engaging applications with user-friendly interactions</p></div>

            </div>
            <div className={lore.flex}>
            <div className={lore.card3}><p>
              Languages  
                  <li> JavaScript(ES6+), HTML5, CSS3</li>
                     <li>Java, Java-Fx</li>
                
              </p></div>
            <div className={lore.card4}><p>
                 Front-end Frameworks  
                  <li> React.js, Next.js</li>
                   
              
              </p></div>
            </div>
            <div className={lore.flex}>
            <div className={lore.card5}><p>
                 Back-end Technologies
                  <li> Node.js, Express.js</li>
                 
              </p></div>
            <div className={lore.card6}><p>
                Databases
                <li>MySQL, Mongodb </li>
                <li> PostgresSQL, Firebase </li>
              </p></div>
            </div>
            <div className={lore.flex}>
            <div className={lore.card8}><p>
                Hosting(cloud)
                   <li>aws, Hostinger, render </li>
            
              </p></div>
           

            </div>
            <div className={lore.flex}>
            <div className={lore.card9}>
              <p>Work Experience</p>
              <li>Junior Web developer | Webzig</li>
                Also worked on sevral personal applications clone
                e.g pintrest, jumia 
            </div>
             <div className={lore.card7}><p>
              
                I actively keep up to date with the latest developments and best practices, seeking opportunities to expand skills sets and 
                explore emerging technologies in web development landscape.
              </p></div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Lore
