import React, {useRef} from 'react'
import css from './Join.css'
import emailjs from '@emailjs/browser'


const Join = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_acrp15b', 'service_acrp15b', form.current, 'ZCVgk9nRcAIhbu0HM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="Join">
      <div className="left-j">
        <hr />
        <div>
          <span className='strokes-text'>READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className='strokes-text'>WITH US?</span>
        </div>
      </div>

      <div className="right-j">

        <form ref={form}  className='email-container' onSubmit={sendEmail}>
          <input type="email" name='user_email' placeholder='Enter your Email address' />
          <button className='btn btn-j'>Join Now</button>
        </form>
      </div>
    </div>
  )
}

export default Join
