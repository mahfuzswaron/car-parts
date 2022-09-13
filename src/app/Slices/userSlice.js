import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (user) => {
        const res = await axios.get(`https://car-parts-server.herokuapp.com/users/${user.email}`);
        // console.log(res.data)
        return res.data;
    }
);

const userSlice = createSlice({
    name: "userSlice",
    initialState: {
        isLoading: false,
        user: {},
        error: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = null;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.user = {};
            state.error = action.error.message;
        });
    },
});

export default userSlice.reducer