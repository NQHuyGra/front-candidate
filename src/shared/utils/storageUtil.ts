import { User } from "../types/user"

const ACCESS_TOKEN_KEY = "jpt_access_token"
const USER_KEY = "jpt_user_store"
const SAVED_JOBS_KEY = "jpt_saved_jobs"

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

export const setSavedJobs = (jobs: string[]) => {
    localStorage.setItem(SAVED_JOBS_KEY, JSON.stringify(jobs))
}

export const getSavedJobs = (): string[] => {
    const savedJobs = localStorage.getItem(SAVED_JOBS_KEY)
    if(!savedJobs) return []
    return JSON.parse(savedJobs) as string[]
}

export const deleteSavedJobs = () => {
    localStorage.removeItem(SAVED_JOBS_KEY)
}

export const addSavedJob = (jobId: string) => {
    const savedJobs = getSavedJobs()
    if(!savedJobs.includes(jobId)) {
        savedJobs.push(jobId)
        setSavedJobs(savedJobs)
    }
}

export const removeSavedJob = (jobId: string) => {
    const savedJobs = getSavedJobs()
    const updatedJobs = savedJobs.filter(job => job !== jobId)
    setSavedJobs(updatedJobs)
}