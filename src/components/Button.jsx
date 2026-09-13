function Button(){
    function ebuttonclick(event){
        console.log(event);
    }
    function handleclick(){
        console.log(alert("button clicked"));
    }
    return(
        <>
        
        <button onClick={handleclick}>Click me</button>
        <button onClick={ebuttonclick}>Click me</button>
        
        </>
    )
}
export default Button