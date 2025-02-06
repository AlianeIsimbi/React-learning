import React, {useState} from "react"
function Input(){
    const [word, setWord] = useState("");
    const handleWordChange = (event) =>{
        setWord(event.target.value);
    }
    return(
        <>
        <input className="input-box" value={word} onChange={handleWordChange}></input>
        <p>{word}</p>
        </>

    );
}
export default Input;