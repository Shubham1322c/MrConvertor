import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import propTypes from "prop-types";
import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./components/About";




function App(props) {
const [mode, setMode] = useState('light');
const [alert, setalert] = useState(null);


const toggleAlert = (message, type) => {
  setalert({
    message : message,
    type: type
  });
  setTimeout(() => {
    setalert(null);
  }, 1000);
}

const toggleMode = () => {
  if(mode === "light"){
    setMode('dark');
    document.body.style.backgroundColor = "black";

    toggleAlert("Dark Mode Is Enabled","success")

  }else{
    setMode('light');
    document.body.style.backgroundColor = "white"
    toggleAlert("Light Mode Is Enabled","success")
  }

}

const chooseMode = () => {

      document.body.style.backgroundColor = "#0C134F";
      console.log(document.getElementById("colorBtn1"));
      document.getElementsByClassName("Info").style = "color : #D4ADFC;";
     setMode("midnight");
   
}
const chooseMode2 = () => {
  
    console.log(document.getElementById("colorBtn2"));
    document.body.style.backgroundColor = "#1D267D";
    document.getElementsByClassName("Info").style = "color : #D4ADFC;";   
    setMode("midnight");
}

const chooseMode3 = () => {
    
    document.body.style.backgroundColor = "#393646";
    console.log(document.getElementById("colorBtn3"));
    document.getElementsByClassName("Info").style = "color : #D4ADFC;";
    setMode("midnight");
}

  return (
    <>
  <Router>

    <Navbar mode={mode} toggleMode={toggleMode} alert={toggleAlert} chooseMode={chooseMode} chooseMode2={chooseMode2} chooseMode3={chooseMode3} />
    <Alert alert={alert}/>
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} toggleMode={toggleMode} alert={toggleAlert}/>}/>
          <Route exact path="/about" element={<About/>}/>
           
        </Routes>
  </Router>

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
