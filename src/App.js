import React from 'react';
import './App.css'
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Header from './component/Header/Header';
import Home from './component/Home/Home';
import RecentWork from './component/RecentWork/RecentWork';
import Skill from './component/Skilll/Skill';
import {Routes,Route } from 'react-router-dom';
import RecentWorkDetails from './component/RecentWork/RecentWorkDetails';



const App = () => {
  return (
    <div>

    <Header></Header>
    <div >

    <Routes>
    <Route path='/' element={   <div className="main"> <Home></Home><About></About><Skill></Skill><RecentWork></RecentWork><Contact></Contact></div> } />
   <Route path='/details/:id' element={<RecentWorkDetails></RecentWorkDetails>} />
  
    </Routes>
    
    </div>

    </div>
  );
};

export default App;