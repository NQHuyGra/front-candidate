import { FaBusinessTime, FaClock, FaDiceD6, FaHeart, FaLocationDot, FaMedal, FaPaperPlane, FaSackDollar, FaUpRightFromSquare, FaUserGraduate, FaUserGroup } from "react-icons/fa6"
import { Link, useParams } from "react-router-dom"
import useApplicationFormModal from "../../shared/hooks/useApplicationFormModal"
import ApplicationFormModal from "../../shared/components/modals/ApplicationFormModal"

const JobDetails = () => {

    const { jobId } = useParams()
    const { openApplicationForm } = useApplicationFormModal()

    const handleOpenApplicationForm = () => {
        openApplicationForm(jobId as string, "Nhân Viên Kinh Doanh/ Nhân Viên Tư Vấn/ Nhân Viên Telesales/ Chăm Sóc Khách Hàng")
    }

    return (
        <main className="container mx-auto py-5 px-3">
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex flex-col gap-4 lg:w-2/3">
                    <div className="p-4 rounded-lg border">
                        <h1 className="text-2xl font-medium mb-3 text-gray-900">
                            Nhân Viên Kinh Doanh/ Nhân Viên Tư Vấn/ Nhân Viên Telesales/ Chăm Sóc Khách Hàng (Thu Nhập 15 - 20 Triệu)
                        </h1>
                        <div className="flex gap-3 mb-3 items-center justify-between flex-wrap">
                            <div className="flex items-center gap-2">
                                <div className="flex justify-center items-center size-12 bg-primary rounded-full">
                                    <FaSackDollar className="text-white text-xl"/>
                                </div>
                                <div>
                                    <p className="text-gray-500">Thu nhập</p>
                                    <p className="font-medium text-gray-900">15 - 20 triệu</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex justify-center items-center size-12 bg-primary rounded-full">
                                    <FaLocationDot className="text-white text-xl"/>
                                </div>
                                <div>
                                    <p className="text-gray-500">Địa điểm</p>
                                    <p className="font-medium text-gray-900">Hà Nội</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex justify-center items-center size-12 bg-primary rounded-full">
                                    <FaBusinessTime className="text-white text-xl"/>
                                </div>
                                <div>
                                    <p className="text-gray-500">Kinh nghiệm</p>
                                    <p className="font-medium text-gray-900">1 năm</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-0.5 mb-3 w-max text-gray-600 bg-gray-200 rounded-md">
                            <FaClock/>
                            Hạn nộp hồ sơ: 13/04/2025
                        </div>
                        <div className="flex items-center gap-3">
                            <button
                                className="flex items-center justify-center gap-2 py-2 px-5 rounded-md border border-primary bg-primary text-white font-medium grow"
                                onClick={handleOpenApplicationForm}
                            >
                                <FaPaperPlane />
                                Ứng tuyển
                            </button>
                            <button className="flex items-center justify-center gap-2 py-2 px-5 rounded-md border border-primary text-primary font-medium w-max">
                                <FaHeart />
                                Lưu tin
                            </button>
                        </div>
                    </div>
                    <div className="p-4 rounded-lg border">
                        <h1 className="text-2xl mb-3 font-medium text-gray-900">
                            Chi tiết tin tuyển dụng
                        </h1>
                        <h3 className="text-lg font-medium text-gray-900">Mô tả công việc</h3>
                        <p className="text-gray-900">- Gọi điện theo data có sẵn</p>
                        <p className="text-gray-900">- Lên lịch hẹn</p>
                        <p className="text-gray-900">- Chăm sóc khách hàng</p>
                        <p className="text-gray-900">- Hỗ trợ khách hàng, giải đáp những thắc mắc của khách hàng</p>
                        <p className="text-gray-900">- Hỗ trợ khách hàng tìm hiểu những giải pháp bảo vệ sức khỏe</p>
                        <p className="text-gray-900">- Thời gian làm việc: từ thứ 2 đến thứ 7 (có thể linh động không lên công ty khi sử dụng data khách hàng tự kiếm)</p>

                        <h3 className="text-lg font-medium text-gray-900 mt-4">Yêu cầu ứng viên</h3>
                        <p className="text-gray-900">- Có kinh nghiệm từ 1 năm trở lên</p>
                        <p className="text-gray-900">- Có khả năng giao tiếp, nhạy bén, linh hoạt</p>
                        <p className="text-gray-900">- Có tinh thần trách nhiệm với công việc, có khả năng làm việc độc lập và theo nhóm</p>

                        <h3 className="text-lg font-medium text-gray-900 mt-4">Thu nhập</h3>
                        <p className="text-gray-900">Thu nhập khi đạt 100% KPI: 15 - 20 triệu VND</p>
                        <p className="text-gray-900">Lương cứng: 8 - 10 triệu VND</p>
                        <p className="text-gray-900">Lương cứng không phụ thuộc doanh số</p>

                        <h3 className="text-lg font-medium text-gray-900 mt-4">Quyền lợi</h3>
                        <p className="text-gray-900">- Thu nhập 15 - 20 triệu, bao gồm: Lương cơ bản 8 - 10 triệu + 5 - 15% hoa hồng + thưởng</p>
                        <p className="text-gray-900">- Được tham gia các khóa đào tạo đầy đủ (nếu chưa vững kiến thức chuyên môn).</p>
                        <p className="text-gray-900">- Không áp KPI doanh số</p>
                        <p className="text-gray-900">- Lộ trình thăng tiến rõ ràng theo năng lực, được định hướng thăng tiến lên vị trí quản lý kinh doanh (Thu nhập 20 - 25 triệu) và từ 2 năm lên vị trí Trưởng phòng kinh doanh.</p>
                        <p className="text-gray-900">- Môi trường thân thiện, trẻ trung, năng động, chuyên nghiệp, phát huy tối đa năng lực cá nhân.</p>
                        <p className="text-gray-900">- Được du lịch thường niên trong và ngoài nước cùng công ty (tối thiểu 4 lần/năm – và 1 lần xuất ngoại)</p>
                        <p className="text-gray-900">- Được thưởng nóng 1 chỉ vàng nếu tổng giá trị hợp đồng đạt 100 triệu, thưởng giai đoạn 500k/tuần từ giám đốc nếu mời được từ 3 khách hàng tới tham gia hội thảo tư vấn.</p>
                        <p className="text-gray-900">- Được đóng BHXH, BHYT, BHTN đầy đủ.</p>

                        <h3 className="text-lg font-medium text-gray-900 mt-4">Địa điểm làm việc</h3>
                        <p className="text-gray-900">- Hà Nội: Tầng 3, Thăng Long Tower, 33 Mạc Thái Tổ, Yên Hòa, Cầu Giấy</p>

                        <h3 className="text-lg font-medium text-gray-900 mt-4">Cách thức ứng tuyển</h3>
                        <p className="text-gray-900">Ứng viên nộp hồ sơ trực tuyến bằng cách bấm Ứng tuyển ngay dưới đây.</p>

                        <p className="my-3">Hạn nộp hồ sơ: 13/04/2025</p>

                        <div className="flex items-center gap-3">
                            <button
                                className="py-2 px-5 rounded-md border border-primary bg-primary text-white font-medium"
                                onClick={handleOpenApplicationForm}
                            >
                                Ứng tuyển
                            </button>
                            <button className="py-2 px-5 rounded-md border border-primary text-primary font-medium">
                                Lưu tin
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
                                                src="https://i.pinimg.com/474x/b4/c5/af/b4c5af111827882a5c1549860e8edef3.jpg"
                                                alt="Daiichi Life"
                                                className="w-full"
                                            />
                                        </div>
                                    </td>
                                    <td>
                                        <p className="text-gray-900 pl-3 font-medium text-xl">Daiichi Life</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-gray-500 font-medium flex gap-2 items-center w-max"><FaUserGroup /> Quy mô:</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-900 pl-3">100 - 499 nhân viên</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-gray-500 font-medium flex gap-2 items-center w-max"><FaDiceD6 /> Lĩnh vực:</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-900 pl-3">Bảo hiểm</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className="text-gray-500 font-medium flex gap-2 items-center w-max"><FaLocationDot /> Địa điểm:</p>
                                    </td>
                                    <td>
                                        <p className="text-gray-900 pl-3">Thăng Long Tower - 33 Mạc Thái Tổ, Cầu Giấy, Hà Nội</p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <Link to="" className="font-medium text-primary flex items-center justify-center mt-3 gap-2">Xem trang công ty <FaUpRightFromSquare /></Link>
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
                                            <p className="font-medium">Nhân viên</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white my-2">
                                            <FaUserGraduate />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="pl-3">
                                            <p className="text-gray-500 text-md">Học vấn</p>
                                            <p className="font-medium">Cao Đẳng trở lên</p>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="size-12 rounded-full bg-primary flex items-center justify-center text-white my-2">
                                            <FaUserGroup />
                                        </div>
                                    </td>
                                    <td>
                                        <div className="pl-3">
                                            <p className="text-gray-500 text-md">Số lượng tuyển</p>
                                            <p className="font-medium">5 người</p>
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
                                            <p className="font-medium">Toàn thời gian</p>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ApplicationFormModal/>
        </main>
    )
}

export default JobDetails