import { Route, Routes } from "react-router";
import "./App.css";

import Home from "./pages/Home/Home";
import AddCard from "./pages/AddCard/AddCard";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/addcard" element={<AddCard />} />
        </Routes>
    );
}

export default App;
