import React, { useMemo, useState } from 'react'

const UseMemo = () => {

    const[todos, setTodos] = useState(["Eat Lunch", "Do assignment"]);
    
    const [counter, setCounter] = useState(0);

    const Number = useMemo(() =>{ return expensiveCalculation(counter)},[counter])

    function addtodo(){
        setTodos([...todos,"New todo"])
    }


  return (
    <div>
        <h1>Expensive calculation: {Number}</h1>
        <h1>Count: {counter}</h1>
        <button onClick={() => setCounter((prevValue) => prevValue + 1)}>+Add</button>
        <h1>Todos:</h1>
        {todos.map((todo,i) =>(
            <h3 key={i}>{todo}</h3>
        ))}
        <button onClick={addtodo}>Add todo</button>

    </div>
  )
}

const expensiveCalculation =(number) => {
    console.log("Inside expensive calculation...")
    for(var i=0; i < 100000000; i++){
    number= number + 1;
}
return number;
}

export default UseMemo