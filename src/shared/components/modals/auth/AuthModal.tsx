import { Modal } from "antd"
import useAuthModal from "../../../hooks/useAuthModal"
import LoginForm from "./forms/LoginForm"
import RegisterForm from "./forms/RegisterForm"
import useAuth from "../../../hooks/useAuth"
import { useNavigate } from "react-router-dom"

const AuthModal = () => {

    const { logout } = useAuth()
    const { open, variant, closeModal } = useAuthModal()
    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/')
        logout()
        closeModal()
    }

    return (
        <Modal
            open={open}
            onCancel={closeModal}
            title={variant === 'LOGOUT' ? 'Đăng xuất' : null}
            footer={variant === 'LOGOUT' ? [
                <button
                    key="back"
                    className="px-5 py-2 bg-gray-200 hover:bg-gray-300 mr-3 rounded-md transition-all text-md"
                    onClick={closeModal}
                >Hủy</button>,
                <button
                    key="submit"
                    className="px-3 py-2 bg-red-500 hover:bg-red-600 rounded-md transition-all text-md text-white"
                    onClick={handleLogout}
                >Đăng xuất</button>
            ] : null}
        >
            {variant === 'LOGIN' ? <LoginForm/> : null}
            {variant === 'REGISTER' ? <RegisterForm/> : null}
            {variant === 'LOGOUT' ? <p className="text-dark-500 text-md">Bạn có chắc chắn muốn đăng xuất?</p> : null}
        </Modal>
    )
}

export default AuthModal