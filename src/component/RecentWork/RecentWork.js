import React from 'react';
import './RecentWork.css'
import quize from '../../assets/Screenshot (568).png'
import education from '../../assets/Screenshot (569).png'
import rousiGhor from '../../assets/Screenshot (570).png'
import { Link } from 'react-router-dom';
import data from '../../assets/courseDetails.json'

const RecentWork = () => {
    console.log(data)
    
    
    return (
       <section className='work section'>
       <h2 className="section_title">My Recent Work</h2>

       <div className="work_container grid grid-cols-3 justify-center w-4/5 mx-auto gap-6 ">

      

       {
        data.map(d=>(
            <div key={d.id} className="show_project">
          <img src={d.img} alt="" className='w-72' />
          
          
          <a href="https://assignment11-b34c1.web.app/" className='work_button'>Live Link</a>
          <Link to={`/details/${d.id} `} className='work_button ml-5'>Details</Link>
       </div>
        ))
       }


       </div>
       </section>
    );
};

export default RecentWork;