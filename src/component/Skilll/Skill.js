import React from 'react';
import './Skill.css'
import FrontEnd from './FrontEnd';
import BackEnd from './BackEnd';

const Skill = () => {
    return (
        <section className='skills section' id='skill'>
        <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My Technical label</span>

        <div className="skills_container flex flex-col lg:flex-row">
        <FrontEnd></FrontEnd>
        <BackEnd></BackEnd>
        </div>
        
        </section>
    );
};

export default Skill;