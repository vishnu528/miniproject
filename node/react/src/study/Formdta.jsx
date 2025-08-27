import React from 'react'

function Formdta() {
    const hndlesbt=(e) =>{
        e.preventDefault();
        const form =e.target
        const data = new FormData (form)
        for (let [key,value] of data.entries()){
            console.log(`${key}:${value}`)
        }

    }
  return (
    <div>
        <form action="" onSubmit={hndlesbt}>
            <input type="text" name="username"  placeholder='enter name'/>
            <input type="password" name="password"   placeholder='enter password'/>
            <button type="submit">click</button>
        </form>

    </div>
  )
}

export default Formdta