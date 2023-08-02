import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { authReducer } from '../slices/auth';
const store = configureStore({
    reducer: {
        users: authReducer
        // counter: counterReducer
        // , products: productReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>
export default store;