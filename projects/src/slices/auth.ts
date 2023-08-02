import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/auth";
import { signup } from "../actions/auth";


const initialState = {
    users: [],
    isLoading: false,
    error: "",
} as { users: IUser[], isLoading: boolean, error: string };


const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        //signup

        builder.addCase(signup.pending, (state) => {
            state.isLoading = true;
            state.error = ""
        })
        builder.addCase(signup.fulfilled, (state, action) => {
            state.isLoading = false;
            if (state.users.find((user) => user.email === action.payload.email)) {
                // Email đã tồn tại trong danh sách users
                state.error = 'Email đã tồn tại';
            } else {
                state.users.push(action.payload);
            }
        })
        builder.addCase(signup.rejected, (state) => {
            state.isLoading = false;
            state.error = "signup failed"
        })

    }
});
export const authReducer = authSlice.reducer;