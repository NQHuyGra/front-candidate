import { Modal, Select } from "antd"
import useApplicationFormModal from "../../hooks/useApplicationFormModal"
import { FaRegIdBadge } from "react-icons/fa6"
import { useState } from "react"

const ApplicationFormModal = () => {

    const { open, jobId, jobTitle, closeApplicationForm } = useApplicationFormModal()
    const [selectedProfile, setSelectedProfile] = useState<string>('')
    const [status, setStatus] = useState<'error' | ''>('')


    const handleSubmit = () => {
        setStatus(selectedProfile ? '' : 'error')
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
                Chọn hồ sơ để ứng tuyển
            </h3>
            <form action="">
                <div className="">
                    <label></label>
                    <Select
                        className="w-full"
                        placeholder="Chọn hồ sơ để ứng tuyển"
                        status={status}
                        value={selectedProfile}
                        onChange={(value) => setSelectedProfile(value)}
                        // options={data.result.map(item => ({
                        //     label: item.name,
                        //     value: item.id
                        // }))}
                    />
                    {status === 'error' && <p className="text-red-500 text-sm mt-1">Vui lòng chọn hồ sơ để ứng tuyển</p>}
                </div>
            </form>
        </Modal>
    )
}

export default ApplicationFormModal