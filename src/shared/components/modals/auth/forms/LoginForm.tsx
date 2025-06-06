import { Input, Form } from "antd"
import { FaRegEnvelope, FaShieldHalved } from "react-icons/fa6"
import useAuthModal from "../../../../hooks/useAuthModal"
import { AuthenticatedRequest } from "../../../../types/auth"
import useAuth from "../../../../hooks/useAuth"
import { loginApi } from "../../../../apis/authApi"
import { toast } from "react-toastify"
import { useState } from "react"
import { cn } from "../../../../utils/cn"

const LoginForm = () => {

    const { closeModal, openModal } = useAuthModal()
    const { login } = useAuth()
    const [loading, setLoading] = useState(false)

    const onSubmit = (value: AuthenticatedRequest) => {
        setLoading(true)
        loginApi(value).then(res => {
            login(res.result.accessToken, res.result.user)
            toast.success("Đăng nhập thành công")
        }).catch(err => {
            toast.error(err.response.data.message ?? err.message)
        }).finally(() => {
            closeModal()
            setLoading(false)
        })
    }

    return (
        <>
            <h3 className="text-primary font-semibold text-xl text-center mb-3">Chào mừng bạn đã quay trở lại</h3>
            <p className="text-dark-200 text-center mb-3">Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
            <Form
                layout="vertical"
                onFinish={onSubmit}
                className="w-full"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập email!"
                        }
                    ]}
                >
                    <Input
                        className="py-2"
                        type="email"
                        placeholder="Nhập email"
                        autoComplete="email"
                        prefix={<FaRegEnvelope className="text-primary"/>}
                    />
                </Form.Item>
                <Form.Item
                    label="Mật khẩu"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mật khẩu!"
                        }
                    ]}
                >
                    <Input.Password
                        className="py-2"
                        placeholder="Nhập mật khẩu"
                        autoComplete="password"
                        prefix={<FaShieldHalved className="text-primary"/>}
                    />
                </Form.Item>
                <Form.Item>
                    <button
                        type="submit"
                        className={cn(
                            "bg-primary flex items-center justify-center rounded-lg text-white text-base w-full px-5 py-2",
                            loading && "opacity-50 cursor-progress"
                        )}
                        disabled={loading}
                    >
                        Đăng nhập
                    </button>
                </Form.Item>
                <Form.Item>
                    <button
                        type="button"
                        onClick={closeModal}
                        className="bg-gray-200 flex items-center justify-center rounded-lg text-dark-500 text-base w-full px-5 py-2"
                    >
                        Hủy
                    </button>
                </Form.Item>
            </Form>
            <p className="text-dark-500 text-center">Bạn chưa có tài khoản? <button type="button" onClick={() => openModal('REGISTER')} className="text-primary">Đăng ký ngay</button></p>
        </>
    )
}

export default LoginForm