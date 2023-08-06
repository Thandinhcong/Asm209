import { createAsyncThunk } from "@reduxjs/toolkit";
import instances from "../api";
import { SigninForm, SignupForm } from "../schema/auths";


export const signup = createAsyncThunk("users/signup", async (user: SignupForm) => {
    console.log("signup action creator called");
    const data: SignupForm = await instances.post("/api/signup", user);
    return { data };
})
export const signin = createAsyncThunk("users/signin", async (user: SigninForm) => {
    console.log("signin action creator called");
    const data: SigninForm = await instances.post("/api/signin", user);
    return data;
})