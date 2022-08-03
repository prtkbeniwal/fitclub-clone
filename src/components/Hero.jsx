import React from 'react'
import Header from './Header'
import './Hero.css'
import heart from '../assets/heart.png'
import hero_image from '../assets/hero_image.png'
import hero_image_back from '../assets/hero_image_back.png'
import calories from '../assets/calories.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter'

const Hero = () => {
     
     const transition = {type:'spring',duration:3}


  return (
    <div className='hero'>
     <div className="blur hero-blur"></div>
     <div className="left-h">
          <Header/>
          <div className='the-best-add'>
               <motion.div
                    initial={{left:'238px'}}
                    whileInView={{left:'8px'}}
                    transition={{...transition,type:'tween'}}               
               ></motion.div>
               <span>THE BEST FITNESS CLUB IN THE TOWN</span>
          </div>
          <div className='hero-text'>
               <div>
                    <span className='stroke-text'>SHAPE </span><span>YOUR</span>
               </div>
               <div>IDEAL BODY</div>
               <div>
                    In here we will help you to shape and build your ideal body and live up your life to fullest
               </div>
          </div>
          <div className='figures'>
               <div>
                    <span><NumberCounter end={140} start={100} delay='4' preFix='+'/></span>
                    <span>EXPERT COACHES</span>
               </div>
               <div>
                    <span><NumberCounter end={978} start={875} delay='4' preFix='+'/></span>
                    <span>MEMBERS JOINED</span>
               </div>
               <div>
                    <span><NumberCounter end={50} start={25} delay='4' preFix='+'/></span>
                    <span>FITNESS PROGRAMS</span>
               </div>
          </div>
          <div className="hero-buttons">
               <button className='btn'>Get Started</button>
               <button className='btn'>Learn More</button>
          </div>
     </div>

     <div className="right-h">
          <button className='btn'>Join Now</button>
          
          <motion.div
            initial={{right:'-1rem'}}
            whileInView={{right:'4rem'}}
            transition={transition}            
            className="heart"
          >
               <img src={heart} alt="" />
               <span>Heart Rate</span>
               <span>116 bpm</span>
          </motion.div>

          <div>
               <img className='hero-image' src={hero_image} alt='' />
               <motion.img
                 initial={{right:'11rem'}}
                 whileInView={{right:'20rem'}}
                 transition={transition}   
                 className='hero-image-back'
                 src={hero_image_back}
                 alt=''
               />
          </div>

          <motion.div
            initial={{right:'37rem'}}
            whileInView={{right:'28rem'}}
            transition={transition}   
            className="calory-card"
          >
               <img src={calories} alt="" />
               <div className='calory-span'>
                    <span>Calories Burned</span>
                    <span>220 kCal</span>
               </div>
          </motion.div>
     </div>
    </div>
  )
}

export default Hero


