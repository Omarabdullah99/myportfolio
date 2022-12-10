import React from "react";
import { GrHtml5 } from "react-icons/gr";
import {HiCheck } from "react-icons/hi";

const FrontEnd = () => {
  return (
    <div className="skills_content">
      <h3 className="skills_title">Frontend devloper</h3>

      <div className="skills_box">
        <div className="skills_group">

          <div className="skills_data">
          <i className="skil_icon"> <HiCheck></HiCheck> </i>
          <div>
          <h3 className="skills_name">HTML5</h3>
          <span className="skills_level">Advance</span>
          </div>
          </div>

          <div className="skills_data">
          <i className="skil_icon"> <HiCheck></HiCheck>  </i>
          <div>
          <h3 className="skills_name">CSS</h3>
          <span className="skills_level">Advance</span>
          </div>
          </div>

          <div className="skills_data">
          <i className="skil_icon"> <HiCheck></HiCheck> </i>
          <div>
          <h3 className="skills_name">Tailwind</h3>
          <span className="skills_level">Advance</span>
          </div>
          </div>

          <div className="skills_data">
          <i className="skil_icon"> <HiCheck></HiCheck> </i>
          <div>
          <h3 className="skills_name">Bootstrap</h3>
          <span className="skills_level">Advance</span>
          </div>
          </div>

          </div>


          <div className="skills_group">



          <div className="skills_data">
          <i className="skil_icon"> <GrHtml5></GrHtml5> </i>
          <div>
          <h3 className="skills_name">JavaScript</h3>
          <span className="skills_level">Intermediate</span>
          </div>
          </div>

          <div className="skills_data">
          <i className="skil_icon"> <GrHtml5></GrHtml5> </i>
          <div>
          <h3 className="skills_name">React</h3>
          <span className="skills_level">Advance</span>
          </div>
          </div>

          <div className="skills_data">
          <i className="skil_icon"> <GrHtml5></GrHtml5> </i>
          <div>
          <h3 className="skills_name">Git</h3>
          <span className="skills_level">Intermediate</span>
          </div>
          </div>

          </div>

          


        
      </div>
    </div>
  );
};

export default FrontEnd;
