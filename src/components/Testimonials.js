import React, { useState } from 'react'
import { testimonialsData } from '../data/testimonialsData'
import leftArrow from '../assets/leftArrow.png'
import rightArrow from '../assets/rightArrow.png'
import './Testimonials.css'
import { motion } from 'framer-motion'


const Testimonials = () => {

  const transition = {type:'spring',duration:3}

  const [selected,setSelected] = useState(0);
  const tLength = testimonialsData.length


  return (
  
  <div className='tmonial'>
      <div className='tmonial-left'>
        <div>Testimonials</div>
        <span className='stroke-text'>WHAT THEY</span>
        <span>SAY ABOUT US</span>
        <motion.div
          key={selected}
          initial={{opacity:0,x:-100}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:100}}
          transition={transition}
        >{testimonialsData[selected].review}</motion.div>
        <div>
          <span style={{color:"var(--orange)"}}>
            {testimonialsData[selected].name}
          </span> - {testimonialsData[selected].status}
        </div>
      </div>

      <div className='tmonial-right'>
        <motion.div
          initial={{opacity:0,x:-100}}
          transition={{...transition,duration:3}}
          whileInView={{opacity:1,x:0}}
        ></motion.div>
        <motion.div
          initial={{opacity:0,x:100}}
          transition={{...transition,duration:3}}
          whileInView={{opacity:1,x:0}}
        ></motion.div>
        <img
          key={selected}
          initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          exit={{opacity:0,x:-100}}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=''
        />
        <div className='arrows'>
          <img
            src={leftArrow}
            alt=''
            onClick={() => {
              selected===0
                ? setSelected(tLength-1)
                : setSelected(prev => prev-1);
            }}            
          />
          <img
            src={rightArrow}
            alt=''
            onClick={() => {
              selected===tLength-1
                ? setSelected(0)
                : setSelected(prev => prev+1);
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonials