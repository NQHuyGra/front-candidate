import { FaArrowRightFromBracket } from "react-icons/fa6"
import useAuthModal from "../../../shared/hooks/useAuthModal"
import { User } from "../../../shared/types/user"
import DropdownItem from "./DropdownItem"
import { USERDROPDOWNLINKS } from "./navLinks"
import placeholder from "../../../assets/placeholder.webp"

const DropdownUser = ({
    user
}: {
    user: User
}) => {

    const { openModal } = useAuthModal()

    return (
        <div className="flex flex-col gap-3 min-w-80 max-h-96 overflow-y-auto">
            <div className="flex gap-3 border-b py-2">
                <img
                    src={user?.avatar_url ?? placeholder}
                    alt="User avatar"
                    className="size-10 rounded-full object-cover"
                />
                <div>
                    <p className="text-md text-primary font-medium">{user?.full_name}</p>
                    <p className="text-[13px] text-gray-400">Mã ứng viên: <span className="text-dark-500">{user?.id}</span></p>
                    <p className="text-[13px] text-gray-400">{user?.email}</p>
                </div>
            </div>
            {USERDROPDOWNLINKS.map((link) => (
                <DropdownItem
                    key={link.id}
                    {...link}
                />
            ))}
            <button
                className="flex items-center gap-3 p-3 rounded-md text-md transition-all bg-gray-200/50 hover:bg-gray-200 text-red-500 font-medium"
                onClick={() => openModal('LOGOUT')}
            >
                <FaArrowRightFromBracket className="text-lg"/>
                Đăng xuất
            </button>
        </div>
    )
}

export default DropdownUser