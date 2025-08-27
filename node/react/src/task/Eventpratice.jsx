import styled from '@emotion/styled'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function Eventpratice() {
   const [color, setColor] = useState('blue');
    function change(e){
        console.log(e.target.value)

    }
    
  const handleDoubleClick = () => {
    setColor(prevColor => (prevColor === 'black' ? 'blue' : 'black'));
  };

  return (
    <div>
        <h1>this is an sample heading</h1>
        <input type="text" onChange={change} className='border'/>
        <button type="submit" onClick={()=>{alert("button clicked")}}>submit</button>
        <p onDoubleClick={handleDoubleClick} style={{ color: color, cursor: 'pointer' }}>this is an paragraph</p>
        <button onMouseOver={()=>{console.log("hoverd")}}>hover</button>

    </div>
  )
}

export default Eventpratice