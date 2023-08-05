import { createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/auth";
import { signin, signup } from "../actions/auth";


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
                state.error = 'Email đã tồn tại';
            } else {
                state.users.push(action.payload);
            }
        })
        builder.addCase(signup.rejected, (state) => {
            state.isLoading = false;
            state.error = "signup failed"
        })

        //signin
        builder.addCase(signin.pending, (state) => {
            state.isLoading = true;
            state.error = ""
        })
        builder.addCase(signin.fulfilled, (state, action) => {
            state.isLoading = false;
            if (state.users.find((user) => user !== action.payload)) {
                state.error = 'Thông tin tài khoản hoặc mật khẩu không chính sác !';
            } else {
                state.users.push(action.payload);
            }
        })
        builder.addCase(signin.rejected, (state) => {
            state.isLoading = false;
            state.error = "signin failed";
        })
    }
});
export const authReducer = authSlice.reducer;