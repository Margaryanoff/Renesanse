import { createSlice } from "@reduxjs/toolkit";
import { fetchGetAllUsers, fetchPostNewUser } from "./API";

const usersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostNewUser.fulfilled, (_, { payload }) => {
                return payload;
            })
            .addCase(fetchGetAllUsers.fulfilled, (state, { payload }) => {
                state.users = payload;
            });
    },
});

export const usersReducer = usersSlice.reducer;
export const selectUsers = (state) => state.users;
