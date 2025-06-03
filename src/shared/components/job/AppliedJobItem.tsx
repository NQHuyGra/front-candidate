import { Link } from "react-router-dom"
import { AppliedJobResponse } from "../../types/recruitmentDetails"
import dayjs from "dayjs"

type AppliedJobItemProps = {
    data: AppliedJobResponse
}

const AppliedJobItem = ({ data }: AppliedJobItemProps) => {

    return (
        <div className="group rounded-xl p-3 border hover:border-primary transition-all">
            <div className="flex gap-3 mb-3">
                <Link to={`/companies/${data?.job.company.id}`}>
                    <div className="company-logo size-16 rounded-md p-2 border">
                        <img
                            src={data?.job.company.logo_url}
                            alt={data?.job.company.name}
                            className="size-full"
                            loading="lazy"/>
                    </div>
                </Link>
                <div className="">
                    <h3>
                        <Link to={`/viec-lam/${data?.job.id}`}>
                            <strong className="job-title text-md font-semibold hover:underline group-hover:text-primary transition-all line-clamp-2">{data?.job.title}</strong>
                        </Link>
                    </h3>
                    <Link to={`/cong-ty/${data?.job.company.id}`}>
                        <span className="company-name text-sm text-gray-500 font-medium line-clamp-1">{data?.job.company.name}</span>
                    </Link>
                </div>
            </div>
            <p className="text-sm text-gray-500">Ứng tuyển ngày: {dayjs(data?.recruitmentDetails.application_date).format('DD/MM/YYYY')}</p>
            {data?.recruitmentDetails.status === 1 ?
            <p className="text-green-̀500">Đã nhận hồ sơ</p> : 
            data?.recruitmentDetails.status === 2 ?
            <p className="text-red-500">Bị từ chối: <span className="text-gray-800">{data?.recruitmentDetails.feedback}</span></p> :
            <p className="text-gray-500">Chưa phản hồi</p>}
        </div>
    )
}

export default AppliedJobItem