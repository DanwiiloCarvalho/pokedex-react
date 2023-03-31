import "./Card.css";
export function Card({id, name, srcImage, types}) {
    return (
        <li id="" className={"card " + types[0].type.name}>
            <div className="circle">
                <img src={srcImage} alt="Pokemon image"/>
            </div>
            <div className="name-type">
                <h2><span className="id">{id}</span>. <span>{name}</span></h2>
                {/* <p>grass | poison</p> */}
                <p>{types.map(type => type.type.name).join(' | ')}</p>
            </div>
        </li>
    )
}