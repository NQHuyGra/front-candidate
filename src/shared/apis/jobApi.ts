import { ApiResponse, Meta } from "../types/apiResponse"
import { Job, JobFilterRequest } from "../types/job"
import http from "../utils/http"

export const getJob = async (id: string) => {
    const { data } = await http.get<ApiResponse<Job>>(`/job/with-company/${id}`)
    return data
}

export const getJobs = async (
    params: {
                page: number,
                size: number,
                sortBy: string,
                direction: string
            },
    filter: JobFilterRequest
) => {
    const { data } = await http.post<ApiResponse<Meta & {
        jobs: Job[]
    }>>('/job/enable-jobs', filter, { params })

    return data
}