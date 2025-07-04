import React from 'react'
import lore from './setup.module.css'
import contact from '../images/contact.png'
import add from '../images/about.png'
import adds from '../images/project.png'


const Lore = () => {
  return (
    <div >
       
         <section className={lore.center}>
        
          <div className={lore.roadmap}>
            
        <div >
          <div className={lore.card1}>
              <p>   Hi👋🏼  i'm an evolving  Full-Stack Web Developer/ Engineer
               passionate about creating and crafting  engaging applications with user-friendly interactions.</p>
              <p>my gaol is to MAKE impact as a software developer solving problems with simple user interface(UI) </p>
              
          </div>
          
            <div className={lore.card3}>
              
               <button className={lore.button}> projects</button>
                <div className={lore.mid}>
                  <div className={lore.flex}>
                    <div className={lore.po}>
                    <p>my First React project </p>
                    <p> 
                    <a href='https://github.com/wheel-s/-toshiro-'>View Live Demo</a>
                      </p>
                     </div>
                  </div>
                
                  <div className={lore.flex}>
                     <div className={lore.pa}>
                     <span className={lore.name}>pintrest Clone</span>
                     <p>A full-stack web application copying Pintrest's core functionalities
                        , including user authntication, image sharing, search and account management.
                        Developed to demonstrate proficiency in modern web development....
                      </p>
                    <div className={lore.tech}>
                      <span>React.js, Node.js,</span>
                      <span> Mongodb, MySQL</span>  
                    </div>
                      <a href='https://github.com/wheel-s/verizon'> View Live Demo</a>   
                     </div>
                    </div>


                    <div className={lore.flex}>
                     <div className={lore.pe}>
                      <p>AI-Powered Event planner</p>
                      <p>
                     Developed to simplify and enhance planning of family event for casual-get together ,
                     using Artificial intelligence  to organize amily gatherings into an enjoyabe experience
                     
                      </p>
                      <p>TypeScript, React.js, Springboot, PostgreSQL, mongodb</p>
                        <a href='https://github.com'>View Live Demo</a>
                      </div>

                  </div>
                  </div>
                
            </div>
              <div className={lore.card4}>
                 <h3>Skills</h3>
                 <hr></hr>
              <div className={lore.min}>
                  <p>HTML5, CSS3, TailwindCSS</p>  
                  <p>JavaScript(ES6+), TypeScript,</p>
                  <p>React.js, Next.js, vue.js, Angular</p>
              </div>

              <div className={lore.min}>
                  <p>Node.js, Express.js</p>  
                  <p>Mongodb, mySQL, PostgreSQL, Firebase</p>
                  <p>Git, Github, Docker, CI/CD Pipelines</p>
              </div>

             <div className={lore.mid}>
                   <p>Java, Java-FX, Springboot</p>
                   <p>AWS, Azure, Hostinger, render </p>
             </div>

             <div className={lore.mid}>
                <p>Troubleshooting and debugging</p>
                <p>Up-to-date practices(Always learning)</p>     
             </div>
            
          </div>
          
          
            <div className={lore.card5}>  
               <h4>Work Experience</h4>
               <p>Junior Web developer | Webzig (2022-2024)</p>
             <div className={lore.roles}>  
                <p>Developed and maitained web applications improving UI/UX efficiency</p>
                <p>Designed scalable RESTFUL APIs and database models</p>
             </div>
                
                 
              </div>
    
             <div className={lore.card7}>
              <p> Mid-level Full-Stack  web Developer </p>
              <hr></hr>
              <div className={lore.center}>
                <img src={contact} width={30} height={30} alt={'yes'}className={lore.contacct}/>
                <p>Phone: (+234)7066926765</p>
              </div>
                <div className={lore.center}>
                <img src={add} width={30} height={30} alt={'yes'} className={lore.contacct}/>
                 <p>Email: toshirou2002@gmail.com</p>
              </div>
                <div className={lore.center}>
                <img src={adds} width={30} height={30} alt={'yes'} className={lore.contacct}/>             
                    <p>Address: Abuja, Orozo </p>
              </div>     
          </div>
          </div>
        
        </div>
        </section>
    </div>
  )
}

export default Lore
