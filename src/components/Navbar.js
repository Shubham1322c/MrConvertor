import React from 'react'
import "../Style/Navbar.css"

export default function Navbar(props) {
 
  return (
    <>

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="nav">
    <div className="container-fluid" >
      <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="/">{props.home}</a>
          </li>
          <li className={`nav-item `}>
            <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} href="/">{props.about}</a>
          </li>
         
       
        </ul>
      
          <button className='colorBtn mx-1' id='colorBtn1' onClick={props.chooseMode}></button>
          <button className='colorBtn mx-1' id='colorBtn2' onClick={props.chooseMode2}></button>
          <button className='colorBtn me-4 mx-1' id='colorBtn3' onClick={props.chooseMode3}></button>
      
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >{props.mode==='light'?'Dark':'Light'} Mode</label>
        </div>
         
       
      </div>
    </div>
  </nav>
    </>
  );



}


