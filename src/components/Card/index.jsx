import "./Card.css";
export function Card() {
    return (
        <li id="" className="card grass">
            <div className="circle">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="Pokemon image"/>
            </div>
            <div className="name-type">
                <h2><span className="id">1</span>. <span>Bulbasaur</span></h2>
                <p>grass | poison</p>
            </div>
        </li>
    )
}