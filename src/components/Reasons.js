import React from "react";
import './Reasons.css';
import image1 from '../assets/image1.png'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import tick from '../assets/tick.png'
import nb from '../assets/nb.png'
import nike from '../assets/nike.png'
import adidas from '../assets/adidas.png'



function Reasons() {
     return(
          <div className="reasons">
               <div className="left-r">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
               </div>
               <div className="right-r">
                    <span>SOME REASONS</span>
                    <div>
                         <span className="stroke-text">WHY </span>
                         <span>CHOOSE US?</span>
                    </div>
                    <div className="reason-list">
                         <div>
                              <img src={tick} alt="" />
                              <span>Over 140+ Expert Coachs</span>
                         </div>
                         <div>
                              <img src={tick} alt="" />
                              <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
                         </div>
                         <div>
                              <img src={tick} alt="" />
                              <span>1 free program for new member</span>
                         </div>
                         <div>
                              <img src={tick} alt="" />
                              <span>reliable partners</span>
                         </div>                         
                    </div>
                    <div> OUR PARTNERS </div>
                    <div className="partners">
                         <img src={nb} alt="" />
                         <img src={adidas} alt="" />
                         <img src={nike} alt="" />
                         
                    </div>             
               </div>
          </div>
     )
}

export default Reasons;