import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { User } from "../types/user"
import { deleteToken, deleteUser, getToken, getUser, setToken, setUser } from "../utils/storageUtil"
import { RootState } from "./store"

const storedUser = getUser()
const storedToken = getToken()

export type AuthStateType = {
    isAuthenticated: boolean
    user: User | null
}

const initialState: AuthStateType = {
    isAuthenticated: !!storedUser && !!storedToken,
    user: storedUser
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthentication: (
            state, 
            action: PayloadAction<{
                access_token: string
                user: User
            }>
        ) => {
            const access_token = action.payload.access_token
            const user = action.payload.user
            state.isAuthenticated = !!user && !!access_token
            state.user = user
            setToken(access_token)
            setUser(user)
        },
        setUserState: (state, action: PayloadAction<User>) => {
            state.user = action.payload
        },
        clearAuthentication: (state) => {
            state.isAuthenticated = false
            state.user = null
            deleteToken()
            deleteUser()
        }
    }
})

export const { setAuthentication, clearAuthentication, setUserState } = authSlice.actions
export const authSelector = (state: RootState) => state.auth
export default authSlice.reducer