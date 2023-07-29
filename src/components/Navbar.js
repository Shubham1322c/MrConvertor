import React from 'react'

export default function Navbar(props) {
 
  const handleMode = () => {
    var btn = document.getElementById("mode").innerHTML;
    console.log(btn);
    if(btn === "Dark Mode"){
      document.getElementById("mode").innerHTML = "Light Mode";
      document.getElementById("mode").className = "btn btn-light mx-4 me-3";
      document.getElementById("nav").className = "navbar-expand-lg bg-body-tertiary navbar bg-dark border-bottom border-body";
      document.getElementById("nav").setAttribute('data-bs-theme',"dark");
      document.body.style = `background-color:#353740; color: whitesmoke;`;
    }else if(btn === "Light Mode"){
      document.getElementById("mode").innerHTML = "Dark Mode";
      document.getElementById("mode").className = "btn btn-dark mx-4 me-3";
      document.getElementById("nav").className = "navbar-expand-lg bg-body-tertiary navbar navbar-light bg-light";
      document.getElementById("nav").setAttribute('data-bs-theme',"light");
      document.body.style = `background-color: #f8f9fc; color: #353740;`;
    }
  }
  return (
    <>

    <nav className="navbar navbar-expand-lg bg-body-tertiary" id="nav">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/">{props.about}</a>
          </li>
          {/* <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            {props.convertors}
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">Action</a></li>
              <li><a className="dropdown-item" href="/">Another action</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li><a className="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li> */}
       
        </ul>
        
          <button className="btn btn-dark mx-4" id="mode" onClick={handleMode}>Dark Mode</button>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
      </div>
    </div>
  </nav>
    </>
  );



}


