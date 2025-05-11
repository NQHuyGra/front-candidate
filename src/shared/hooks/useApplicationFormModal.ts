import { toast } from "react-toastify"
import { applicationFormSelector, closeApplicationForm, openApplicationForm } from "../toolkits/applicationFormSlice"
import { useAppDispatch, useAppSelector } from "./redux"
import useAuth from "./useAuth"
import useAuthModal from "./useAuthModal"

const useApplicationFormModal = () => {

    const { open, jobId, jobTitle } = useAppSelector(applicationFormSelector)
    const dispatch = useAppDispatch()
    const { isAuthenticated } = useAuth()
    const { openModal } = useAuthModal()

    const openForm = (jobId: string, jobTitle: string) => {
        if (!isAuthenticated) {
            toast.error("Bạn cần đăng nhập để sử dụng chức năng ứng tuyển")
            openModal("LOGIN")
            return
        }
        dispatch(openApplicationForm({jobId, jobTitle}))
    }

    return {
        open,
        jobId,
        jobTitle,
        openApplicationForm: openForm,
        closeApplicationForm: () => dispatch(closeApplicationForm())
    }
}

export default useApplicationFormModal