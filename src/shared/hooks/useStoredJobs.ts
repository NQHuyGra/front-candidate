import { savedJobsSelector } from '../toolkits/savedJobSlice';
import { savedJob, cancelSavedJob, clearSavedJobs } from '../toolkits/savedJobSlice';
import { useAppDispatch, useAppSelector } from './redux';
const useSavedJobs = () => {
    const { savedJobs } = useAppSelector(savedJobsSelector)
    const dispatch = useAppDispatch()

    return {
        savedJobs,
        saveJob: (jobId: string) => {
            dispatch(savedJob(jobId))
            savedJob(jobId)
        },
        cancelSaveJob: (jobId: string) => {
            dispatch(cancelSavedJob(jobId))
        },
        clearSavedJobs: () => {
            dispatch(clearSavedJobs())
        }
    }
}

export default useSavedJobs