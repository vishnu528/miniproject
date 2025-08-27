export default function Dosa(){
    function call(name){
        alert(`you have selceted ${name}`);
    }
    return(
        <>
        <button onMouseOver={()=>{ call("masala dosa")}}>click</button>

        </>
    )
}