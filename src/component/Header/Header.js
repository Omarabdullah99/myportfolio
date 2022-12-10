import React from 'react';
import { useState } from 'react';
import './Header.css'

const Header = () => {
  const[activeNav,setActiveNav]=useState("#home")
    return (
       <section >
       
       <div className="navbar justify-center  ">
       <div className="navbar-start">
         <div className="dropdown">
           <label tabIndex={0} className="btn btn-ghost lg:hidden">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
           </label>
           <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
           <li><a href="#home" onClick={()=>setActiveNav('#home')}  className={activeNav==='#home'? "nav_link active-link":"nav_link"}>Home </a></li>

           <li className="nav_item">
           <a href="#about"onClick={()=>setActiveNav('#about')}  className={activeNav==='#about'? "nav_link active-link":"nav_link"}>About</a>
         </li>
  
         <li className="nav_item">
         <a href="#skill"onClick={()=>setActiveNav('#skill')}  className={activeNav==='#skill'? "nav_link active-link":"nav_link"}>Skill</a>
       </li>
  
       <li className="nav_item">
              <a href="#contact" onClick={()=>setActiveNav('#contact')}  className={activeNav==='#contact'? "nav_link active-link":"nav_link"}>Contact
              </a>
            </li>
           </ul>
         </div>
         <a className="btn btn-ghost normal-case text-xl">Omar</a>
       </div>
       <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-1">
         <li><a href="#home" onClick={()=>setActiveNav('#home')}  className={activeNav==='#home'? "nav_link active-link":"nav_link"}>Home </a></li>

         <li className="nav_item">
         <a href="#about"onClick={()=>setActiveNav('#about')}  className={activeNav==='#about'? "nav_link active-link":"nav_link"}>About</a>
       </li>

       <li className="nav_item">
       <a href="#skill"onClick={()=>setActiveNav('#skill')}  className={activeNav==='#skill'? "nav_link active-link":"nav_link"}>Skill</a>
     </li>

     <li className="nav_item">
            <a href="#contact" onClick={()=>setActiveNav('#contact')}  className={activeNav==='#contact'? "nav_link active-link":"nav_link"}>Contact
            </a>
          </li>
         </ul>
       </div>
     </div>
       </section>
    );
};

export default Header;