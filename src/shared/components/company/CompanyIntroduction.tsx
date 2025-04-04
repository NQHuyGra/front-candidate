import TrustedContent from "../trusted-content/TrustedContent"

type CompanyIntroductionProps = {
    description: string
}

const CompanyIntroduction = ({ description }: CompanyIntroductionProps) => {

    return (
        <div className="w-full rounded-lg border p-4 mb-4">
            <h1 className="text-xl font-medium text-gray-800 mb-3">Giới thiệu công ty</h1>
            <TrustedContent
                content={description}
                className="text-gray-800"
            />
        </div>
    )
}

export default CompanyIntroduction