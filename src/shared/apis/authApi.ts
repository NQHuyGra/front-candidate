import { ApiResponse } from "../types/apiResponse";
import { AuthenticatedRequest, RegisterRequest } from "../types/auth";
import { User } from "../types/user";
import http from "../utils/http";

export const loginApi = async (value: AuthenticatedRequest) => {
    const res = await http.post<ApiResponse<{
        accessToken: string
        user: User
    }>>("/identity/auth/login", value)
    return res.data
}

export const registerApi = async (value: RegisterRequest) => {
    const res = await http.post<ApiResponse<User>>("/identity/auth/sign-up/candidate", value)
    return res.data
}