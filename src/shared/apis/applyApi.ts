import { ApiResponse, Meta } from "../types/apiResponse";
import { AppliedJobResponse, RecruitmentDetails } from "../types/recruitmentDetails";
import http from "../utils/http";

export const apply = async (data: RecruitmentDetails) => {
    const res = await http.post<ApiResponse<Boolean>>('/rds/apply', data)
    return res.data
}

export const getAppliedJobs = async (
    params: {
                page: number,
                size: number,
                sortBy: string,
                direction: string
            },
) => {
    const { data } = await http.get<ApiResponse<Meta & {
        appliedJobs: AppliedJobResponse[]
    }>>('/rds/applied-jobs', { params })

    return data
}

export const isAppliedByJobId = async (jobId: string) => {
    const { data } = await http.get<ApiResponse<Boolean>>(`/rds/application-by-job/${jobId}`)
    return data
}