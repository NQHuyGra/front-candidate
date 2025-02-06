import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"

export type AuthModalVariantType = 'LOGIN' | 'REGISTER' | 'LOGOUT'

export type AuthModalStateType = {
    variant: AuthModalVariantType,
    open: boolean
}

const initialState: AuthModalStateType = {
    variant: 'LOGIN',
    open: false
}

const authModalSlice = createSlice({
    name: 'authModal',
    initialState,
    reducers: {
        openAuthModal: (state, action: PayloadAction<AuthModalVariantType>) => {
            state.variant = action.payload
            state.open = true
        },
        closeAuthModal: (state) => {
            state.open = false
        }
    }
})

export const { openAuthModal, closeAuthModal } = authModalSlice.actions
export const authModalSelector = (state: RootState) => state.authModal
export default authModalSlice.reducer
