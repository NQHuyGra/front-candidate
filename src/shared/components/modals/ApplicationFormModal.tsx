import { Modal, Select } from "antd"
import useApplicationFormModal from "../../hooks/useApplicationFormModal"
import { FaRegIdBadge } from "react-icons/fa6"
import { useState } from "react"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getAllProfiles } from "../../apis/profileApi"
import { apply } from "../../apis/applyApi"
import { ApiResponse } from "../../types/apiResponse"
import { toast } from "react-toastify"
import { RecruitmentDetails } from "../../types/recruitmentDetails"
import { cn } from "../../utils/cn"
import useAuth from "../../hooks/useAuth"

const ApplicationFormModal = () => {

    const { isAuthenticated } = useAuth()
    const { open, jobId, jobTitle, closeApplicationForm } = useApplicationFormModal()
    const [selectedProfile, setSelectedProfile] = useState<string>('')
    const [status, setStatus] = useState<'error' | ''>('')
    const queryClient = useQueryClient()
    const { data, isLoading, isError } = useQuery({
        queryKey: ['all-profiles'],
        queryFn: getAllProfiles,
        enabled: isAuthenticated,
        retry: 0
    })

    const applyMutation = useMutation<ApiResponse<Boolean>, Error, RecruitmentDetails>({
        mutationFn: apply,
        onSuccess: (data) => {
            queryClient.setQueryData(['is-applied', jobId], data)
            queryClient.invalidateQueries({queryKey: ['applied-jobs']})
            toast.success(data.message ?? 'Ứng tuyển thành công!')
            closeApplicationForm()
        }
    })

    const handleSubmit = () => {
        setStatus(selectedProfile ? '' : 'error')
        if(selectedProfile) applyMutation.mutate({
            job_id: jobId,
            profile_id: selectedProfile
        } as RecruitmentDetails)
    }

    return (
        <Modal
            open={open}
            onCancel={closeApplicationForm}
            title={<h1 className="text-gray-900 font-semibold text-2xl line-clamp-2">Ứng tuyển <span className="text-primary">{jobTitle}</span></h1>}
            footer={
                <div className="flex items-center gap-3">
                    <button
                        className="px-5 py-2 bg-gray-200 text-gray-900 font-semibold rounded-lg"
                        onClick={closeApplicationForm}
                    >Hủy</button>
                    <button
                        className={cn(
                            "px-5 py-2 bg-primary text-white font-semibold rounded-lg grow",
                            applyMutation.isPending ? 'opacity-50 cursor-progress' : ''
                        )}
                        onClick={handleSubmit}
                        disabled={applyMutation.isPending}
                    >Nộp hồ sơ ứng tuyển</button>
                </div>
            }
        >
            <h3
                className="font-medium text-gray-900 text-lg flex items-center gap-2 my-5"
            >
                <FaRegIdBadge className="text-primary text-xl"/>
                Chọn hồ sơ để ứng tuyển
            </h3>
            {isLoading && <p className="w-full text-center font-bold text-xl text-gray-500">Đang tải...</p>}
            {isError && <p className="w-full text-center font-bold text-xl text-red-500">Có lỗi xảy ra, vui lòng thử lại sau.</p>}
            {data?.result.length === 0 && <p className="w-full text-center font-bold text-xl text-red-500">Vui lòng tạo hồ sơ trước khi ứng tuyển!</p>}
            {(data?.result && data?.result.length > 0) ? <form action="">
                <div className="">
                    <label></label>
                    <Select
                        className="w-full"
                        placeholder="Chọn hồ sơ để ứng tuyển"
                        status={status}
                        value={selectedProfile}
                        onChange={(value) => setSelectedProfile(value)}
                        loading={isLoading}
                        options={data?.result.map(item => ({
                            label: item.name,
                            value: item.id
                        }))}
                    />
                    {status === 'error' && <p className="text-red-500 text-sm mt-1">Vui lòng chọn hồ sơ để ứng tuyển</p>}
                </div>
            </form> : <></>}
        </Modal>
    )
}

export default ApplicationFormModal