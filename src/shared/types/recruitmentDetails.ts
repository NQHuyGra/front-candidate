import { Job } from './job';
export type RecruitmentDetails = {
    id: string
    job_id: string
    profile_id: string
    created_at: Date
    updated_at: Date
    application_date: Date
    status: number
    viewed: boolean
    feedback: string
}

export type AppliedJobResponse = {
    recruitmentDetails: RecruitmentDetails
    job: Job
}