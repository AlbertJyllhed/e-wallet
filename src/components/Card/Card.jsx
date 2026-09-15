import vendorDetails from "../../utils/vendorDetails";
import lightChip from "../../assets/chip-light.svg";
import darkChip from "../../assets/chip-dark.svg";
import "./Card.css";

function Card({ card, onActivate }) {
    const vendor = vendorDetails[card?.vendor] || vendorDetails.default;
    const displayCard = {
        number: card?.number || "XXXX XXXX XXXX XXXX",
        holder: card?.holder || "",
        validity: card?.validity || "XX/XX",
    };

    return (
        <div
            className={`card ${vendor.dark ? "dark" : ""}`}
            style={{ backgroundColor: vendor.color }}
            onClick={onActivate ? () => onActivate(card) : undefined}
        >
            <div className="card-images">
                <img src={vendor.dark ? lightChip : darkChip} alt="card-chip" />
                {vendor.image && (
                    <img
                        className="card-vendor"
                        src={vendor.image}
                        alt={`card-vendor: ${card.vendor}`}
                    />
                )}
            </div>
            <h2>{displayCard.number}</h2>
            <div className="card-details">
                <div>
                    <label>CARDHOLDER NAME</label>
                    <p>{displayCard.holder}</p>
                </div>
                <div>
                    <label>VALID THRU</label>
                    <p>{displayCard.validity}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
