import { useState } from "react"
import useAuth from "../../shared/hooks/useAuth"
import { UserUpdateRequest } from "../../shared/types/user"
import { updateUserApi } from "../../shared/apis/userApi"
import { toast } from "react-toastify"
import { Form, Input, Select } from "antd"
import { cn } from "../../shared/utils/cn"

const UpdateInformation = () => {

    const { user, setUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const [avatar, setAvatar] = useState<string>(user?.avatar_url ?? "")

    const onSubmit = (value: UserUpdateRequest) => {
        setLoading(true)
        updateUserApi(value).then(res => {
            setUser(res.result)
            toast.success("Cập nhật thông tin thành công")
        }).catch(err => {
            toast.error(err.response.data.message ?? err.message)
        }).finally(() => {
            setLoading(false)
        })
    }

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full">
                <Form
                    layout="vertical"
                    onFinish={onSubmit}
                    className="w-full"
                    initialValues={{
                        full_name: user?.full_name,
                        email: user?.email,
                        phone_number: user?.phone_number,
                        address: user?.address,
                        gender: user?.gender
                    }}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                    >
                        <Input
                            type="email"
                            className="form-input"
                            disabled
                        />
                    </Form.Item>
                    <Form.Item
                        label="Họ và tên"
                        name="full_name"
                        rules={[{ required: true, message: "Vui lòng nhập họ và tên" }]}
                    >
                        <Input
                            type="text"
                            className="form-input"
                            placeholder="Nhập họ và tên"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Số điện thoại"
                        name="phone_number"
                        rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
                    >
                        <Input
                            type="text"
                            className="form-input"
                            placeholder="Nhập số điện thoại"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Địa chỉ"
                        name="address"
                        rules={[{ required: true, message: "Vui lòng nhập địa chỉ!" }]}
                    >
                        <Input
                            type="text"
                            className="form-input"
                            placeholder="Nhập địa chỉ"
                        />
                    </Form.Item>
                    <Form.Item
                        label="Giới tính"
                        name="gender"
                    >
                        <Select
                            options={[
                                { label: "Nam", value: "MALE"},
                                { label: "Nữ", value: "FEMALE"},
                                { label: "Khác", value: "OTHER"}
                            ]}
                            className="form-input"
                            placeholder="Chọn giới tính"
                        />
                    </Form.Item>
                    <div className="flex">
                        <button
                            type="submit"
                            className={cn(
                                "flex px-3 py-1 bg-primary rounded-md cursor-pointer",
                                loading && "opacity-50 cursor-progress"
                            )}
                            disabled={loading}
                        >
                            Lưu thay đổi
                        </button>
                    </div>
                </Form>
            </section>
        </main>
    )
}

export default UpdateInformation