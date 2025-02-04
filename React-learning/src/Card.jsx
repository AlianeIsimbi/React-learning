import cat from "./assets/cat.png"

function Card(){
    return(
        <div className="card">
            <img className="card-picture" alt="A picture of a cat" src={cat} />
            <h1> A cute cat</h1>
            <p> A cat sleeping on a comfortable pillow</p>
        </div>

    );
}
export default Card;