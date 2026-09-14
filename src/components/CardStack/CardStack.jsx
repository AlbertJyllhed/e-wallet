import { useSelector } from "react-redux";
import Card from "../Card/Card";

function CardStack({ onSetActive }) {
    const cards = useSelector((state) => state.cards);

    if (!cards || cards.length === 0) {
        return;
    }

    return (
        <div className="card-stack">
            {cards.map((card) => (
                <Card card={card} onActivate={() => onSetActive(card)} />
            ))}
        </div>
    );
}

export default CardStack;
