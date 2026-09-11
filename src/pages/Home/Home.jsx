import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";

import Top from "../../components/Top/Top";
import Card from "../../components/Card/Card";
import CardStack from "../../components/CardStack/CardStack";

function Home() {
    const activeCard = useSelector((state) => state.value);
    const [cards, setCards] = useState([]);

    const navigate = useNavigate();

    return (
        <main>
            <Top title="E-Wallet" subtitle="Active Card" />
            <Card card={activeCard} onActivate={() => {}} />
            <CardStack cards={cards} />
            <button onClick={() => navigate("/addcard")}>Add a New Card</button>
        </main>
    );
}

export default Home;
