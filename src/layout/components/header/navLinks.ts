import { IconType } from "react-icons"
import { FaBandcamp, FaBriefcase, FaBuilding, FaChartColumn, FaMagnifyingGlass, FaPenToSquare, FaRegHeart, FaRegIdBadge, FaShieldHalved } from "react-icons/fa6"

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
                id: 'viec-lam-da-luu',
                path: '/viec-lam-da-luu',
                label: 'Việc làm đã lưu',
                icon: FaRegHeart
            },
            {
                id: 'viec-lam-da-ung-tuyen',
                path: '/viec-lam-da-ung-tuyen',
                label: 'Việc làm đã ứng tuyển',
                icon: FaBriefcase
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
        path: '/ho-so-ung-vien',
        label: 'Hồ sơ',
        children: [
            {
                id: 'tao-ho-so',
                path: '/tao-ho-so',
                label: 'Tạo hồ sơ',
                icon: FaRegIdBadge
            },
            {
                id: 'quan-ly-ho-so',
                path: '/ho-so-ung-vien',
                label: 'Quản lý hồ sơ',
                icon: FaRegIdBadge
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
        id: 'viec-lam-da-ung-tuyen',
        path: '/viec-lam-da-ung-tuyen',
        label: 'Việc làm đã ứng tuyển',
        icon: FaBriefcase
    },
    {
        id: 'thong-tin-ca-nhan',
        path: '/thong-tin-ca-nhan',
        label: 'Cài đặt thông tin cá nhân',
        icon: FaPenToSquare
    },
    {
        id: 'ho-so-ung-vien',
        path: '/ho-so-ung-vien',
        label: 'Hồ sơ ứng viên',
        icon: FaRegIdBadge
    },
    {
        id: 'doi-mat-khau',
        path: '/doi-mat-khau',
        label: 'Đổi mật khẩu',
        icon: FaShieldHalved
    }
]