import React from 'react'

function Greet(props) {
    if(props.name=="admin"){
        return <h1>welcome back admin</h1>
    }else{
        return <h1>welcom guest</h1>
    }
 
}

export default Greet