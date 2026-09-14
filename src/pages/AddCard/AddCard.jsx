import { useNavigate } from "react-router";

import Top from "../../components/Top/Top";
import CardForm from "../../components/CardForm/CardForm";
import Card from "../../components/Card/Card";

function AddCard() {
    const navigate = useNavigate();

    const handleAddCard = () => {
        // Logic to add the new card goes here
        navigate("/");
    };

    return (
        <main>
            <div className="page-top">
                <Top title="ADD A NEW BANK CARD" subtitle="NEW CARD" />
                <Card />
            </div>
            <CardForm />
            <button
                className="add-card-btn"
                form="card-form"
                type="submit"
                onClick={handleAddCard}
            >
                ADD CARD
            </button>
        </main>
    );
}

export default AddCard;
