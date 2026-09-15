import { useState } from "react";

import Top from "../../components/Top/Top";
import Card from "../../components/Card/Card";
import CardForm from "../../components/CardForm/CardForm";

function AddCard() {
    const [cardDetails, setCardDetails] = useState({
        number: "",
        holder: "",
        validity: "",
        ccv: "",
        vendor: "",
    });

    return (
        <main>
            <div className="page-top">
                <Top title="ADD A NEW BANK CARD" subtitle="NEW CARD" />
                <Card card={cardDetails} />
            </div>
            <CardForm cardDetails={cardDetails} onChange={setCardDetails} />
            <button className="add-card-btn" form="card-form" type="submit">
                ADD CARD
            </button>
        </main>
    );
}

export default AddCard;
