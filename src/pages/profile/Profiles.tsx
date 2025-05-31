import { useState } from "react"
import { Profile } from "../../shared/types/profile"
import ProfileItem from "../../shared/components/profile/ProfileItem"
import Pagination from "../../shared/components/pagination/Pagination"
import { Form, Input } from "antd"
import { Link } from "react-router-dom"
import ConfirmationModal from "../../shared/components/modals/ConfirmationModal"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteProfile, getProfilesWithPage } from "../../shared/apis/profileApi"
import { toast } from "react-toastify"

const Profiles = () => {

    const [search, setSearch] = useState("")
    const [page, setPage] = useState(1)
    const [openDelete, setOpenDelete] = useState({
        open: false,
        id: ''
    })
    const queryClient = useQueryClient()
    const {data, isLoading, isError } = useQuery({
        queryKey: ['my-profiles', page, search],
        queryFn: () => getProfilesWithPage({
            page: page - 1,
            size: 6,
            sortBy: 'updatedAt',
            direction: 'desc',
            search
        }),
        retry: 0
    })

    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteProfile(id),
        onSuccess: (data) => {
            queryClient.invalidateQueries({queryKey: ['my-profiles']})
            queryClient.invalidateQueries({queryKey: ['all-profiles']})
            setOpenDelete({
                open: false,
                id: ''
            })
            toast.success(data.message ?? 'Xóa hồ sơ thành công!')
        }
    })
    
    const handleSearch = (value: { search: string}) => {
        setPage(1)
        setSearch(value.search)
    }

    const handleDelete = () => {
        if(openDelete.id) {
            deleteMutation.mutate(openDelete.id)
        }
    }

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full">
                <h1 className="text-primary font-bold text-2xl">Hồ sơ của tôi</h1>
                <p className="text-gray-500 text-sm mb-5">Quản lý hồ sơ của bạn tại đây</p>
                <Form
                    onFinish={handleSearch}
                    className="grow max-w-96"
                >
                    <div className="flex items-center gap-4">
                        <Form.Item>
                            <Link
                                to="/tao-ho-so"
                                className="px-4 py-2 !rounded-md !bg-primary !text-white whitespace-nowrap"
                            >
                                Thêm hồ sơ
                            </Link>
                        </Form.Item>
                        <Form.Item
                            name="search"
                            className="w-full"
                        >
                            <div className="flex gap-4">
                                <Input
                                    placeholder="Tìm kiếm hồ sơ"
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="!w-48"
                                />
                                <button
                                    className="px-4 py-2 rounded-md bg-gray-200 text-gray-800 whitespace-nowrap"
                                    type="submit"
                                >
                                    Tìm kiếm
                                </button>
                            </div>
                        </Form.Item>
                    </div>
                </Form>
                {isLoading && <p className="w-full text-center font-bold text-2xl text-gray-500 py-10">Đang tải...</p>}
                {isError && <p className="w-full text-center font-bold text-2xl text-red-500 py-10">Có lỗi xảy ra, vui lòng thử lại sau.</p>}
                {data?.result.profiles.length === 0 && <p className="w-full text-center font-bold text-2xl text-gray-500 py-10">Chưa có hồ sơ.</p>}
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                    {data?.result.profiles.map(profile  => 
                        <ProfileItem
                            profile={profile}
                            key={profile.id}
                            className="w-full"
                            onDelete={(id) => setOpenDelete({
                                open: true,
                                id
                            })}
                        />
                    )}
                </div>
                <Pagination
                    onPageChange={setPage}
                    currentPage={page}
                    totalPages={data?.result.totalPages!}
                />
                <ConfirmationModal
                    title={"Xóa hồ sơ"}
                    description={`Bạn chắc chắn muốn xóa hồ sơ "${data?.result.profiles.find(_ => _.id === openDelete.id)?.name}"`}
                    isOpen={openDelete.open}
                    onConfirm={handleDelete}
                    onClose={() => setOpenDelete({
                        open: false,
                        id: ''
                    })}
                    confirmButtonClassName="bg-red-500 text-white hover:bg-red-600"
                    confirmText="Xóa"
                />
            </section>
        </main>
            
    )
}

export default Profiles