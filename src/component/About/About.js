import React from "react";
import "./About.css";
import AboutImg from "../../assets/about.jpeg";
import resume from "../../assets/Omar Abdullah_KPI_CMT2.pdf";
import Info from "./Info";
import { CiViewList } from "react-icons/ci";
const About = () => {
  return (
    <section className="about section w-4/5 mx-auto" id="about">
      <h2 className="section_title">About Me</h2>
      <span className="section_subtitle">My introduction</span>

      <div className="about_container flex flex-col lg:flex-row justify-around ">
        <img src={AboutImg} alt="" className="about_img" />

        <div className="about_data">
          
          <p className="about_description">

          Hi, I am Omar Abdullah. I am a Front-End Developer. I am working with React, Node.js and MongoDB. I also have experience in developing static website using HTML, CSS and JavaScript.
          </p>
          <a download="" href={resume} className="button button-flex">
            Download Resume{" "}
         
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
