
// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { categoryApi } from "../pages/admin/categoryApi";
import { productApi } from "../pages/admin/productApi";
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
import { detailProduct } from "../slices/detail";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth']
}
const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  detail: detailProduct,
  [productApi.reducerPath]: productApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      productApi.middleware,
      categoryApi.middleware
    )
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

