import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice"
import authModalReducer from "./authModalSlice"
import applicationFormReducer from "./applicationFormSlice"
import savedJobReducer from "./savedJobSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        authModal: authModalReducer,
        applicationForm: applicationFormReducer,
        savedJob: savedJobReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch