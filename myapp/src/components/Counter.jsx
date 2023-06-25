import { useState } from "react"

function Counter(){
    const [counter, setCounter] =useState(0);
    console.log(counter,"- counter");
    function add(){
        setCounter((prevValue)=> prevValue + 1)
    }
    function subtract(){
        setCounter((prevValue)=> prevValue - 1)
    }
    return(
        <div>
            <h2>Counter : {counter}</h2>
            <button onClick={add}>+ Add by 1</button>
            <button onClick={subtract}>- Subtract by 1</button>
        </div>
    )
}
export default Counter