import { Link } from "react-router-dom"
import { Company } from "../../types/company"
import { cn } from "../../utils/cn"
import TrustedContent from "../trusted-content/TrustedContent"

export type CompanyItemProps = {
    company: Company
    className?: string
}

const CompanyItem = ({ company, className } : CompanyItemProps) => {

    return (
        <Link to={`/cong-ty/${company.id}`} className={cn(
            "group relative flex flex-col items-center justify-center bg-white shadow-md hover:shadow-lg rounded-lg transition-all",
            className
        )}>
            <img
                src={company.cover_photo}
                alt={company.name}
                className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4 mt-8 w-full">
                <h3 className="text-xl font-medium group-hover:text-primary mb-3">{company.name}</h3>
                <TrustedContent
                    content={company.description}
                    className="line-clamp-5 text-gray-500"
                />
            </div>
            <div className="absolute rounded-lg left-4 top-28 p-2 bg-white border">
                <img
                    src={company.logo}
                    alt={company.name}
                    className="size-16 rounded-md object-cover"
                />
            </div>
        </Link>
    )
}

export default CompanyItem