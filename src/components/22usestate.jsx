import {useEffect,useState} from "react";

function Button23(){
    const[count,setcount]=useState(0);

    function increment(){
        setcount(count+1)
    }

    useEffect(
        ()=>{
            console.log("UseEffect is activated")
        }
    );

    return(
        <button onClick={increment}>
            count
        </button>
    )
}

export default Button23;
