import { useState } from "react"
import SmartFilter, { SmartFilterType } from "../../shared/components/filters/SmartFilter"
import JobItem from "../../shared/components/job/JobItem"
import Pagination from "../../shared/components/pagination/Pagination"
import { Link } from "react-router-dom"
import { FaBriefcase, FaBuilding, FaBuildingColumns, FaBullhorn, FaCalculator, FaHeadset, FaLaptopCode, FaTags } from "react-icons/fa6"
import { getJobs } from "../../shared/apis/jobApi"
import { JobFilterRequest } from "../../shared/types/job"
import { useQuery } from "@tanstack/react-query"

const JobNews = () => {

    const [filter, setFilter] = useState<SmartFilterType>({
        type: "location",
        value: "Hà Nội"
    })
    const [currentPage, setCurrentPage] = useState(1)
    const { data, isLoading, isError } = useQuery({
        queryKey: ["jobs", currentPage, filter],
        queryFn: () => getJobs({
            page: currentPage - 1,
            sortBy: 'updatedAt',
            size: 6,
            direction: "desc",
        }, {
            [filter.type]: filter.value
        } as JobFilterRequest),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        retry: 0,
    })

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full">
                <h1 className="text-primary font-bold text-2xl">Việc làm tốt nhất</h1>
                <SmartFilter value={filter} onFilterChange={setFilter} />
                {isLoading && <p className="w-full text-center font-bold text-2xl text-gray-500 py-10">Đang tải...</p>}
                {isError && <p className="w-full text-center font-bold text-2xl text-red-500 py-10">Có lỗi xảy ra, vui lòng thử lại sau.</p>}
                {data?.result.jobs.length === 0 && <p className="w-full text-center font-bold text-2xl text-gray-500 py-10">Không tìm thấy công việc nào.</p>}
                <div className="job-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {data?.result.jobs.map(job  => 
                        <JobItem
                            job={job}
                            key={job.id}
                            className="w-full"
                        />
                    )}
                </div>
                <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
            </section>
            <section className="w-full">
                <h1 className="text-primary font-bold text-2xl mb-4">Top nghành nghề nổi bật</h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Link to="">
                        <div className="flex flex-col w-full p-5 items-center rounded-2xl bg-gray-200 hover:bg-white hover:ring hover:ring-primary transition-all">
                            <div className="size-20 rounded-xl flex justify-center items-center bg-gray-200 mb-3">
                                <FaTags className="text-3xl text-primary" />
                            </div>
                            <p className="text-gray-800 font-medium line-clamp-1">Kinh doanh - Bán hàng</p>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="flex flex-col w-full p-5 items-center rounded-2xl bg-gray-200 hover:bg-white hover:ring hover:ring-primary transition-all">
                            <div className="size-20 rounded-xl flex justify-center items-center bg-gray-200 mb-3">
                                <FaBullhorn className="text-3xl text-primary" />
                            </div>
                            <p className="text-gray-800 font-medium line-clamp-1">Marketing - PR - Quảng cáo</p>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="flex flex-col w-full p-5 items-center rounded-2xl bg-gray-200 hover:bg-white hover:ring hover:ring-primary transition-all">
                            <div className="size-20 rounded-xl flex justify-center items-center bg-gray-200 mb-3">
                                <FaHeadset className="text-3xl text-primary" />
                            </div>
                            <p className="text-gray-800 font-medium line-clamp-1">Chăm sóc khách hàng</p>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="flex flex-col w-full p-5 items-center rounded-2xl bg-gray-200 hover:bg-white hover:ring hover:ring-primary transition-all">
                            <div className="size-20 rounded-xl flex justify-center items-center bg-gray-200 mb-3">
                                <FaBriefcase className="text-3xl text-primary" />
                            </div>
                            <p className="text-gray-800 font-medium line-clamp-1">Nhân sự - Hành chính</p>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="flex flex-col w-full p-5 items-center rounded-2xl bg-gray-200 hover:bg-white hover:ring hover:ring-primary transition-all">
                            <div className="size-20 rounded-xl flex justify-center items-center bg-gray-200 mb-3">
                                <FaBuildingColumns className="text-3xl text-primary" />
                            </div>
                            <p className="text-gray-800 font-medium line-clamp-1">Tài chính - Ngân hàng</p>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="flex flex-col w-full p-5 items-center rounded-2xl bg-gray-200 hover:bg-white hover:ring hover:ring-primary transition-all">
                            <div className="size-20 rounded-xl flex justify-center items-center bg-gray-200 mb-3">
                                <FaLaptopCode className="text-3xl text-primary" />
                            </div>
                            <p className="text-gray-800 font-medium line-clamp-1">Công nghệ thông tin</p>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="flex flex-col w-full p-5 items-center rounded-2xl bg-gray-200 hover:bg-white hover:ring hover:ring-primary transition-all">
                            <div className="size-20 rounded-xl flex justify-center items-center bg-gray-200 mb-3">
                                <FaBuilding className="text-3xl text-primary" />
                            </div>
                            <p className="text-gray-800 font-medium line-clamp-1">Bất động sản - Xây dựng</p>
                        </div>
                    </Link>
                    <Link to="">
                        <div className="flex flex-col w-full p-5 items-center rounded-2xl bg-gray-200 hover:bg-white hover:ring hover:ring-primary transition-all">
                            <div className="size-20 rounded-xl flex justify-center items-center bg-gray-200 mb-3">
                                <FaCalculator className="text-3xl text-primary" />
                            </div>
                            <p className="text-gray-800 font-medium line-clamp-1">Kế toán - Kiểm toán</p>
                        </div>
                    </Link>
                </div>
            </section>
        </main>
    )
}

export default JobNews