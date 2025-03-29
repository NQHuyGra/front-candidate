import { Form, Input } from "antd"
import { FaRegEnvelope, FaShieldHalved, FaUser } from "react-icons/fa6"
import useAuthModal from "../../../../hooks/useAuthModal"

const RegisterForm = () => {

    const { closeModal, openModal } = useAuthModal()

    const onSubmit = (value: any) => {
        console.log(value)
        closeModal()
    }

    return (
        <>
            <h3 className="text-primary font-semibold text-xl text-center mb-3">Chào mừng bạn đến với ...</h3>
            <p className="text-dark-200 text-center mb-3">Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng</p>
            <Form
                layout="vertical"
                onFinish={onSubmit}
                className="w-full"
            >
                <Form.Item
                    label="Họ và tên"
                    name="full_name"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập họ và tên!"
                        }
                    ]}
                >
                    <Input
                        className="py-2"
                        placeholder="Nhập họ và tên"
                        autoComplete="name"
                        prefix={<FaUser className="text-primary"/>}
                    />
                </Form.Item>
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
                        autoComplete="current_password"
                        prefix={<FaShieldHalved className="text-primary"/>}
                    />
                </Form.Item>
                <Form.Item
                    label="Xác nhận mật khẩu"
                    name="confirm_password"
                    rules={[
                        {
                            required: true,
                            message: "Vui lòng nhập mật khẩu xác nhận!"
                        }
                    ]}
                >
                    <Input.Password
                        className="py-2"
                        placeholder="Nhập lại mật khẩu"
                        autoComplete="new_password"
                        prefix={<FaShieldHalved className="text-primary"/>}
                    />
                </Form.Item>
                <Form.Item>
                    <button type="submit" className="bg-primary flex items-center justify-center rounded-lg text-white text-base w-full px-5 py-2">Đăng ký</button>
                </Form.Item>
                <Form.Item>
                    <button type="button" onClick={closeModal} className="bg-gray-200 flex items-center justify-center rounded-lg text-dark-500 text-base w-full px-5 py-2">Hủy</button>
                </Form.Item>
            </Form>
            <p className="text-dark-500 text-center">Bạn đã có tài khoản? <button type="button" onClick={() => openModal('LOGIN')} className="text-primary">Đăng nhập ngay</button></p>
        </>
    )
}

export default RegisterForm