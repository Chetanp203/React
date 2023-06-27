import { useEffect, useState } from "react";

function Type2UseEffect(){
    const [counter, setCounter]= useState(0);

    useEffect(() => {
        console.log("Inside type-2 UseEffect");
    },[])
    function addCounter(){
        setCounter((preValue) => preValue + 1)
    }
    return (
        <div>
            <h1>Type-2 UseEffect</h1>
            <h1>{counter}</h1>
            <button onClick={addCounter}>+ Add one</button>
        </div>
    )
}
export default Type2UseEffect;