import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { Link } from "react-router-dom"
import { getAppliedJobs } from "../../shared/apis/applyApi"
import AppliedJobItem from "../../shared/components/job/AppliedJobItem"
import Pagination from "../../shared/components/pagination/Pagination"

const AppliedJobs = () => {

    const [page, setPage] = useState(1)
    const { data, isLoading, isError } = useQuery({
        queryKey: ['applied-jobs', page],
        queryFn: () => getAppliedJobs({
            page: page - 1,
            size: 6,
            sortBy: 'applicationDate',
            direction: 'desc'
        }),
        retry: 0
    })

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full">
                <h1 className="text-primary font-bold text-2xl mb-5">Việc làm đã ứng tuyển</h1>
                {isLoading && <p className="w-full text-center font-bold text-2xl text-gray-500 py-10">Đang tải...</p>}
                {isError && <p className="w-full text-center font-bold text-2xl text-red-500 py-10">Có lỗi xảy ra, vui lòng thử lại sau.</p>}
                {(data?.result.totalItems === 0) ? (
                    <div className="py-20 flex flex-col gap-3 items-center justify-center">
                        <p className="text-gray-800">Bạn chưa ứng tuyển công việc nào!</p>
                        <Link
                            to="/tim-viec-lam"
                            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors duration-200">
                                Tìm việc ngay
                        </Link>
                    </div>
                ) : (
                    <>
                        {data?.result.appliedJobs.length === 0 && <p className="w-full text-center font-bold text-2xl text-gray-500 py-10">Không tìm thấy dữ liệu!</p>}
                        {data?.result.appliedJobs.map(item => (
                            <AppliedJobItem
                                key={item.recruitmentDetails.id}
                                data={item}
                            />
                        ))}
                    </>
                )}
                <Pagination
                    currentPage={page}
                    totalPages={data?.result?.totalPages || 0}
                    onPageChange={setPage}
                />
            </section>
        </main>
    )
}

export default AppliedJobs