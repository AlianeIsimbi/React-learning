import React, {useState} from "react"
function Buttons(){
    const[count, setCount] = useState(0);
    const increase = ()=>{
        setCount(count + 1)
    }
    const decrease = ()=>{
        if(count > 0){
            setCount(count - 1)
        }
    }
    const reset = ()=>{
        setCount(0);
    }
    return(
        <>
        <p className="displayCount">{count}</p>
        <button className="increaseBtn" onClick={increase}>Increase</button>
        <button className="decreaseBtn" onClick={decrease}>Decrease</button>
        <button className="resetBtn" onClick={reset}> Reset</button>
        </>
    )
}
export default Buttons;