import { configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./users/usersSlice";
import { SingleUserReducer } from "./singleUser/singleUserSlice";

const store = configureStore({
    reducer: {
        users: usersReducer,
        singleUser: SingleUserReducer,
    },
});

export default store;
