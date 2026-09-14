import "./Card.css";

function Card({ card, onActivate }) {
    const displayCard = card ?? {
        number: "XXXX XXXX XXXX XXXX",
        holder: "",
        validity: "XX / XX",
    };

    return (
        <div
            className={`card${card ? "" : " disabled"}`}
            onClick={card && onActivate ? () => onActivate(card) : undefined}
        >
            <div className="card-images">
                <img src="/src/assets/chip-dark.svg" alt="card-chip" />
                {card?.vendor && (
                    <img
                        src={card.vendor}
                        alt={`card-vendor: ${card.vendor}`}
                    />
                )}
            </div>
            <h2>{displayCard.number}</h2>
            <div className="card-details">
                <div>
                    <label>CARDHOLDER NAME</label>
                    <p>{displayCard.holder}</p>
                </div>
                <div>
                    <label>VALID THRU</label>
                    <p>{displayCard.validity}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
