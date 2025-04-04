import Pagination from "../pagination/Pagination"

type RecruitmentNewsProps = {
    companyId: string
}

const RecruitmentNews = ({ companyId }: RecruitmentNewsProps) => {

    return (
        <div className="w-full rounded-lg border p-4">
            <h1 className="text-xl font-medium text-gray-800 mb-3">Tuyển dụng</h1>
            <Pagination
                currentPage={1}
                totalPages={3}
                onPageChange={() => {}}
            />
        </div>
    )
}

export default RecruitmentNews