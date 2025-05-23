import { Form, Input, Select } from "antd"
import { CATEGORIES } from "../../shared/constants/category"
import { FORM_OF_WORK } from "../../shared/constants/formOfWork"
import { RANKS } from "../../shared/constants/rank"
import { EXP } from "../../shared/constants/exp"
import { SALARY } from "../../shared/constants/salary"
import { JOB_FIELDS } from "../../shared/constants/jobField"
import { COMPANY_FIELDS } from "../../shared/constants/companyField"
import { CITIES } from "../../shared/constants/city"
import Pagination from "../../shared/components/pagination/Pagination"
import { JobFilterRequest } from "../../shared/types/job"
import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getJobs } from "../../shared/apis/jobApi"
import JobItem from "../../shared/components/job/JobItem"

const SearchJob = () => {

    const [page, setPage] = useState(1)
    const [sortBy, setSortBy] = useState<string>("updatedAt")
    const [filter, setFilter] = useState<JobFilterRequest>({
        search: "",
        location: "",
        category: 0,    
        job_field: 0,
        company_field: 0,
        salary: 0,
        exp: 0,
        rank: 0,
        form_of_work: 0
    })

    const { data, isLoading, isError } = useQuery({
        queryKey: ["jobs", page, sortBy, filter],
        queryFn: () => getJobs({
            page: page - 1,
            sortBy: sortBy,
            size: 6,
            direction: "desc",
        }, filter),
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
        retry: 0,
    })

    return (
        <main>
            <section className="bg-primary">
                <div className="bg-black/35">
                    <div className="container mx-auto p-3">
                        <Form
                            className="w-full"
                            layout="vertical"
                            onFinish={setFilter}
                        >
                            <div className="mb-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                                <Form.Item
                                    className="w-full col-span-2"
                                    name="search"
                                    label={<p className="!text-white">Tìm kiếm</p>}
                                >
                                    
                                    <Input
                                        className="w-full"
                                        id="txtSearch"
                                        placeholder="Từ khóa"
                                    />
                                </Form.Item>
                                <Form.Item
                                    className="w-full"
                                    name="location"
                                    label={<p className="!text-white">Địa điểm</p>}
                                >
                                    <Select
                                        className="w-full"
                                        id="sCity"
                                        maxTagCount="responsive"
                                        placeholder="Địa điểm"
                                        options={CITIES.map((item) => ({
                                            label: item,
                                            value: item
                                        }))}
                                    />
                                </Form.Item>
                                <Form.Item
                                    className="w-full"
                                    name="category"
                                    label={<p className="!text-white">Ngành nghề</p>}
                                >
                                    <Select
                                        className="w-full"
                                        id="sCategory"
                                        value={0}
                                        placeholder="Chọn ngành nghề"
                                        options={CATEGORIES.map((item) => ({
                                            label: item.name,
                                            value: item.id
                                        }))}
                                    />
                                </Form.Item>
                                <Form.Item
                                    className="w-full"
                                    name="company_field"
                                    label={<p className="!text-white">Lĩnh vực công ty</p>}
                                >
                                    <Select
                                        className="w-full"
                                        id="sCF"
                                        value={0}
                                        placeholder="Lĩnh vực công ty"
                                        options={COMPANY_FIELDS.map((item) => ({
                                            label: item.name,
                                            value: item.id
                                        }))}
                                    />
                                </Form.Item>
                                <Form.Item
                                    className="w-full"
                                    name="job_field"
                                    label={<p className="!text-white">Lĩnh vực công việc</p>}
                                >
                                    <Select
                                        className="w-full"
                                        id="sJF"
                                        value={0}
                                        placeholder="Lĩnh vực công việc"
                                        options={JOB_FIELDS.map((item) => ({
                                            label: item.name,
                                            value: item.id
                                        }))}
                                    />
                                </Form.Item>
                                <Form.Item
                                    className="w-full"
                                    name="salary"
                                    label={<p className="!text-white">Mức lương</p>}
                                >
                                    <Select
                                        className="w-full"
                                        id="sSalary"
                                        value={0}
                                        placeholder="Mức lương"
                                        options={SALARY.map((item) => ({
                                            label: item.name,
                                            value: item.id
                                        }))}
                                    />
                                </Form.Item>
                                <Form.Item
                                    className="w-full"
                                    name="exp"
                                    label={<p className="!text-white">Kinh nghiệm làm việc</p>}
                                >
                                    <Select
                                        className="w-full"
                                        id="sEXP"
                                        value={0}
                                        placeholder="Kinh nghiệm"
                                        options={EXP.map((item) => ({
                                            label: item.name,
                                            value: item.id
                                        }))}
                                    />
                                </Form.Item>
                                <Form.Item
                                    className="w-full lg:col-span-2"
                                    name="rank"
                                    label={<p className="!text-white">Cấp bậc</p>}
                                >
                                    <Select
                                        className="w-full"
                                        id="sRank"
                                        value={0}
                                        placeholder="Cấp bậc"
                                        options={RANKS.map((item) => ({
                                            label: item.name,
                                            value: item.id
                                        }))}
                                    />
                                </Form.Item>
                                <Form.Item
                                    className="w-full lg:col-span-2"
                                    name="form_of_work"
                                    label={<p className="!text-white">Hình thức làm việc</p>}
                                >
                                    <Select
                                        className="w-full"
                                        id="sFOW"
                                        value={0}
                                        placeholder="Hình thức làm việc"
                                        options={FORM_OF_WORK.map((item) => ({
                                            label: item.name,
                                            value: item.id
                                        }))}
                                    />
                                </Form.Item>
                            </div>
                            <div className="mb-3">
                                <button className="px-10 py-1.5 bg-primary text-white rounded-lg">Tìm kiếm</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-3 py-5">
                <h1 className="text-primary font-bold text-2xl mb-3">Kết quả tìm kiếm</h1>
                <Select
                    className="mb-3"
                    value={sortBy}
                    style={{ minWidth: 200 }}
                    options={[
                        {label: "Ngày đăng", value: "createdAt"},
                        {label: "Ngày cập nhật", value: "updatedAt"},
                        {label: "Mức lương", value: "salary"},
                    ]}
                    onChange={setSortBy}
                    labelRender={(option) => <span className="text-gray-500 font-medium">Ưu tiên hiển thị theo: {option.label}</span>}
                />
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
                <Pagination currentPage={page} totalPages={data?.result.totalPages!} onPageChange={setPage} />
            </section>
        </main>
    )
}

export default SearchJob