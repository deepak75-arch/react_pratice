import { useEffect, useState } from "react";

function Empty_Depencency(){
    const[count,setcount]=useState(0);

    useEffect(
        ()=>{
            console.log("empty dependency is activated");
        }
    ,[]);

    return(
        <button 
        onclick={() => setcount(count+1)}>
            count
        </button>
    )

}

export default Empty_Depencency