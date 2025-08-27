import React from 'react'

function Stock() {
    const item=[
        {id:1, name:"dosa" ,available :true},
        {id:2, name:"idaly" ,available :true},
        {id:3, name:"masaladosa" ,available :false}
    ]
  return (
   
        <ul>
        {idtem.map((value)=>(
            <li key={value.id}> {value.name} - {value.available ? "available" : "out of stock"}</li>
        ))}
</ul>


  )
}

export default Stock