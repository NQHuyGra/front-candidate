import { ApiResponse } from "../types/apiResponse"
import { Company } from "../types/company"
import http from "../utils/http"

export const fetchCompanyList = async (
    { queryKey } : {
        queryKey: 
        [
            string,
            {
                search: string,
                page: number,
                size: number,
                sortBy: string,
                direction: string
            }
        ]
    }
) => {
    const [, params] = queryKey
    try {
        const { data } = await http.get<ApiResponse<{
            companies: Company[]
        }>>('/company/list', { params })
        return data
    } catch (error) {
        throw error
    }
}

export const fetchCompanyById = async (id: string) => {
    const { data } = await http.get<ApiResponse<Company>>(`/company/id/${id}`)
    return data
}