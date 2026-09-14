import "./CardForm.css";

function CardForm() {
    return (
        <form id="card-form" className="card-form">
            <label>CARD NUMBER</label>
            <input type="text" placeholder="XXXX XXXX XXXX XXXX" />
            <label>CARDHOLDER NAME</label>
            <input type="text" placeholder="Firstname Lastname" />
            <div className="card-form-row">
                <div>
                    <label>VALID THRU</label>
                    <input type="text" placeholder="XX / XX" />
                </div>
                <div>
                    <label>CCV</label>
                    <input type="text" placeholder="XXX" />
                </div>
            </div>
            <label>VENDOR</label>
            <select>
                <option>--Select vendor--</option>
                <option>Bitcoin Inc</option>
                <option>Ninja Bank</option>
                <option>Blockchain Inc</option>
                <option>Evil Corp</option>
            </select>
        </form>
    );
}

export default CardForm;
