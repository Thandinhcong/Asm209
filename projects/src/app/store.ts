import { Action, ThunkAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import {
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
    persistReducer,
    persistStore,

} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { productReducer } from '../slices/product';
import { authReducer } from '../slices/auth';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['users']
}
const rootReducer = combineReducers({
    users: authReducer,
    products: productReducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

export const persistor = persistStore(store)