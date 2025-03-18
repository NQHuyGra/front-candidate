import { Modal } from "antd"
import useApplicationFormModal from "../../hooks/useApplicationFormModal"
import { FaRegIdBadge } from "react-icons/fa6"
import { useState } from "react"
import { cn } from "../../utils/cn"

const ApplicationFormModal = () => {

    const { open, jobId, jobTitle, closeApplicationForm } = useApplicationFormModal()
    const [profile, setProfile] = useState<"OLD" | "UPLOAD">("OLD")
    const [file, setFile] = useState<File | null>(null)

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
        }
    }

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            setFile(e.dataTransfer.files[0])
            e.dataTransfer.clearData()
        }
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleSubmit = () => {
        // Handle submit here
        closeApplicationForm()
    }

    return (
        <Modal
            open={open}
            onCancel={closeApplicationForm}
            title={<h1 className="text-gray-900 font-semibold text-2xl line-clamp-2">Ứng tuyển <span className="text-primary">{jobTitle}</span></h1>}
            footer={
                <div className="flex items-center gap-3">
                    <button
                        className="px-5 py-2 bg-gray-200 text-gray-900 font-semibold rounded-lg"
                        onClick={closeApplicationForm}
                    >Hủy</button>
                    <button
                        className="px-5 py-2 bg-primary text-white font-semibold rounded-lg grow"
                        onClick={handleSubmit}
                    >Nộp hồ sơ ứng tuyển</button>
                </div>
            }
        >
            <h3
                className="font-medium text-gray-900 text-lg flex items-center gap-2 my-5"
            >
                <FaRegIdBadge className="text-primary text-xl"/>
                Chọn CV để ứng tuyển
            </h3>
            <form action="">
                <div className="">
                    <label
                        htmlFor="old"
                        className={cn(
                            "flex items-center gap-3 mb-3 p-3 border rounded-lg",
                            profile === "OLD" ? "border-primary" : ""
                        )}
                    >
                        <input
                            type="radio"
                            name="profile"
                            id="old"
                            checked={profile === "OLD"}
                            onChange={() => setProfile("OLD")}
                        />
                        <p
                            className={cn(
                                "font-medium text-gray-800 text-md",
                                profile === "OLD" ? "text-primary" : ""
                            )}
                        >
                            CV ứng tuyển gần nhất
                        </p>
                    </label>
                    <label
                        htmlFor="upload"
                        className={cn(
                            "flex items-center gap-3 mb-3 p-3 border rounded-lg",
                            profile === "UPLOAD" ? "border-primary" : ""
                        )}
                    >
                        <input
                            type="radio"
                            name="profile"
                            id="upload"
                            checked={profile === "UPLOAD"}
                            onChange={() => setProfile("UPLOAD")}
                        />
                        <p
                            className={cn(
                                "font-medium text-gray-800 text-md",
                                profile === "UPLOAD" ? "text-primary" : ""
                            )}
                        >
                            Tải CV lên từ thiết bị
                        </p>
                    </label>
                    {profile === "UPLOAD" && (
                            <div
                                className="mb-3 rounded-lg border border-dotted border-gray-300 px-3 py-5 hover:border-primary flex flex-col justify-center items-center"
                                onDrop={handleDrop}
                                onDragOver={handleDragOver}
                            >
                                <p className="text-gray-800 font-medium">Kéo thả hoặc chọn file CV</p>
                                <p className="text-gray-500 text-sm mb-3">Hỗ trợ định dạng: PDF, DOCX, DOC</p>
                                <input
                                    type="file"
                                    name="file"
                                    id="file"
                                    accept=".pdf,.docx,.doc"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                                <label
                                    htmlFor="file"
                                    className="px-5 py-2 bg-gray-200 hover:bg-primary text-gray-900 hover:text-white transition font-semibold rounded-lg cursor-pointer"
                                >
                                    Chọn CV
                                </label>
                                {file && (
                                    <p className="text-gray-800 font-medium mt-3">File đã chọn: {file.name}</p>
                                )}
                            </div>
                        )
                    }
                </div>
            </form>
        </Modal>
    )
}

export default ApplicationFormModal