import { FaBusinessTime, FaClock, FaDiceD6, FaHeart, FaLocationDot, FaMedal, FaPaperPlane, FaRegHeart, FaSackDollar, FaUpRightFromSquare, FaUserGraduate, FaUserGroup } from "react-icons/fa6"
import { Link, useParams } from "react-router-dom"
import useApplicationFormModal from "../../shared/hooks/useApplicationFormModal"
import ApplicationFormModal from "../../shared/components/modals/ApplicationFormModal"
import useSavedJobs from "../../shared/hooks/useStoredJobs"
import { useQuery } from "@tanstack/react-query"
import { getJob } from "../../shared/apis/jobApi"
import { EXP } from "../../shared/constants/exp"
import dayjs from "dayjs"
import TrustedContent from "../../shared/components/trusted-content/TrustedContent"
import { COMPANY_FIELDS } from "../../shared/constants/companyField"
import { RANKS } from "../../shared/constants/rank"
import { SALARY } from "../../shared/constants/salary"
import { isAppliedByJobId } from "../../shared/apis/applyApi"
import useAuth from "../../shared/hooks/useAuth"
import { FORM_OF_WORK } from "../../shared/constants/formOfWork"

const JobDetails = () => {

    const { jobId } = useParams()
    const { isAuthenticated } = useAuth()
    const { openApplicationForm } = useApplicationFormModal()
    const { savedJobs, saveJob, cancelSaveJob } = useSavedJobs()
    const { data, isLoading, isError } = useQuery({
        queryKey: ["job", jobId],
        queryFn: () => getJob(jobId!),
        enabled: !!jobId,
        refetchOnWindowFocus: false,
        retry: false
    })

    const { data: isApplyData } = useQuery({
        queryKey: ['is-applied', jobId],
        queryFn: () => isAppliedByJobId(jobId!),
        enabled: !!jobId && isAuthenticated,
        retry: 0
    })

    const isSaved = savedJobs.some(job => job === jobId)

    const handleOpenApplicationForm = () => {
        openApplicationForm(jobId!, data?.result.title!)
    }

    const toggleSaveJob = () => {
        if (isSaved) {
            cancelSaveJob(jobId!)
        } else {
            saveJob(jobId!)
        }
    }

    return (
        <main className="container mx-auto py-5 px-3">
            {isLoading && <div className="rounded-lg border p-10 flex justify-center">
                <p className="font-bold text-gray-500 text-2xl">Đang tải...</p>
            </div>}
            {isError && <div className="rounded-lg border p-10 flex justify-center">
                <p className="font-bold text-red-500 text-2xl">Có lỗi xảy ra, vui lòng thử lại sau.</p>
            </div>}
            {!!data?.result ? <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-4 lg:w-2/3">
                    <div className="p-4 rounded-lg border">
                        <h1 className="text-2xl font-medium mb-3 text-gray-900">
                            {data?.result.title}
                        </h1>
                        <div className="flex gap-3 mb-3 items-center justify-between flex-wrap">
                            <div className="flex items-center gap-2">
                                <div className="flex justify-center items-center size-12 bg-primary rounded-full">
                                    <FaSackDollar className="text-white text-xl"/>
                                </div>
                                <div>
                                    <p className="text-gray-500">Thu nhập</p>
                                    <p className="font-medium text-gray-900">{SALARY.find(item => item.id == data.result.salary)?.name}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex justify-center items-center size-12 bg-primary rounded-full">
                                    <FaLocationDot className="text-white text-xl"/>
                                </div>
                                <div>
                                    <p className="text-gray-500">Địa điểm</p>
                                    <p className="font-medium text-gray-900">{data?.result.location?.join(", ")}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex justify-center items-center size-12 bg-primary rounded-full">
                                    <FaBusinessTime className="text-white text-xl"/>
                                </div>
                                <div>
                                    <p className="text-gray-500">Kinh nghiệm</p>
                                    <p className="font-medium text-gray-900">{EXP.find(item => item.id == data?.result.exp)?.name}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-0.5 mb-3 w-max text-gray-600 bg-gray-200 rounded-md">
                            <FaClock/>
                            Hạn nộp hồ sơ: {dayjs(data?.result.deadline).format("DD/MM/YYYY")}
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                className="flex items-center justify-center gap-2 py-2 px-5 rounded-md border border-primary bg-primary text-white font-medium grow"
                                onClick={handleOpenApplicationForm}
                            >
                                <FaPaperPlane />
                                Ứng tuyển {isApplyData?.result ? 'lại' : ''}
                            </button>
                            <button
                                className="flex items-center justify-center gap-2 py-2 px-5 rounded-md border border-primary text-primary font-medium w-max"
                                onClick={toggleSaveJob}
                            >
                                {isSaved ? <FaHeart /> : <FaRegHeart />}
                                {isSaved ? "Hủy lưu tin" : "Lưu tin"}
                            </button>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg border">
                        <h1 className="text-2xl mb-3 font-medium text-gray-900">
                            Chi tiết tin tuyển dụng
                        </h1>
                        <h3 className="text-lg font-medium text-gray-900">Mô tả công việc</h3>
                        <TrustedContent content={data?.result.description}/>

                        <h3 className="text-lg font-medium text-gray-900 mt-4">Yêu cầu ứng viên</h3>
                        <TrustedContent content={data?.result.requirement}/>

                        <h3 className="text-lg font-medium text-gray-900 mt-4">Quyền lợi</h3>
                        <TrustedContent content={data?.result.benefit}/>

                        <h3 className="text-lg font-medium text-gray-900 mt-4">Thu nhập</h3>
                        <TrustedContent content={data?.result.salary_details}/>

                        <h3 className="text-lg font-medium text-gray-900 mt-4">Địa điểm làm việc</h3>
                        <TrustedContent content={data?.result.location_details}/>

                        <h3 className="text-lg font-medium text-gray-900 mt-4">Cách thức ứng tuyển</h3>
                        <p className="text-gray-900">Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay dưới đây.</p>

                        <p className="my-3">Hạn nộp hồ sơ: 13/04/2025</p>

                        <div className="flex items-center gap-3">
                            <button
                                className="py-2 px-5 rounded-md border border-primary bg-primary text-white font-medium"
                                onClick={handleOpenApplicationForm}
                            >
                                Ứng tuyển {isApplyData?.result ? 'lại' : ''}
                            </button>
                            <button
                                className="py-2 px-5 rounded-md border border-primary text-primary font-medium"
                                onClick={toggleSaveJob}
                            >
                                {isSaved ? "Hủy lưu tin" : "Lưu tin"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 lg:w-1/3">
                    <div className="p-4 rounded-lg border">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="p-3 rounded-lg border size-20">
                                            <img
                                                src={data?.result.company.logo_url}
                                                alt={data?.result.company.name}
                                                className="w-full"
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-gray-900 pl-3 font-medium text-xl">{data?.result.company.name}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-gray-500 font-medium flex gap-2 items-center w-max"><FaUserGroup /> Quy mô:</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-900 pl-3">{data?.result.company.size} nhân viên</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-gray-500 font-medium flex gap-2 items-center w-max"><FaDiceD6 /> Lĩnh vực:</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-900 pl-3">{data?.result.company.fields?.map(f => COMPANY_FIELDS.find(item => item.id == f)?.name).join(", ")}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-gray-500 font-medium flex gap-2 items-center w-max"><FaLocationDot /> Địa điểm:</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-900 pl-3">{data?.result.company.address}</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to={`/cong-ty/${1}`} className="font-medium text-primary flex items-center justify-center mt-3 gap-2">Xem trang công ty <FaUpRightFromSquare /></Link>
                    </div>
                    <div className="p-4 rounded-lg border">
                        <h1 className="font-medium text-2xl text-gray-900 mb-3">Thông tin chung</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white my-2">
                                            <FaMedal />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="pl-3">
                                            <p className="text-gray-500 text-md">Cấp bậc</p>
                                            <p className="font-medium">{RANKS.find(item => item.id == data?.result.rank)?.name}</p>
                                        </div>
                                    </td>
                                </tr>
                                {/* <tr>
                                    <td>
                                        <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white my-2">
                                            <FaUserGraduate />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="pl-3">
                                            <p className="text-gray-500 text-md">Học vấn</p>
                                            <p className="font-medium">{}</p>
                                        </div>
                                    </td>
                                </tr> */}
                                <tr>
                                    <td>
                                        <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white my-2">
                                            <FaUserGroup />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="pl-3">
                                            <p className="text-gray-500 text-md">Số lượng tuyển</p>
                                            <p className="font-medium">{data?.result.number_of_recruits} người</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white my-2">
                                            <FaBusinessTime />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="pl-3">
                                            <p className="text-gray-500 text-md">Hình thức làm việc</p>
                                            <p className="font-medium">{FORM_OF_WORK.find(item => item.id == data?.result.form_of_work)?.name}</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div> : <></>}
            <ApplicationFormModal/>
        </main>
    )
}

export default JobDetails