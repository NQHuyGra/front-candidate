import { authModalSelector, AuthModalVariantType, closeAuthModal, openAuthModal } from "../toolkits/authModalSlice"
import { useAppDispatch, useAppSelector } from "./redux"

const useAuthModal = () => {

    const { variant, open } = useAppSelector(authModalSelector)
    const dispatch = useAppDispatch()

    return {
        variant,
        open,
        openModal: (variant: AuthModalVariantType) => dispatch(openAuthModal(variant)),
        closeModal: () => dispatch(closeAuthModal())
    }
}

export default useAuthModal