import React from 'react'
import { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

const Join = () => {

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_n3ra3aa', 'template_bvqwx29', form.current, '96CMRFU70PPWLwImg')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    };

  return (
    <div className='joinus'>
        <div className='left-j'>
            <hr/>
            <div>
                <span className='stroke-text'>ready to</span><span> Level Up</span>
            </div>
            <div>
                <span>YOUR BODY</span><span className='stroke-text'> With Us?</span>
            </div>
        </div>

        <div className='right-j'>
            <form ref={form} className='email-box' onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your email here'></input>
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join