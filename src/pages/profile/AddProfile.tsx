import { useNavigate } from "react-router-dom"
import ProfileForm from "../../shared/components/profile/ProfileForm"
import { Profile } from "../../shared/types/profile"

const AddProfile = () => {

    const navigate = useNavigate()

    const onSubmit = (value: Profile) => {
        console.log(value)
    }

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full">
                <h1 className="text-primary font-bold text-2xl">Thêm hồ sơ</h1>
                <p className="text-gray-500 text-sm mb-5">Linh hoạt ứng tuyển với các hồ sơ khác nhau.</p>
                <ProfileForm
                    onSubmit={onSubmit}
                    onCancel={() => navigate("/ho-so-ung-vien")}
                />
            </section>
        </main>
    )
}

export default AddProfile