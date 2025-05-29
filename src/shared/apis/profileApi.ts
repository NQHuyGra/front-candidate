import { ApiResponse, Meta } from "../types/apiResponse";
import { Profile } from "../types/profile";
import http from "../utils/http";

export const createProfile = async (profile: Profile) => {
    const { data } = await http.post<ApiResponse<Profile>>( "/profile/create", profile)
    return data
}

export const updateProfile = async (id: string, profile: Profile) => {
    const { data } = await http.put<ApiResponse<Profile>>(`/profile/update/${id}`, profile)
    return data
}

export const deleteProfile = async (id: string) => {
    const { data } = await http.delete<ApiResponse<Boolean>>(`/profile/delete/${id}`)
    return data
}

export const getProfile = async (id: string) => {
    const { data } = await http.get<ApiResponse<Profile>>(`/profile/${id}`)
    return data
}

export const getProfiles = async (
    params: {
                page: number,
                size: number,
                sortBy: string,
                direction: string
            },
) => {
    const { data } = await http.get<ApiResponse<Meta & {
        profiles: Profile[]
    }>>('/profile/my-profiles', { params })

    return data
}