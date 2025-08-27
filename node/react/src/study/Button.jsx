

    const arr=[`pizza`,`burger`,`noodles`]

export default function Button(){
    return(
        <>
        <ul>
            {arr.map((item,index) =><li key={index}>{item}</li>)}
        </ul>

        </>
    )
}