import { User } from "../types/user"

const ACCESS_TOKEN_KEY = "jpt_access_token"
const USER_KEY = "jpt_user_store"

export const setToken = (token: string) => {
    localStorage.setItem(ACCESS_TOKEN_KEY, token)
}

export const getToken = (): string | null => {
    return localStorage.getItem(ACCESS_TOKEN_KEY)
}

export const deleteToken = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY)
}

export const setUser = (user: User) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export const getUser = (): User | null => {
    const userStored = localStorage.getItem(USER_KEY)
    if(!userStored) return null
    return JSON.parse(userStored) as User
}

export const deleteUser = () => {
    localStorage.removeItem(USER_KEY)
}