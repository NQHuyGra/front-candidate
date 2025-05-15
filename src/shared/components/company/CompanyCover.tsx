import { Link } from "react-router-dom"
import { Company } from "../../types/company"
import { FaBuilding, FaGlobe } from "react-icons/fa6"

type CompanyCoverProps = {
    company: Company
}

const CompanyCover = ({ company }: CompanyCoverProps) => {

    return (
        <div className="relative w-full rounded-lg border mb-4">
            <img
                src={company.cover_photo}
                alt={company.name}
                className="object-cover w-full h-44 rounded-t-lg"
            />
            <div className="mt-20 lg:mt-4 w-full p-4 lg:pl-44">
                <h1 className="text-xl font-bold text-gray-800 mb-3">{company.name}</h1>
                <div className="flex gap-4 flex-wrap items-center text-gray-800">
                    {company.website && <Link
                        className="flex items-center gap-2 hover:underline"
                        to={company.website}>
                            <FaGlobe />
                            {company.website}
                    </Link>}
                    <div className="flex items-center gap-2">
                        <FaBuilding />
                        {company.size} nhân viên
                    </div>
                </div>
            </div>
            <img
                src={company.logo_url}
                alt={company.name}
                className="absolute size-36 object-cover border rounded-lg left-4 top-28 lg:top-32"
            />
        </div>
    )
}

export default CompanyCover