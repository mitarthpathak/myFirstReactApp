import React, {use, useState} from "react";

function MyComponent(){

    //array destructering
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(true);
    const [inc, addCounter] = useState(0);
    

    const updateName = () => {
        setName("Mitarth");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmploymentStatus = () => {
        setIsEmployed(!isEmployed);
    }

    const addCounterButton = () => {
        addCounter(inc + 1);
    }
    const minCounterButton = () => {
        addCounter(inc - 1);
    }
    const setZeroButton = () => {
        addCounter(0);
    }

    function handleNameChange(event){
        setName(event.target.value);
    }

    

    return(
        <div>
            <p>Name : {name}</p>
            <input value={name} onChange={handleNameChange}></input>
            <p>Age : {age}</p>
            <button onClick={incrementAge}>Set Age</button>
            <p>IsEmployed:  {isEmployed ? "yes" : "No"}</p>
            <button onClick={toggleEmploymentStatus}>Change the Emoployment</button>
            <h1><cent>COUNTER</cent></h1>
            <p>counter : {inc}</p>
            <button onClick={addCounterButton}>+</button>
            <button onClick={minCounterButton}>-</button>
            <button onClick={setZeroButton}> Reset</button>



        </div>
    )
}

export default MyComponent