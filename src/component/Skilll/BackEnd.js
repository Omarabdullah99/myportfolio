import React from 'react';
import { GrHtml5 } from "react-icons/gr";
import {HiCheck } from "react-icons/hi";

const BackEnd = () => {
    return (

        <div className="skills_content">
      <h3 className="skills_title">Backend</h3>

      <div className="skills_box">
        <div className="skills_group">

          <div className="skills_data">
          <i className="skil_icon"> <HiCheck></HiCheck> </i>
          <div>
          <h3 className="skills_name">Node Js</h3>
          <span className="skills_level">Basic</span>
          </div>
          </div>


          <div className="skills_data">
          <i className="skil_icon"> <HiCheck></HiCheck> </i>
          <div>
          <h3 className="skills_name">MongoDB</h3>
          <span className="skills_level">Intermediat</span>
          </div>
          </div>

          </div>

          <div className="skills_group">



          <div className="skills_data">
          <i className="skil_icon"> <HiCheck></HiCheck></i>
          <div>
          <h3 className="skills_name">Firebase</h3>
          <span className="skills_level">Intermediat</span>
          </div>
          </div>


          <div className="skills_data">
          <i className="skil_icon"> <HiCheck></HiCheck> </i>
          <div>
          <h3 className="skills_name">JWT</h3>
          <span className="skills_level">Intermediat</span>
          </div>
          </div>


          </div>

          
        
      </div>
    </div>
        
    );
};

export default BackEnd;