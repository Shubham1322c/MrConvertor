import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpbtn = () => {
    let UpText = text.toUpperCase();
    setText(UpText);
  };

  const handleLowbtn = () => {
    let UpText = text.toLowerCase();
    setText(UpText);
  };

  const handleSpace = () => {
    let ClearSpace = text.split(/[ ]+/);
    setText(ClearSpace.join(" "));
  };

  const handleCopy = () => {
    let text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleClear = () => {
    let ClearText = "";
    setText(ClearText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  // let bg = document.body.style.cssText === `background-color:rgb(53, 55, 64); color: whitesmoke; `;

  // if(bg){
  //   document.getElementById("myText").style.cssText = `background-color: #6e6e80;
  //   outline: none;
  //   border: none;`;

  // }else if(bg){
  //   document.body.style = `background-color:#353740; color: whitesmoke;`;
    
  // }

  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>

   
      <div className={`mb-3 my-4`}>
        <h1>{props.heading} &#128071;</h1>
        <textarea className="form-control mb-3" id="myText" rows="8" value={text} onChange={handleOnChange}></textarea>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpbtn}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowbtn}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleSpace}>Clear Extraspace</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy To Clipboard</button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
      </div>
      <div className="Info">
        <h3>Text Information &#10024;</h3>
        <p>{text.split(".").length - 1} Sentence {text.split(" ").length - 1} Word and {text.length} Characters</p>
        <p>{0.18 * text.split(" ").length - 0.18} Minutes To Read</p>
        <h3>{text===""?"Enter Your Text In The Text Are To Preview Here!":'Preview'}&#128302;</h3>
        <p>{text}</p>
      </div>
      </div>
    </>
  );
}
