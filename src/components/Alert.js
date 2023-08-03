import React from 'react'

export default function Alert(props) {
  const Captalize = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    
<div style={{height:"35px"}}>

    {props.alert && <div>
      <div className={`alert alert-${props.alert.type}`} role="alert">
        <strong>{Captalize(props.alert.type)}</strong>: {props.alert.message}
    </div>
    </div>}
</div>
    
  )
}
