import bitcoinVendor from "/src/assets/vendor-bitcoin.svg";
import blockchainVendor from "/src/assets/vendor-blockchain.svg";
import evilVendor from "/src/assets/vendor-evil.svg";
import ninjaVendor from "/src/assets/vendor-ninja.svg";

const vendorDetails = {
    bitcoin: { color: "var(--bitcoin)", image: bitcoinVendor, dark: false },
    ninja: { color: "var(--ninja-bank)", image: ninjaVendor, dark: true },
    blockchain: {
        color: "var(--blockchain)",
        image: blockchainVendor,
        dark: true,
    },
    evil: { color: "var(--evil-corp)", image: evilVendor, dark: true },
    default: { color: "#d0d0d0", image: null, dark: false },
};

export default vendorDetails;
