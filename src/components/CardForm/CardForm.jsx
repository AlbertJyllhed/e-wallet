import { useDispatch } from "react-redux";
import { addCard } from "../../reducers/cardReducer";
import { useNavigate } from "react-router";
import "./CardForm.css";

function CardForm({ cardDetails, onChange }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleEditCard = (e) => {
        onChange({
            ...cardDetails,
            [e.target.name]: e.target.value,
        });
    };

    const handleAddCard = (e) => {
        e.preventDefault();
        dispatch(addCard(cardDetails));
        navigate("/");
    };

    return (
        <form id="card-form" className="card-form" onSubmit={handleAddCard}>
            <label>
                CARD NUMBER
                <input
                    name="number"
                    type="text"
                    placeholder="XXXX XXXX XXXX XXXX"
                    value={cardDetails.number}
                    onChange={handleEditCard}
                />
            </label>
            <label>
                CARDHOLDER NAME
                <input
                    name="holder"
                    type="text"
                    placeholder="Firstname Lastname"
                    value={cardDetails.holder}
                    onChange={handleEditCard}
                />
            </label>
            <div className="card-form-row">
                <div>
                    <label>
                        VALID THRU
                        <input
                            name="validity"
                            type="text"
                            placeholder="XX/XX"
                            value={cardDetails.validity}
                            onChange={handleEditCard}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        CCV
                        <input
                            name="ccv"
                            type="text"
                            placeholder="XXX"
                            value={cardDetails.ccv}
                            onChange={handleEditCard}
                        />
                    </label>
                </div>
            </div>
            <label>
                VENDOR
                <select
                    name="vendor"
                    value={cardDetails.vendor}
                    onChange={handleEditCard}
                >
                    <option value="">--Select vendor--</option>
                    <option value="bitcoin">Bitcoin Inc</option>
                    <option value="ninja">Ninja Bank</option>
                    <option value="blockchain">Blockchain Inc</option>
                    <option value="evil">Evil Corp</option>
                </select>
            </label>
        </form>
    );
}

export default CardForm;
