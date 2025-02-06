import { authSelector, clearAuthentication, setAuthentication, setUserState } from "../toolkits/authSlice"
import { User } from "../types/user"
import { useAppDispatch, useAppSelector } from "./redux"

const useAuth = () => {

    const { isAuthenticated, user } = useAppSelector(authSelector)
    const dispatch = useAppDispatch()

    return {
        isAuthenticated,
        user,
        login: (access_token: string, user: User) => dispatch(setAuthentication({access_token, user})),
        setUser: (user: User) => dispatch(setUserState(user)),
        logout: () => dispatch(clearAuthentication()),
    }
}

export default useAuth