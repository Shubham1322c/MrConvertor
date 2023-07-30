import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import propTypes from "prop-types";
import React , { useState } from 'react';


function App() {
const [mode, setMode] = useState('light');

const toggleMode = () => {
  if(mode === "light"){
    setMode('dark');
    document.body.style.backgroundColor = "black"
  }else{
    setMode('light');
    document.body.style.backgroundColor = "white"
  }

}

  return (
    <>

    <Navbar mode={mode} toggleMode={toggleMode}/>

    <div className="container">
      <TextForm mode={mode} toggleMode={toggleMode}/>
    </div>

    </>

  );
}
TextForm.propTypes = {
  heading : propTypes.string.isRequired,
 
}

TextForm.defaultProps = {
  heading: "Enter Your Text Here ",

}

Navbar.propTypes = { title: propTypes.string.isRequired ,
  about: propTypes.string.isRequired,
  convertors: propTypes.string.isRequired
 };


Navbar.defaultProps = {
title : "MrConvertor",
about : "AboutUs",
convertors: "Convertors",
home: "Home",
}
export default App;
