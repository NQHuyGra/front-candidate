import { Form, Input } from "antd"
import CompanyItem from "../../shared/components/company/CompanyItem"
import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { fetchCompanyList } from "../../shared/apis/companyApi"

const Companies = () => {

    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const { data, isLoading, isError } = useQuery({
        queryKey: ['company', {
            search,
            page: page - 1,
            size: 6,
            sortBy: 'createdAt',
            direction: 'desc'
        }],
        queryFn: fetchCompanyList,
        retry: 1,
    })

    const onSubmit = (values: { search: string }) => {
        setSearch(values.search)
        setPage(1)
    }

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full mb-3">
                <h1 className="text-primary font-bold text-2xl mb-3">Khám phá công ty</h1>
                <p className="text-gray-800 mb-3">Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành cho bạn</p>
                <Form
                    onFinish={onSubmit}
                >
                    <Form.Item
                        name="search"
                    >
                        <div className="flex gap-3">
                            <Input
                                placeholder="Nhập tên công ty"
                                className="max-w-[400px] w-full"
                            />
                            <button
                                className="bg-primary text-white px-5 py-2 rounded-lg whitespace-nowrap"
                            >
                                Tìm kiếm
                            </button>
                        </div>
                    </Form.Item>
                </Form>
            </section>
            <section className="w-full">
                <h1 className="text-gray-800 uppercase text-center font-medium text-2xl mt-8 mb-8">Danh sách công ty</h1>
                {isLoading && <p className="text-center font-semibold text-xl text-gray-500">Đang tải...</p>}
                {isError && <p className="text-center font-semibold text-xl text-red-500">Có lỗi xảy ra, vui lòng thử lại sau</p>}
                {data?.result.companies.length === 0 && <p className="text-center font-semibold text-xl text-gray-500">Không có công ty nào.</p>}
                {data?.result.companies.length !== 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {data?.result?.companies.map(company  => 
                            <CompanyItem
                                company={company}
                                key={company.id}
                                className="w-full"
                            />
                        )}
                    </div>
                )}
            </section>
        </main>
    )
}

export default Companies