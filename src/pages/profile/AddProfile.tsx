import { useNavigate } from "react-router-dom"
import ProfileForm from "../../shared/components/profile/ProfileForm"
import { Profile } from "../../shared/types/profile"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { createProfile } from "../../shared/apis/profileApi"
import { toast } from "react-toastify"

const AddProfile = () => {

    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const addMutation = useMutation({
        mutationFn: createProfile,
        onSuccess: (data) => {
            if(data.result) queryClient.setQueryData(['profile', data.result.id], data)
            queryClient.invalidateQueries({queryKey: ['my-profiles']})
            queryClient.invalidateQueries({queryKey: ['all-profiles']})
            toast.success(data.message ?? "Thêm mới hồ sơ thành công!")
            navigate("/ho-so-ung-vien")
        }
    })

    const onSubmit = (value: Profile) => {
        addMutation.mutate(value)
    }

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full">
                <h1 className="text-primary font-bold text-2xl">Thêm hồ sơ</h1>
                <p className="text-gray-500 text-sm mb-5">Linh hoạt ứng tuyển với các hồ sơ khác nhau.</p>
                <ProfileForm
                    onSubmit={onSubmit}
                    isLoading={addMutation.isPending}
                    onCancel={() => navigate("/ho-so-ung-vien")}
                />
            </section>
        </main>
    )
}

export default AddProfile