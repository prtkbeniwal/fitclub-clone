import React from 'react'
import './Plans.css'
import { plansData } from '../data/plansData'
import tick from '../assets/tick.png'

const Plans = () => {
  return (
    <div className='plans-container'>
      {/* <div className="blur blur-p-1"></div>
      <div className="blur blur-p-2"></div> */}
      <div className='head-plan'>
        <span className='stroke-text'>Ready to Start </span>
        <span>Your Journey </span>
        <span className='stroke-text'>Now Withus</span>
      </div>
      <div className='plan-category'>
        {plansData.map((plan,index) => (
          <div className='plan' key={index}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>$ {plan.price}</span>
            <div className='features'>
              {plan.features.map((feature,index) => (
                <div className='feature' key={index}>
                  <img src={tick} alt=''/>
                  <span key={index}>{feature}</span>
                </div>
              ))}
            </div>
            <div><span>See more benefits -&gt; </span></div>
            <button class='btn'>Join Now</button>
          </div>
        ))}          
      </div>
    </div>
  )
}

export default Plans