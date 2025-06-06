import React, {useState} from "react"
function Order(){
    const [name, setName] = useState("Client");
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("");
 
    function handleNameChange(event){
        setName(event.target.value)
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value)
    }
    function handleCommentChange(event){
        setComment(event.target.value)
    }
    function handlePaymentChange(event){
        setPayment(event.target.value)
    }
    function handleShippingChange(event){
        setShipping(event.target.value)
    }
    

    return(
        <div className="order-form">
            <h2> Order details</h2>
            <input value={name} onChange={handleNameChange}/>
            <p> Name:{name} </p>
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <p>Quantity: {quantity}</p>
            <textarea value={comment} onChange={handleCommentChange} placeholder="Enter order instructions"/>
            <p> Comment: {comment}</p>
            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value = "Visa"> Visa</option>
                <option value = "Mastercard"> Mastercard</option>
                <option value = "Giftcard"> Giftcard</option>
            </select>
            <p> Payment: {payment}</p>
            <label>
                <input type="radio" value="Pick Up" checked = {shipping === "PickUp"} onChange={handleShippingChange}/>
                Pick Up
            </label>
            <label>
                <input type="radio" value="Delivery" checked = {shipping === "Delivery"} onChange={handleShippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>

    );
}
export default Order;