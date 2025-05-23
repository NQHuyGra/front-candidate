import dayjs from "dayjs"
import { Profile } from "../../types/profile"
import { cn } from "../../utils/cn"
import { Link } from "react-router-dom"
import { FaPenToSquare, FaTrash } from "react-icons/fa6"

type ProfileItemProps = {
    profile: Profile,
    className?: string
    onDelete?: (id: string) => void
}

const ProfileItem = ({
    profile,
    className,
    onDelete
}: ProfileItemProps) => {

    const TagsRender = () => {
        const tags = profile.tags?.split(",")?.map(_ => _.trim())
        return (
            <div className="w-full flex flex-wrap gap-2 items-center">
                {tags?.map(_ => (
                    <div className="flex justify-center items-center px-2 py-1 bg-gray-300 text-gray-800 text-sm hover:bg-gray-400/75 hover:underline rounded-md">
                        {_}
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div
            className={cn(
                "group border hover:border-primary rounded-md p-3",
                className
            )}
        >
            <div className="flex justify-between mb-2">
                <div className="">
                    <p className="text-xl text-gray-800 font-medium group-hover:text-primary line-clamp-1">{profile.name}</p>
                    <p className="text-sm text-gray-500">Cập nhật lần cuối: {dayjs(profile.updated_at).format("DD/MM/YYYY")}</p>
                </div>
                <div className="flex items-center gap-3">
                    <Link
                        to={`/cap-nhat-ho-so/${profile.id}`}
                        className="text-green-500 text-xl"
                    >
                        <FaPenToSquare />
                    </Link>
                    <button
                        className="text-red-500 text-xl"
                        onClick={() => onDelete?.(profile.id)}
                    >
                        <FaTrash />
                    </button>
                </div>
            </div>
            <TagsRender />
        </div>
    )
}

export default ProfileItem