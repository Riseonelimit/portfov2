import React,{useRef} from 'react';
import {BsGithub ,BsInstagram} from 'react-icons/bs';
import emailjs from '@emailjs/browser';
import _default from '@emailjs/browser';

const Footer = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rtapxpr', 'template_m76lqug', form.current, 'VypMpjNT6uW6NaS6u')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='headbox' id='project'>
      <div className="head-content">
        <div className="abhead">    
            <h1>Contact Me!!</h1>
            <hr className='abouthr' />
         </div>
         <div className='sc-box flex-box'>
            <form ref={form} onSubmit={sendEmail}>
                <label htmlFor="text">Enter Name</label>
                <input type="text" name='from_name'/><br />
                <label htmlFor="email">Email</label>
                <input type="email" name='from_email'/><br />
                <label htmlFor="message">Write your message</label>
                <textarea  id="" cols="62" rows="10" name="message"/><br />
                <button type='submit' className='aboutbtn _2'>Send</button>
            </form>
            <div className="socials flex-box">
              <a href="https://github.com/riseonelimit" target={'_blank'}><BsGithub className="icon purple_color"/></a>
              <a href="https://www.instagram.com/dark_knightz55/" target={'_blank'}><BsInstagram className='icon purple_color'/></a>
         </div>
         </div>
         
      </div>
    </div>
  )
}

export default Footer;