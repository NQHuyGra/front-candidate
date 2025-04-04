import { Form, Input } from "antd"
import CompanyItem from "../../shared/components/company/CompanyItem"
import { Company } from "../../shared/types/company"

const Companies = () => {

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full mb-3">
                <h1 className="text-primary font-bold text-2xl mb-3">Khám phá công ty</h1>
                <p className="text-gray-800 mb-3">Tra cứu thông tin công ty và tìm kiếm nơi làm việc tốt nhất dành cho bạn</p>
                <Form action="">
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
                </Form>
            </section>
            <section className="w-full">
                <h1 className="text-gray-800 uppercase text-center font-medium text-2xl mt-8 mb-8">Danh sách công ty</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {COMPANYS.map(company  => 
                        <CompanyItem
                            company={company}
                            key={company.id}
                            className="w-full"
                        />
                    )}
                </div>
            </section>
        </main>
    )
}

export default Companies

const COMPANYS : Company[] = [
    {
        id: "1",
        name: "Công ty TNHH ABC",
        logo: "https://i.pinimg.com/736x/c6/7c/e0/c67ce0f1ed761a07caf801be53bbb60f.jpg",
        cover_photo: "https://i.pinimg.com/originals/55/fc/4b/55fc4bee7c31f0850262da53fa1e3180.gif",
        description: "<p>Công ty TNHH ABC chuyên cung<br/>cấp dịch vụ công nghệ thông tin.</p>",
        location: "Hà Nội",
        website: "https://abc.com",
    },
    {
        id: "2",
        name: "Công ty CP XYZ",
        logo: "https://i.pinimg.com/736x/85/85/c7/8585c7fb50f6eae25ab1479d40a7ee9f.jpg",
        cover_photo: "https://i.pinimg.com/736x/ad/c2/aa/adc2aa5586908667fa05c4540c6506c9.jpg",
        description: "Công ty CP XYZ chuyên sản xuất và phân phối hàng tiêu dùng.",
        location: "Hồ Chí Minh",
        website: "https://xyz.com",
    },
    {
        id: "3",
        name: "Công ty TNHH DEF",
        logo: "https://i.pinimg.com/736x/ef/47/0d/ef470d5bfd66f6c642cf17d2e513972c.jpg",
        cover_photo: "https://i.pinimg.com/736x/8b/88/36/8b88368bd67617ab39404d6cc3757926.jpg",
        description: "Công ty TNHH DEF chuyên cung cấp dịch vụ tài chính.",
        location: "Đà Nẵng",
        website: "https://def.com",
    },
    {
        id: "4",
        name: "Công ty CP GHI",
        logo: "https://i.pinimg.com/736x/cc/ac/d2/ccacd204f8b5528f4a420a2ad4df934b.jpg",
        cover_photo: "https://i.pinimg.com/736x/0f/13/98/0f1398ac48925c9a7d99f7928a411535.jpg",
        description: "Công ty CP GHI chuyên sản xuất và phân phối thực phẩm.",
        location: "Hải Phòng",
        website: "https://ghi.com",
    },
]