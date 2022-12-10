import React from 'react';
import './RecentWork.css'
import quize from '../../assets/Screenshot (568).png'
import education from '../../assets/Screenshot (569).png'
import rousiGhor from '../../assets/Screenshot (570).png'

const RecentWork = () => {
    return (
       <section className='work section'>
       <h2 className="section_title">My Recent Work</h2>

       <div className="work_container grid grid-cols-3 justify-center w-4/5 mx-auto gap-6 ">

       <div className="show_project">
       <img src={quize} alt="" />
       <a href="https://vocal-stroopwafel-ceb062.netlify.app/" className='work_button'>Live Link</a>
       </div>

       <div className="show_project">
       <img src={education} alt="" />
       <a href="https://growup-skill.web.app/" className='work_button'>Live Link</a>
       </div>

       <div className="show_project">
       <img src={rousiGhor} alt="" />
       <a href="https://assignment11-b34c1.web.app/" className='work_button'>Live Link</a>
       </div>


       </div>
       </section>
    );
};

export default RecentWork;