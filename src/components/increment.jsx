function Increment() {
    let count = 0;

    function count_12(){
        count++;
        console.log(count);
    }
    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={count_12}>Increment</button>
        </>
    )
}    
    export default Increment    

    