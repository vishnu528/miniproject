import React, { useState } from 'react'


function Control() {
    const[name,setName] = useState("")
    function change(e){
        setName(e.target.value)
    }
    function smit(e){
        event.preventDefault()
        alert(`hi,${name}`)
    }
  return (
    <div>
        <form onSubmit={smit}>
            <label >name: <input type="text " value={name} onChange={change} />
</label>
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default Control