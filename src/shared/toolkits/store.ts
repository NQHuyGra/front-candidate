import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import authModalReducer from "./authModalSlice"
import applicationFormReducer from "./applicationFormSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        authModal: authModalReducer,
        applicationForm: applicationFormReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch