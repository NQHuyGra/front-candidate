import DropdownItem from "./DropdownItem"
import { NavLinkType } from "./navLinks"

type DropdownHeaderPropsType = {
    links?: NavLinkType[]
}

const DropdownHeader = ({links = []}: DropdownHeaderPropsType) => {

    return (
        <div className="flex flex-col gap-3 min-w-80 max-h-96 overflow-y-auto">
            {links.map((link) => (
                <DropdownItem
                    key={link.id}
                    {...link}
                />
            ))}
        </div>
    )
}

export default DropdownHeader