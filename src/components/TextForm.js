import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpbtn = () => {
    let UpText = text.toUpperCase();
    setText(UpText);
    props.alert("Converted To Uppercase!", "success");
  };

  const handleLowbtn = () => {
    let UpText = text.toLowerCase();
    setText(UpText);
    props.alert("Converted To Lowercase!", "success");
  };

  const handleSpace = () => {
    let ClearSpace = text.split(/[ ]+/);
    setText(ClearSpace.join(" "));
    props.alert("Extra Spaces Cleared!", "success");
    
  };

  const handleCopy = () => {
    let text = document.getElementById("myText");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.alert("Text Copied!", "success");
    
  };

  const handleClear = () => {
    let ClearText = "";
    setText(ClearText);
    props.alert("Text Cleared!", "success");
    
  };
  
 

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
    <div className={`container text-${props.mode==='light'?'dark':'light'}`}>

   
      <div className={`mb-3 my-4`}>
        <h1 className="Info">{props.heading} &#128071;</h1>
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
