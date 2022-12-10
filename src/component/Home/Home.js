import React from 'react';
import './Home.css'
import { FaThumbsUp } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { FaFacebook,FaInstagram,FaGithub } from "react-icons/fa";

const Home = () => {
    return (
        <section className='home w-4/5 mx-auto' id='home'>

        <div className='flex flex-col-reverse lg:flex-row justify-around items-center  '>
        <div className='home_data'>
        <h1 className='home_title'>Omar Abdullah <i className='home_hand'></i></h1>
        <h3 className='home_subtitle'>Front-End Web Developer</h3>
        <p className='home_description'>Front-End-Developer with some running projects. Capable of continuous
        learning from senior developers. Experience in facilitating projects from
        concept to launch. Passionate about learning and development with a desire to
        apply skills on a large development team.</p>

        <a href="" className='button button--flex'>
        Say Hello
        <i className='buttonmessage'><BiMessageRounded></BiMessageRounded></i>
        </a>

        <div className='home_social mt-3'>

        <a href="https://www.facebook.com/omarabdullah.omar.37">
        <i className='home_social-icon'><FaFacebook></FaFacebook></i>
        </a>

        <a href="https://github.com/Omarabdullah99">
        <i className='home_social-icon'><FaGithub></FaGithub></i>
        </a>

        <a href="https://www.instagram.com/omar_abdullah303/">
        <i className='home_social-icon'><FaInstagram></FaInstagram></i>
        </a>
        </div>
    </div>

    <div className="home_img"></div>

        </div>
        
        </section>
      
    );
};

export default Home;