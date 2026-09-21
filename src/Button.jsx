function Button(){
    
    const handleclick = () => console.log("Buttons was clicked");

    const handleclick2 = (name) => console.log(`stop it ${name}`);

    return(
        <button onClick={() => handleclick2("AAYUSH")}>
            Click me !!!!
        </button>
    );
}

export default Button