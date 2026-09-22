import React, {use, useState} from "react";

function MyComponent(){

    //array destructering
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(true);

    const updateName = () => {
        setName("Mitarth");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmploymentStatus = () => {
        setIsEmployed(!isEmployed);
    }

    

    return(
        <div>
            <p>Name : {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age : {age}</p>
            <button onClick={incrementAge}>Set Age</button>
            <p>IsEmployed {isEmployed ? "yes" : "No"}</p>
            <button onClick={toggleEmploymentStatus}>Change the Emoployment</button>
        </div>
    )
}

export default MyComponent