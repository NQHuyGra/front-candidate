import { DatePicker, Form, Input } from "antd"
import { Profile } from "../../types/profile"
import { cn } from "../../utils/cn"
import dayjs from "dayjs"
import QuillTextEditor from "../quill/QuillTextEditor"

export type ProfileFormProps = {
    initialValues?: Profile
    onSubmit?: (values: Profile) => void
    onCancel?: () => void
    isLoading?: boolean
}

const ProfileForm = ({
    initialValues,
    onSubmit,
    onCancel,
    isLoading
}: ProfileFormProps) => {

    return (
        <Form
            layout="vertical"
            initialValues={
                initialValues ? {
                    ...initialValues,
                    date_of_birth: dayjs(initialValues.date_of_birth, "YYYY-MM-DD")
                } : undefined
            }
            onFinish={onSubmit}
            className="w-full"
            scrollToFirstError
        >
            <div className="flex flex-col md:flex-row gap-x-4">
                <Form.Item
                    label="Tên hồ sơ"
                    name="name"
                    className="w-2/5 grow"
                    rules={[{
                        required: true,
                        message: "Vui lòng nhập tên hồ sơ!"
                    }]}
                >
                    <Input
                        className="w-full"
                        placeholder="Nhập tên hồ sơ"
                    />
                </Form.Item>
            </div>
            <div className="flex flex-col md:flex-row gap-x-4">
                <Form.Item
                    label="Họ và tên"
                    name="fullname"
                    className="w-2/5 grow"
                    rules={[{
                        required: true,
                        message: "Vui lòng nhập họ và tên!"
                    }]}
                >
                    <Input
                        className="w-full"
                        placeholder="Nhập họ và tên"
                    />
                </Form.Item>
                <Form.Item
                    label="Vị trí ứng tuyển"
                    name="position"
                    className="w-2/5 grow"
                    rules={[{
                        required: true,
                        message: "Vui lòng nhập vị trí ứng tuyển!"
                    }]}
                >
                    <Input
                        className="w-full"
                        placeholder="Nhập vị trí ứng tuyển"
                    />
                </Form.Item>
            </div>
            <div className="flex flex-col md:flex-row gap-x-4">
                <Form.Item
                    label="Email"
                    name="email"
                    className="w-2/5 grow"
                    rules={[{
                        required: true,
                        message: "Vui lòng nhập email!"
                    }]}
                >
                    <Input
                        className="w-full"
                        placeholder="Nhập họ và tên"
                        type="email"
                    />
                </Form.Item>
                <Form.Item
                    label="Số điện thoại"
                    name="phone"
                    className="w-2/5 grow"
                    rules={[{
                        required: true,
                        message: "Vui lòng nhập số điện thoại!"
                    }]}
                >
                    <Input
                        className="w-full"
                        placeholder="Nhập số điện thoại"
                        type="tel"
                    />
                </Form.Item>
            </div>
            <div className="flex flex-col md:flex-row gap-x-4">
                <Form.Item
                    label="Địa chỉ"
                    name="address"
                    className="w-2/5 grow"
                    rules={[{
                        required: true,
                        message: "Vui lòng nhập địa chỉ!"
                    }]}
                >
                    <Input
                        className="w-full"
                        placeholder="Nhập địa chỉ"
                    />
                </Form.Item>
                <Form.Item
                    label="Ngày sinh"
                    name="date_of_birth"
                    className="w-2/5 grow"
                    rules={[{
                        required: true,
                        message: "Vui lòng nhập ngày sinh!"
                    }]}
                >
                    <DatePicker
                        className="w-full"
                        placeholder="Nhập ngày sinh"
                        disabledDate={(current) => 
                            current && current > dayjs().endOf("day")
                        }
                    />
                </Form.Item>
            </div>
            <Form.Item
                label="Giới thiệu bản thân"
                name="introduction"
            >
                <QuillTextEditor
                    placeholder="Nhập giới thiệu bản thân"
                />
            </Form.Item>
            <Form.Item
                label="Mục tiêu nghề nghiệp"
                name="career"
            >
                <QuillTextEditor
                    placeholder="Nhập mục tiêu nghề nghiệp"
                />
            </Form.Item>
            <Form.Item
                label="Trình độ học vấn"
                name="education"
            >
                <QuillTextEditor
                    placeholder="Nhập trình độ học vấn"
                />
            </Form.Item>
            <Form.Item
                label="Thành tích"
                name="achievement"
            >
                <QuillTextEditor
                    placeholder="Nhập thành tích"
                />
            </Form.Item>
            <Form.Item
                label="Kỹ năng"
                name="skills"
            >
                <QuillTextEditor
                    placeholder="Nhập kỹ năng"
                />
            </Form.Item>
            <Form.Item
                label="Kinh nghiệm"
                name="exp"
            >
                <QuillTextEditor
                    placeholder="Nhập kinh nghiệm làm việc"
                />
            </Form.Item>
            <Form.Item
                label="Trình độ ngoại ngữ"
                name="language"
            >
                <QuillTextEditor
                    placeholder="Nhập trình độ ngoại ngữ"
                />
            </Form.Item>
            <Form.Item
                label="Sở thích"
                name="hobbies"
            >
                <QuillTextEditor
                    placeholder="Nhập sở thích"
                />
            </Form.Item>
            <Form.Item
                label="Khác"
                name="other"
            >
                <QuillTextEditor
                    placeholder="Nhập nội dung(VD: Dự án cá nhân...)"
                />
            </Form.Item>
            <Form.Item
                label="Từ khóa"
                name="tags"
            >
                <Input
                    placeholder="Nhập từ khóa, cách nhau bằng dấu phẩy"
                />
            </Form.Item>
            <Form.Item
                className="w-full"
            >
                <div className="flex gap-4 items-center justify-end">
                    <button
                        type="button"
                        onClick={onCancel}
                        className="px-4 py-2 rounded-md bg-gray-200 text-gray-800"
                    >
                        Hủy
                    </button>
                    <button
                        type="submit"
                        disabled={isLoading}
                        className={cn(
                            "px-4 py-2 rounded-md bg-primary text-white",
                            isLoading && "opacity-50 cursor-progress"
                        )}
                    >
                        {isLoading ? "Đang lưu..." : "Lưu hồ sơ"}
                    </button>
                </div>
            </Form.Item>
        </Form>
    )
}

export default ProfileForm