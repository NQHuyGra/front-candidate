import { Popover } from "antd"
import { NAVLINKS } from "./navLinks"
import { Link, NavLink } from "react-router-dom"
import DropdownHeader from "./DropdownHeader"
import { cn } from "../../../shared/utils/cn"
import useAuthModal from "../../../shared/hooks/useAuthModal"
import useAuth from "../../../shared/hooks/useAuth"
import { FaAngleDown, FaAnglesRight, FaBell, FaComments } from "react-icons/fa6"
import placeholder from "../../../assets/placeholder.webp"
import DropdownUser from "./DropdownUser"

const DesktopHeader = () => {

    const { isAuthenticated, user } = useAuth()
    const { openModal } = useAuthModal()

    return (
        <header className="hidden lg:block w-full shadow-sm">
            <div className="container mx-auto flex justify-between items-center h-16">
                <nav className="flex items-center gap-4">
                    <Link to="/">
                        <h3 className="text-2xl font-bold">Logo</h3>
                    </Link>
                    {NAVLINKS.map(link => (
                        <Popover
                            key={link.id}
                            content={link.children ? <DropdownHeader links={link.children}/> : null}>
                            <NavLink
                                to={link.path}
                                className={({isActive}) => cn(
                                    "p-4 font-medium text-dark-500 hover:text-primary",
                                    isActive ? "text-primary" : ""
                                )}
                            >{link.label}</NavLink>
                        </Popover>
                    ))}
                </nav>
                {isAuthenticated && !!user ? (
                    <nav className="flex items-center gap-3 text-md">
                        <Link
                            to={import.meta.env.VITE_EMPLOYER_REGISTER_URL}
                            className="border-r px-3 flex flex-col items-end justify-center"
                        >
                            <p className="text-[13px] text-gray-400">Bạn là nhà truyển dụng?</p>
                            <p className="text-md font-medium text-dark-500 flex items-center gap-1">Đăng tuyển ngay <FaAnglesRight /></p>
                        </Link>
                        <div
                            className="flex justify-center items-center w-10 h-10 rounded-full text-xl text-primary bg-primary/20"
                        >
                            <FaBell />
                        </div>
                        <div
                            className="flex justify-center items-center w-10 h-10 rounded-full text-xl text-primary bg-primary/20"
                        >
                            <FaComments />
                        </div>
                        <Popover
                            content={<DropdownUser user={user}/>}>
                            <div
                                className="flex items-center rounded-full bg-gray-100 group"
                            >
                                <img
                                    src={user?.avatar_url ?? placeholder}
                                    alt="User avatar"
                                    className="size-10 rounded-full object-cover"
                                />
                                <FaAngleDown className="text-primary mx-2 group-hover:rotate-180 transition-all"/>
                            </div>
                        </Popover>
                    </nav>
                ) : (
                    <nav className="flex items-center gap-3 text-md">
                        <button
                            onClick={() => openModal('LOGIN')}
                            className="rounded-md px-3 py-2 font-medium border border-primary text-primary"
                        >Đăng nhập</button>
                        <button
                            onClick={() => openModal('REGISTER')}
                            className="rounded-md px-3 py-2 font-medium border border-primary text-white bg-primary"
                        >Đăng ký</button>
                        <Link
                            to={import.meta.env.VITE_EMPLOYER_REGISTER_URL}
                            className="rounded-md px-3 py-2 font-medium border border-dark-400 text-white bg-dark-400"
                        >Đăng tuyển & tìm hồ sơ</Link>
                    </nav>
                )}
            </div>
        </header>
    )
}

export default DesktopHeader