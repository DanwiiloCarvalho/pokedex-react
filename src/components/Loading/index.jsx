import "./Loading.css";

export function Loading() {
    return (
        <div className="loading">
            <div className="loader"></div>
            <span className="message">Aguarde...</span>
        </div>
    )
}