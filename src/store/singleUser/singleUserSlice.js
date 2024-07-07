import { createSlice } from "@reduxjs/toolkit";
import { fetchDeleteSingleUser, fetchGetSingleUser, fetchPostSingleUser } from "./API";

const SingleUserSlice = createSlice({
    name: "singleUser",
    initialState: {
        singleUser: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostSingleUser.fulfilled, (state, { payload }) => {
                state.singleUser[0] = payload;
            })
            .addCase(fetchGetSingleUser.fulfilled, (state, { payload }) => {
                state.singleUser = payload;
            })
            .addCase(fetchDeleteSingleUser.fulfilled, (state) => {
                state.singleUser = [];
            });
    },
});

export const SingleUserReducer = SingleUserSlice.reducer;
export const selectSingleUser = (state) => state.singleUser;
