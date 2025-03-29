import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "./store"
import { getSavedJobs, deleteSavedJobs, addSavedJob, removeSavedJob } from "../utils/storageUtil"

const savedJobs = getSavedJobs()

export type SavedJobStateType = {
    savedJobs: string[]
}

const initialState: SavedJobStateType = {
    savedJobs: savedJobs
}

const savedJobSlice = createSlice({
    name: "savedJob",
    initialState,
    reducers: {
        savedJob: (state, action: PayloadAction<string>) => {
            state.savedJobs.push(action.payload)
            addSavedJob(action.payload)
        },
        cancelSavedJob: (state, action: PayloadAction<string>) => {
            state.savedJobs = state.savedJobs.filter(job => job !== action.payload)
            removeSavedJob(action.payload)
        },
        clearSavedJobs: (state) => {
            state.savedJobs = []
            deleteSavedJobs()
        }
    }
})

export const { savedJob, cancelSavedJob, clearSavedJobs } = savedJobSlice.actions
export const savedJobsSelector = (state: RootState) => state.savedJob
export default savedJobSlice.reducer