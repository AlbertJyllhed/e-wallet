import "./Card.css";

function Card({ card, onActivate }) {
    return (
        <div className="card" onClick={() => onActivate(card)}>
            <img src={card.vendor} alt={`card-vendor: ${card.vendor}`} />
            <h2>{card.number}</h2>
            <p>{card.holder}</p>
            <p>{card.validity}</p>
        </div>
    );
}

export default Card;
