import { FaLocationDot, FaMap } from "react-icons/fa6"

type ContactInformationProps = {
    address: string
}

const ContactInformation = ({ address }: ContactInformationProps) => {

    return (
        <div className="w-full rounded-lg border p-4">
            <h1 className="text-xl font-medium text-gray-800 mb-3">Thông tin liên hệ</h1>
            <div className="flex items-center gap-2 text-gray-800 mb-3">
                <FaLocationDot className="text-primary"/>
                Địa chỉ công ty
            </div>
            <p className="text-gray-500 mb-3">
                {address}
            </p>
            <div className="border w-full mb-3"></div>
            <div className="flex items-center gap-2 text-gray-800 mb-3">
                <FaMap className="text-primary"/>
                Xem bản đồ
            </div>
            <div className="relative w-full pt-80 lg:pt-[100%]">
                <iframe
                    src={`https://maps.google.com/maps?q=${address}&output=embed`}
                    className="size-full absolute top-0 left-0"
                    loading="lazy"
                    allowFullScreen
                    title="">
                </iframe>
            </div>
        </div>
    )
}

export default ContactInformation