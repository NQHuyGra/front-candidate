import { IconType } from "react-icons"
import { FaArrowUpFromBracket, FaBandcamp, FaBriefcase, FaBuilding, FaChartColumn, FaMagnifyingGlass, FaPenToSquare, FaRegFileLines, FaRegHeart, FaRegIdBadge, FaShieldHalved } from "react-icons/fa6"

export type NavLinkType = {
    id: string | number
    path: string
    label: string
    icon?: IconType
    children?: NavLinkChildrenType[]
}

export type NavLinkChildrenType = Omit<NavLinkType, 'children'>

export const NAVLINKS: NavLinkType[] = [
    {
        id: 'viec-lam',
        path: '/viec-lam',
        label: 'Việc làm',
        children: [
            {
                id: 'tim-viec-lam',
                path: '/tim-viec-lam',
                label: 'Tìm việc làm',
                icon: FaMagnifyingGlass
            },
            {
                id: 'lich-su-ung-tuyen',
                path: '/lich-su-ung-tuyen',
                label: 'Việc làm đã ứng tuyển',
                icon: FaBriefcase
            },
            {
                id: 'viec-lam-da-luu',
                path: '/viec-lam-da-luu',
                label: 'Việc làm đã lưu',
                icon: FaRegHeart
            },
            {
                id: 'cong-ty',
                path: '/cong-ty',
                label: 'Danh sách công ty',
                icon: FaBuilding
            },
        ]
    },
    {
        id: 'ho-so-cv',
        path: '/quan-ly-cv',
        label: 'Hồ sơ & CV',
        children: [
            {
                id: 'tao-cv',
                path: '/tao-cv',
                label: 'Tạo CV',
                icon: FaRegIdBadge
            },
            {
                id: 'tai-cv',
                path: '/tai-cv',
                label: 'Tải CV lên',
                icon: FaArrowUpFromBracket
            },
            {
                id: 'tao-cover-letter',
                path: '/tao-cover-letter',
                label: 'Tạo Cover Letter',
                icon: FaRegFileLines
            },
            {
                id: 'quan-ly-cv',
                path: '/quan-ly-cv',
                label: 'Quản lý CV',
                icon: FaRegIdBadge
            },
            {
                id: 'quan-ly-cover-letter',
                path: '/quan-ly-cover-letter',
                label: 'Quản lý Cover Letter',
                icon: FaRegFileLines
            },
        ]
    },
    {
        id: 'blog',
        path: '/blog',
        label: 'Cẩm nang nghề nghiệp',
        children: [
            {
                id: 'huong-nghiep',
                path: '/blog/huong-nghiep',
                label: 'Định hướng nghề nghiệp',
                icon: FaBandcamp
            },
            {
                id: 'bi-kip-tim-viec',
                path: '/blog/bi-kip-tim-viec',
                label: 'Bí kíp tìm việc',
                icon: FaMagnifyingGlass
            },
            {
                id: 'hanh-trang-nghe-nghiep',
                path: '/blog/hanh-trang-nghe-nghiep',
                label: 'Hành trang nghề nghiệp',
                icon: FaBriefcase
            },
            {
                id: 'xu-huong',
                path: '/blog/xu-huong',
                label: 'Thị trường và xu hướng tuyển dụng',
                icon: FaChartColumn
            },
        ]
    },
]

export const USERDROPDOWNLINKS: NavLinkType[] = [
    {
        id: 'viec-lam-da-luu',
        path: '/viec-lam-da-luu',
        label: 'Việc làm đã lưu',
        icon: FaRegHeart
    },
    {
        id: 'cai-dat-thong-tin-ca-nhan',
        path: '/cai-dat-thong-tin-ca-nhan',
        label: 'Cài đặt thông tin cá nhân',
        icon: FaPenToSquare
    },
    {
        id: 'doi-mat-khau',
        path: '/doi-mat-khau',
        label: 'Đổi mật khẩu',
        icon: FaShieldHalved
    }
]