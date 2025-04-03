// src/app/store.ts
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { ankorApi } from "./api/ankorApi"; // Import the new API
import authReducer from "./feature/authSlice";

// Combine reducers
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  [ankorApi.reducerPath]: ankorApi.reducer, // Add the payment API reducer
  auth: authReducer,
});

// Configure Redux Persist
const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["auth"], // Only persist the auth slice
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Disable serialization checks for redux-persist
    })
      .concat(baseApi.middleware) // Add baseApi middleware
      .concat(ankorApi.middleware), // Add paymentApi middleware
});

// Export the persisted store
export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
