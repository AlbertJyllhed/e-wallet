import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null,
};

const cardSlice = createSlice({
    name: "activeCard",
    initialState,
    reducers: {
        setActiveCard: (state, action) => {
            state.value = action.payload;
        },
    },
});

export const { setActiveCard } = cardSlice.actions;
export default cardSlice.reducer;
