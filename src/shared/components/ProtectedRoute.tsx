import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAuthModal from "../hooks/useAuthModal";
import { toast } from "react-toastify";

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const { isAuthenticated } = useAuth()
    const { openModal } = useAuthModal()
    const location = useLocation()

    if (!isAuthenticated) {
        openModal("LOGIN")
        toast.error("Bạn cần đăng nhập để sử dụng chức năng này")
        return <Navigate
            to="/"
            state={{ from: location }}
            replace
        />
    }

    return children
}

export default ProtectedRoute