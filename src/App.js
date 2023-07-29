import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import propTypes from "prop-types";
import React from 'react'


function App() {

  return (
    <>

    <Navbar/>

    <div className="container">
      <TextForm/>
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
