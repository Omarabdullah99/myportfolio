import React, { useRef }  from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css'
import { GrHtml5 } from "react-icons/gr";
import { BiMessageRounded } from "react-icons/bi";

import { HiOutlineMailOpen } from "react-icons/hi";
import { BsWhatsapp,BsFacebook} from "react-icons/bs";
import contact from '../../assets/contact.webp'

const Contact = () => {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qhl90g4', 'template_bvxqsff', form.current, 'QboxwCZie8lBVPZ0Z')
      e.target.reset()
  };
    return (
        <section className='contact section' id='contact'>
        <h2 className="section_title">Get in touch</h2>
        <span className='section_subtitle'>Contact Me</span>

        <div className="contace_container w-4/5 mx-auto flex flex-col lg:flex-row justify-around">

        <div className="contact_content">
         <img className=' w-[36rem] h-[100%] object-cover' src={contact} alt="" />

        </div>

        <div className="contact_content">
        <h3 className='contact_title'>Write me your project</h3>

        <form ref={form} onSubmit={sendEmail} action="" className='contact_form w-[300px] lg:w-[360px]'>

       
        
        <div className="contact_form-div">
        <label htmlFor="" className='contact_form-tag'>Name</label>
        <input type="text" name='name' className='contact_form-input' placeholder='Insert your name' />
        </div>

        <div className="contact_form-div">
        <label htmlFor="" className='contact_form-tag'>Email</label>
        <input type="email" name='email' className='contact_form-input' placeholder='Insert your email' />
        </div>

        <div className="contact_form-div contact_form-area">
        <label htmlFor="" className='contact_form-tag'>Project</label>
        <textarea name="project" id="" cols="30" rows="10" className='contact_form-input ' placeholder='write your project'></textarea>
        </div>

        <button href="" className='button button--flex'>
            Send Message
            <i className='buttonmessage'><BiMessageRounded></BiMessageRounded></i>

            </button>

        </form>
        </div>

        </div>


        </section>
    );
};

export default Contact;