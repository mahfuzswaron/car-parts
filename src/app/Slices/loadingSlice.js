import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
    name: "loadingSlice",
    initialState: { loading: false },
    reducers: {
        updateLoading: (state, action) => { state.loading = action.payload },

    }
});

export const { updateLoading } = loadingSlice.actions;
export default loadingSlice.reducer;