
import React, { useState } from 'react';

export default function Text(props) {
    const click=()=>{
        console.log("button is clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext)
       
      
    }
    const click1=()=>{
      console.log("button is clicked"+text);
      let newtext=text.toLowerCase();
      setText(newtext)
  } 
   const clear=()=>{
    let newtext=' '
    setText(newtext)
}
const copy=()=>{
  let text=document.getElementById("exampleFormControlTextarea1")
  text.select()
  navigator.clipboard.writeText(text.value)
  
}
    const handleOnChange=(event)=>{
        console.log("onchange")
        setText(event.target.value)
    }
   
    const [text, setText] = useState('');
   
  return (
    <>
   <div className='container' style={{color: props.mode==='dark'?'white':'black'}}> 
       <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleOnChange}   rows="8"></textarea>
</div>
<button className="btn btn-primary"  onClick={click}>Convert to UpperCase</button>
<button className="btn btn-primary mx-2" onClick={click1}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={clear}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={copy}>Copy Text</button>
</div>
<div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
     <h2>Your Text Details :</h2> 
     <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <p>{0.008 * text.split(" ").length} Minutes read</p>
     <h2>Text Summary :</h2>
    <p>{text}</p>
     
   </div>
    </>
  )
}
