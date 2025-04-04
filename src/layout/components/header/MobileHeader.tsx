import { useState } from "react"
import { FaBars } from "react-icons/fa6"
import { Link, NavLink } from "react-router-dom"
import { cn } from "../../../shared/utils/cn"
import { NAVLINKS, USERDROPDOWNLINKS } from "./navLinks"
import { Drawer, Menu } from "antd"
import useAuth from "../../../shared/hooks/useAuth"
import useAuthModal from "../../../shared/hooks/useAuthModal"
import placeholder from "../../../assets/placeholder.webp"

const EMPLOYER_URL = import.meta.env.VITE_EMPLOYER_REGISTER_URL

const MobileHeader = () => {

    const [isOpenSidebar, setIsOpenSidebar] = useState(false)
    const { isAuthenticated, user } = useAuth()
    const { openModal } = useAuthModal()

    const openAuthModal = (variant : 'LOGIN' | 'REGISTER' | 'LOGOUT') => {
        setIsOpenSidebar(false)
        openModal(variant)
    }

    return (
        <header className="lg:hidden w-full shadow-sm">
            <div className="container mx-auto px-3 flex justify-between items-center h-16">
                <nav className="flex items-center gap-4">
                    <Link to="/">
                        <h3 className="text-2xl font-bold">Logo</h3>
                    </Link>
                </nav>
                <button
                    className="text-2xl hover:cursor-pointer"
                    onClick={() => setIsOpenSidebar(true)}
                >
                    <FaBars />
                </button>
                <Drawer title="" onClose={() => setIsOpenSidebar(false)} open={isOpenSidebar}>
                    <Menu
                        mode="inline"
                        items={NAVLINKS.map(link => ({
                            key: link.id,
                            label: <NavLink
                                to={link.path}
                                className={({isActive}) => cn(
                                    "font-medium !text-gray-800 hover:!text-primary",
                                    isActive ? "!text-primary" : ""
                                )}
                            >{link.label}</NavLink>,
                            children: link?.children?.map(({id, path, label, icon: Icon}) => ({
                                key: id,
                                icon: Icon ? <Icon /> : <></>,
                                label: <NavLink
                                    to={path}
                                    className={({isActive}) => cn(
                                        "p-4 font-medium !text-gray-800 hover:!text-primary",
                                        isActive ? "!text-primary" : ""
                                    )}
                                >{label}</NavLink>,
                            }))
                        }))}
                    />
                    {(isAuthenticated && !!user) ? (
                        <>
                            <Menu
                                mode="inline"
                                items={[
                                    {
                                        key: 'user',
                                        label: (
                                            <div
                                                className="flex items-center gap-2"
                                            >
                                                <img
                                                    src={user?.avatar_url ?? placeholder}
                                                    alt="User avatar"
                                                    className="size-10 rounded-full object-cover"
                                                />
                                                <p className="text-gray-800 font-medium">{user?.full_name}</p>
                                            </div>
                                        ),
                                        children: USERDROPDOWNLINKS.map(({id, path, label, icon: Icon}) => ({
                                            key: id,
                                            icon: Icon ? <Icon /> : <></>,
                                            label: <NavLink
                                                to={path}
                                                className={({isActive}) => cn(
                                                    "p-4 font-medium !text-gray-800 hover:!text-primary",
                                                    isActive ? "!text-primary" : ""
                                                )}
                                            >{label}</NavLink>,
                                        }))
                                    }
                                ]}
                            />
                            <button
                                onClick={() => openAuthModal('LOGOUT')}
                                className="w-full rounded-md px-3 py-2 font-medium border border-red-500 text-red-500 mt-3"
                            >Đăng xuất</button>
                        </>
                    ) : (
                        <div className="flex flex-col gap-2 mt-3">
                            <button
                                onClick={() => openAuthModal('LOGIN')}
                                className="rounded-md px-3 py-2 font-medium border border-primary text-primary"
                            >Đăng nhập</button>
                            <button
                                onClick={() => openAuthModal('REGISTER')}
                                className="rounded-md px-3 py-2 font-medium border border-primary text-white bg-primary"
                            >Đăng ký</button>
                            <Link
                                to={EMPLOYER_URL}
                                className="rounded-md px-3 py-2 font-medium border border-gray-800 !text-white !bg-gray-800 text-center"
                            >Đăng tuyển & tìm hồ sơ</Link>
                        </div>
                    )}
                </Drawer>
            </div>
        </header>
    )
}

export default MobileHeader