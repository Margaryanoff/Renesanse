import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../hook/UseRequest";
const { GET, POST } = UseRequest();

export const fetchPostNewUser = createAsyncThunk(
    "users/fetchPostNewUser",
    async (payload) => {
        const result = await POST("http://localhost:8080/users", payload);
        return result;
    }
);

export const fetchGetAllUsers = createAsyncThunk("users/fetchGetAllUsers", async () => {
    const result = await GET("http://localhost:8080/users");
    return result;
});
