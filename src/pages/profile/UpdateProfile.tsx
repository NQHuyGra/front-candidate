import { useNavigate, useParams } from "react-router-dom"
import { Profile } from "../../shared/types/profile"
import ProfileForm from "../../shared/components/profile/ProfileForm"
import { getProfile, updateProfile } from "../../shared/apis/profileApi"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { toast } from "react-toastify"

const UpdateProfile = () => {

    const { profileId } = useParams()
    const navigate = useNavigate()
    const queryClient = useQueryClient()
    const { data, isLoading, isError } = useQuery({
        queryKey: ['profile', profileId],
        queryFn: () => getProfile(profileId!),
        enabled: !!profileId,
        retry: 0
    })

    const updateMutation = useMutation({
        mutationFn: ({id, value}: {id: string, value: Profile}) => updateProfile(id, value),
        onSuccess: (data) => {
            queryClient.setQueryData(['profile', profileId], data)
            queryClient.invalidateQueries({queryKey: ['my-profiles']})
            queryClient.invalidateQueries({queryKey: ['all-profiles']})
            toast.success(data.message ?? "Cập nhật hồ sơ thành công!")
        }
    })

    const onSubmit = (value: Profile) => {
        updateMutation.mutate({
            id: profileId!,
            value
        })
    }

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full">
                <h1 className="text-primary font-bold text-2xl">Chỉnh sửa hồ sơ</h1>
                <p className="text-gray-500 text-sm mb-5"></p>
                {isLoading && <p className="w-full text-center font-bold text-2xl text-gray-500 py-10">Đang tải...</p>}
                {(isError || !data?.result) && <p className="w-full text-center font-bold text-2xl text-red-500 py-10">Có lỗi xảy ra, vui lòng thử lại sau.</p>}
                {(!!data?.result && !isLoading && !isError) 
                ? <ProfileForm
                    initialValues={data.result}
                    onSubmit={onSubmit}
                    isLoading={updateMutation.isPending}
                    onCancel={() => navigate("/ho-so-ung-vien")}
                />
                : <></>}
                
            </section>
        </main>
    )
}

export default UpdateProfile