import { useParams } from "react-router-dom"

const CompanyDetails = () => {

    const { companyId } = useParams()

    return (
        <>CompanyDetails - { companyId }</>
    )
}

export default CompanyDetails