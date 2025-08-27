import React, { useState } from 'react'

function Multi() {
    let[frmdata,setFrmdata]=useState("");
    const handlchge=(e)=>{
        setFrmdata({...frmdata,[e.target.name]:e.target.value})
    }
    function hndlesbt(e){
        event.preventDefault();

        console.log(frmdata)
        alert("form submiteds")
    }

  return (
    <div>
        <form action="" onSubmit={hndlesbt}>
            <input type="text" name="username" value={frmdata.username}  onChange={handlchge} placeholder='enter name'/>
            <input type="password" name="password" value={frmdata.password}  onChange={handlchge} placeholder='enter password'/>
            <button type="submit">click</button>
        </form>
    </div>
  )
}

export default Multi