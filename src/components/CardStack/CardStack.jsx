import { setActiveCard } from "../../reducers/cardReducer";
import { useDispatch } from "react-redux";

import Card from "../Card/Card";

function CardStack({ cards }) {
    const dispatch = useDispatch();

    if (!cards || cards.length === 0) {
        return;
    }

    return (
        <div className="card-stack">
            {cards.map((card) => (
                <Card
                    card={card}
                    onActivate={() => dispatch(setActiveCard(card))}
                />
            ))}
        </div>
    );
}

export default CardStack;
