import React from 'react';
import { GrProjects } from "react-icons/gr";
import { BiSupport} from "react-icons/bi";


const Info = () => {
    return (
        <div className='about_info grid'>

        <div className="about_box">
        <i className='about_icon'><GrProjects></GrProjects></i>
        <h3 className='about_title'>Completed</h3>
        <span className='about_subtitle'>3+ Projects</span>
        </div>

        <div className="about_box">
        <i className='about_icon'><BiSupport></BiSupport></i>
        <h3 className='about_title'>Support</h3>
        <span className='about_subtitle'>24/7</span>
        </div>
            
        </div>
    );
};

export default Info;