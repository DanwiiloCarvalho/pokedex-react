import { useState } from "react";
import { Loading } from "../Loading";
import "./Modal.css";
export function Modal({handleModal, id, name, description}) {
    const [showLoading, setShowLoading] = useState(true);

    return (
        <section className="modal">
            <div className="modal-container">
                <div className="header">
                    <h2>{name}</h2>
                    <span className="number">Nº {id}</span>
                </div>
                <span id="close" className="material-symbols-outlined" onClick={handleModal}>close</span>
                {/* <img src={id && "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + id + ".svg"}  alt={name}/> */}

                {showLoading && <Loading/>}
                {<img src={id && "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" + id + ".svg"}  alt={name} onLoad={() => setShowLoading(false)}/>}
                <p>{description && description.replace("\f", " ")}</p>
            </div>
        </section>
    )
}