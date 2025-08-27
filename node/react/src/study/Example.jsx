import React from 'react'
import { useState } from 'react'

function Example() {
    let[text,setText]=useState("")
    function content(e){
        setText(e.target.value)
    }
    function show(e){
    event.preventDefault();
        alert(text);
        console.log(text);
        
    }
    
        
  return (
    <div>
        <form action="" onSubmit={show}>
        <input type="text"  onChange={content}/>
        <button type="submit">submit</button>
    </form>
      
        {text}
   
    </div>
  )
}

export default Example