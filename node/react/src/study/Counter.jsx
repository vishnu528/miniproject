import React from 'react'
import { useState } from 'react'

function Counter() {
    let[count,setCount] =useState(0);
    let[num,setNum]=useState(0);
    function chng(e){
        setNum(e.target.value)
    }
    function increase(x){
        setCount(count+ Number(x) )

    }
    function decrease(x){
        setCount(count-x)

    }

  return (
    <div>
        <h1>{count}</h1><br />
        <input type="number" onChange={chng} />
        <button   onClick={() =>{increase(num)}} >increase</button>
        <button type="submit" onClick={() => {decrease(num)}}>decrease</button>


    </div>
  )
}

export default Counter