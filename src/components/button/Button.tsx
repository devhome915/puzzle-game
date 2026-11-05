import "./Button.css"

export default function Button({ onClick }: { onClick: () => void }) {

    return(
        <button id="shuffle-btn" onClick={onClick}>Embaralhar peças</button>
    )
}