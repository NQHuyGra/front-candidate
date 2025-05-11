import { Form } from "antd"
import { Profile } from "../../types/profile"
import { cn } from "../../utils/cn"

export type ProfileFormProps = {
    initialValues?: Profile
    onSubmit: (values: Profile) => void
    onCancel: () => void
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
            initialValues={initialValues}
            onFinish={onSubmit}
            className="w-full"
        >
            <Form.Item
                className="flex gap-2 items-center justify-end"
            >
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
            </Form.Item>
        </Form>
    )
}

export default ProfileForm