import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store"

export type ApplicationFormStateType = {
    open: boolean
    jobId: string
    jobTitle: string
}

const initialState: ApplicationFormStateType = {
    open: false,
    jobId: '',
    jobTitle: ''
}

const applicationFormSlice = createSlice({
    name: 'applicationForm',
    initialState,
    reducers: {
        openApplicationForm: (state, action) => {
            state.open = true
            state.jobId = action.payload.jobId
            state.jobTitle = action.payload.jobTitle
        },
        closeApplicationForm: (state) => {
            state.open = false
            state.jobId = ''
            state.jobTitle = ''
        }
    }
})

export const { openApplicationForm, closeApplicationForm } = applicationFormSlice.actions
export const applicationFormSelector = (state: RootState) => state.applicationForm

export default applicationFormSlice.reducer