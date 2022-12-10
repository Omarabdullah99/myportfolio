import React from 'react';
import './App.css'
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import RecentWork from './component/RecentWork/RecentWork';
import Skill from './component/Skilll/Skill';


const App = () => {
  return (
    <div>
    <Header></Header>
    <div className="main">
    <Home></Home>
    <About></About>
    <Skill></Skill>
    <RecentWork></RecentWork>
    <Contact></Contact>
    
    </div>

    </div>
  );
};

export default App;