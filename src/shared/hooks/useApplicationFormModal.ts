import { applicationFormSelector, closeApplicationForm, openApplicationForm } from "../toolkits/applicationFormSlice"
import { useAppDispatch, useAppSelector } from "./redux"

const useApplicationFormModal = () => {

    const { open, jobId, jobTitle } = useAppSelector(applicationFormSelector)
    const dispatch = useAppDispatch()

    return {
        open,
        jobId,
        jobTitle,
        openApplicationForm: (jobId: string, jobTitle: string) => dispatch(openApplicationForm({jobId, jobTitle})),
        closeApplicationForm: () => dispatch(closeApplicationForm())
    }
}

export default useApplicationFormModal