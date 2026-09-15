import { useSelector } from "react-redux";
import "./CardStack.css";

import Card from "../Card/Card";

function CardStack({ activeCard, onSetActive }) {
    const cards = useSelector((state) => state.cards);
    const filteredCards = cards.filter((card) => card !== activeCard);

    if (!cards || cards.length === 0) {
        return;
    }

    return (
        <div className="card-stack">
            {filteredCards.map((card) => (
                <Card
                    key={`${card.vendor}-${card.number}`}
                    card={card}
                    onActivate={() => onSetActive(card)}
                />
            ))}
        </div>
    );
}

export default CardStack;
