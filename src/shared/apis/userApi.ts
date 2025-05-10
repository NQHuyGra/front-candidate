import { ApiResponse } from "../types/apiResponse";
import { User, UserUpdateRequest } from "../types/user";
import http from "../utils/http";

export const updateUserApi = async (value: UserUpdateRequest) => {
    const res = await http.put<ApiResponse<User>>("/identity/users/update/candidate", value)
    return res.data
}