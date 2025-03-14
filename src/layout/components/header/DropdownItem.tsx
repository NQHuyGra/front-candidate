import { NavLink } from "react-router-dom"
import { NavLinkType } from "./navLinks"
import { cn } from "../../../shared/utils/cn"

type DropdownItemPropsType = Omit<NavLinkType, 'id' | 'children'>

const DropdownItem = ({label, path, icon: Icon}: DropdownItemPropsType) => {

    return (
        <NavLink to={path} className={({isActive}) => cn(
            "flex items-center gap-3 p-3 rounded-md text-md transition-all bg-gray-200/50 hover:bg-gray-200 text-dark-200! hover:text-primary! font-medium",
            isActive ? "text-primary!" : ""
        )}>
            {Icon ? <Icon className="text-lg text-primary!"/> : null}
            {label}
        </NavLink>
    )
}

export default DropdownItem