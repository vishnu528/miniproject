import { useState } from "react"
export default function List(){

    const products = [`pizza`,`Burger`,`Fries`]
    return(
        <>
        {products.map((item,index) => <li>{item}</li>)}
        </>
    )
}