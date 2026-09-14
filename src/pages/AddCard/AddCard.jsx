import { useState } from "react";
import { useNavigate } from "react-router";

import Top from "../../components/Top/Top";
import CardForm from "../../components/CardForm/CardForm";
import Card from "../../components/Card/Card";

function AddCard() {
    const [cardDetails, setCardDetails] = useState({
        cardNumber: "",
        cardHolder: "",
        expiryDate: "",
        cvv: "",
    });

    const navigate = useNavigate();

    const handleAddCard = (e) => {
        e.preventDefault();
        // Logic to add the new card goes here
        navigate("/");
    };

    return (
        <main>
            <div className="page-top">
                <Top title="ADD A NEW BANK CARD" subtitle="NEW CARD" />
                <Card />
            </div>
            <CardForm onSubmit={handleAddCard} />
            <button className="add-card-btn" form="card-form" type="submit">
                ADD CARD
            </button>
        </main>
    );
}

export default AddCard;
