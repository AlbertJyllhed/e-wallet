import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cards: [],
};

/*
Jag valde att endast spara listan på kort här,
det räckte med ett vanligt React state för activeCard 
eftersom att den endast används i Home sidan och dess egna komponenter.
Kortlistan var dock nödvändig att spara med redux då den används i både 
CardForm och CardStack komponenterna som ligger i två helt åtskilda sidor.
*/
const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addCard: (state, action) => {
            state.cards.push(action.payload);
        },
    },
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
