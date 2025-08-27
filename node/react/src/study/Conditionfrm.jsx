import React, { use, useState } from 'react'
import { Form } from 'react-bootstrap'

function Conditionfrm() {
    let[name,setName]=useState("")
    let[error,setError]=useState("")
    function hndlchg(e){
      setName(e.target.value)
      if(e.target.value.length <3){
        setError("name must be atleasr 3 character")
      }

    }
    function hndlsumbit(e){
      e.preventDefault()
      if(name.length>=3){
        alert(`hello ${name}`)
      }

    }
  return (
    
    <div>
        <form onSubmit={hndlsumbit}>
        <input type="text" value={name} onChange={hndlchg} />
        {error && <p style={{color:"red"}}>{error}</p>}
        <button type="submit">submit</button>
    

      </form>
    </div>
  )
}

export default Conditionfrm