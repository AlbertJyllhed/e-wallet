import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "../reducers/cardReducer";

const store = configureStore({
    card: cardReducer,
});

export default store;
