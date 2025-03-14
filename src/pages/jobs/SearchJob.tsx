import { Input, Select } from "antd"
import { CATEGORIES } from "../../shared/constants/category"
import { FORM_OF_WORK } from "../../shared/constants/formOfWork"
import { RANKS } from "../../shared/constants/rank"
import { EXP } from "../../shared/constants/exp"
import { SALARY } from "../../shared/constants/salary"
import { JOB_FIELDS } from "../../shared/constants/jobField"
import { COMPANY_FIELDS } from "../../shared/constants/companyField"
import { CITIES } from "../../shared/constants/city"
import JobItem from "../../shared/components/job/JobItem"
import Pagination from "../../shared/components/pagination/Pagination"

const SearchJob = () => {

    return (
        <main>
            <section className="bg-primary">
                <div className="bg-black/35">
                    <div className="container mx-auto p-3">
                        <form >
                            <div className="mb-3 grid grid-cols-2 lg:grid-cols-4 gap-3">
                                <div className="w-full col-span-2">
                                    <label
                                        className="text-white mb-2 line-clamp-1"
                                        htmlFor="txtSearch">Tìm kiếm</label>
                                    <Input
                                        className="w-full"
                                        id="txtSearch"
                                        placeholder="Từ khóa"
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        className="text-white mb-2 line-clamp-1"
                                        htmlFor="sCity">Địa điểm</label>
                                    <Select
                                        className="w-full"
                                        id="sCity"
                                        mode="multiple"
                                        maxTagCount="responsive"
                                        placeholder="Địa điểm"
                                        options={CITIES.map((item) => ({
                                            label: item,
                                            value: item
                                        }))}
                                    />
                                </div>
                                <div className="w-full">
                                    <label
                                        className="text-white mb-2 line-clamp-1"
                                        htmlFor="sCategory">Ngành nghề</label>
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
                                </div>
                                <div className="w-full">
                                    <label
                                        className="text-white mb-2 line-clamp-1"
                                        htmlFor="sCF">Lĩnh vực công ty</label>
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
                                </div>
                                <div className="w-full">
                                    <label
                                        className="text-white mb-2 line-clamp-1"
                                        htmlFor="sJF">Lĩnh vực công việc</label>
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
                                </div>
                                <div className="w-full">
                                    <label
                                        className="text-white mb-2 line-clamp-1"
                                        htmlFor="sSalary">Mức lương</label>
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
                                </div>
                                <div className="w-full">
                                    <label
                                        className="text-white mb-2 line-clamp-1"
                                        htmlFor="sEXP">Kinh nghiệm làm việc</label>
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
                                </div>
                                <div className="w-full lg:col-span-2">
                                    <label
                                        className="text-white mb-2 line-clamp-1"
                                        htmlFor="sRank">Cấp bậc</label>
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
                                </div>
                                <div className="w-full lg:col-span-2">
                                    <label
                                        className="text-white mb-2 line-clamp-1"
                                        htmlFor="sFOW">Hình thức làm việc</label>
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
                                </div>
                            </div>
                            <div className="mb-3">
                                <button className="px-10 py-1.5 bg-primary text-white rounded-lg">Tìm kiếm</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <section className="container mx-auto px-3 py-5">
                <h1 className="text-primary font-bold text-2xl mb-3">Kết quả tìm kiếm</h1>
                <Select
                    className="mb-3"
                    value="created_at"
                    style={{ minWidth: 200 }}
                    options={[
                        {label: "Ngày đăng", value: "created_at"},
                        {label: "Ngày cập nhật", value: "updated_at"},
                    ]}
                    labelRender={(option) => <span className="text-gray-500 font-medium">Ưu tiên hiển thị theo: {option.label}</span>}
                />
                <div className="job-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* {JOBS.map(job  => 
                        <JobItem
                            job={job}
                            key={job.id}
                            className="w-full"
                        />
                    )} */}
                </div>
                <Pagination currentPage={1} totalPages={10} onPageChange={() => {}} />
            </section>
        </main>
    )
}

export default SearchJob