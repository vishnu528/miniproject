export default function Event(){
    function greet(){
        alert("hi,welcome")
    }
    return(
        <>
        <button className="btn bg-primary text-white m-3" onClick={greet}>click here</button>
        </>
    )
}