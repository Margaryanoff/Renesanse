import { createAsyncThunk } from "@reduxjs/toolkit";
import { UseRequest } from "../../hook/UseRequest";
const { GET, POST, DELETE } = UseRequest();

export const fetchGetSingleUser = createAsyncThunk(
    "singleUser/fetchGetSingleUser",
    async () => {
        const result = await GET("http://localhost:8080/singleUser");
        return result;
    }
);

export const fetchPostSingleUser = createAsyncThunk(
    "singleUser/fetchPostSingleUser",
    async (payload) => {
        const result = await POST("http://localhost:8080/singleUser", payload);
        return result;
    }
);

export const fetchDeleteSingleUser = createAsyncThunk(
    "singleUser/fetchDeleteSingleUser",
    async (payload) => {
        const result = await DELETE(`http://localhost:8080/singleUser/${payload.id}`);
        return result;
    }
);
