import { useState } from "react";
import { useNavigate } from "react-router";

import Top from "../../components/Top/Top";
import Card from "../../components/Card/Card";
import CardStack from "../../components/CardStack/CardStack";

function Home() {
    const [activeCard, setActiveCard] = useState(null);

    const navigate = useNavigate();

    return (
        <main>
            <div className="page-top">
                <Top title="E-WALLET" subtitle="ACTIVE CARD" />
                <Card card={activeCard} onActivate={() => {}} />
            </div>
            <CardStack onSetActive={setActiveCard} />
            <button onClick={() => navigate("/addcard")}>ADD A NEW CARD</button>
        </main>
    );
}

export default Home;
