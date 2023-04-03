import "./Modal.css";
export function Modal({handleModal}) {
    return (
        <section className="modal">
            <div className="modal-container">
                <div className="header">
                    <h2>Bulbasaur</h2>
                    <span className="number">Nº 1</span>
                </div>
                <span id="close" className="material-symbols-outlined" onClick={handleModal}>close</span>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg" alt="" />
                <p>LA strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON.</p>
            </div>
        </section>
    )
}