import React, {useState} from "react"
function Fruits(){
    const [fruit, setFruit] = useState(["Apple", "Orange", "Banana"])

    function handleAddFruit(){
        const newFruit = document.getElementById("fruitInput").value;
        document.getElementById("fruitInput").value = "";
        setFruit(f => ([...f, newFruit]));
    }
    function handleRemoveFruit(index){
        setFruit(fruit.filter((__,i) => i !==index))
    }
    return(
        <>
        <h2> My list of fruits</h2>
        <ul>
            {fruit.map((fruit, index)=>
            <li key={index} onClick={()=>handleRemoveFruit(index)}>{fruit}</li>)}
        </ul>
        <input type="text" id="fruitInput" placeholder="Enter new fruit"/>
        <button onClick={handleAddFruit}>Add fruit</button>

        </>
    );
}
export default Fruits;