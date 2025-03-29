import { Form, Input } from "antd"

const Companies = () => {

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full">
                <h1 className="text-primary font-bold text-2xl mb-3">Danh sách công ty</h1>
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
        </main>
    )
}

export default Companies