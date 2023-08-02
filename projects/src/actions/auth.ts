import { createAsyncThunk } from "@reduxjs/toolkit";
import instances from "../api";
import { SignupForm } from "../schema/auths";


export const signup = createAsyncThunk("users/signup", async (user: SignupForm) => {
    const data: SignupForm = await instances.post("/api/signup", user);
    return data;
})
export const signin = createAsyncThunk("users/signin", async (user: SignupForm) => {
    const data: SignupForm = await instances.post("/api/signin", user);
    return data;
})