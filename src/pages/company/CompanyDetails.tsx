import { useParams } from "react-router-dom"
import ContactInformation from "../../shared/components/company/ContactInformation"
import CompanyIntroduction from "../../shared/components/company/CompanyIntroduction"
import RecruitmentNews from "../../shared/components/company/RecruitmentNews"
import CompanyCover from "../../shared/components/company/CompanyCover"
import { Company } from "../../shared/types/company"
import { useQuery } from "@tanstack/react-query"
import { fetchCompanyById } from "../../shared/apis/companyApi"

const CompanyDetails = () => {

    const { companyId } = useParams()
    const { data } = useQuery({
        queryKey: ['company', companyId],
        queryFn: () => fetchCompanyById(companyId as string),
        enabled: !!companyId,
        retry: false,
    })

    if (!data?.result) {
        return (
            <main className="container mx-auto py-5 px-3">
                <section className="w-full">
                    <div className="flex justify-center items-center h-[400px]">
                        <h1 className="text-2xl font-bold">Không tìm thấy công ty</h1>
                    </div>
                </section>
            </main>
        )
    }

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full">
                <CompanyCover
                    company={data?.result}
                />
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="w-full lg:w-2/3">
                        {!!data?.result.description && <CompanyIntroduction
                            description={data?.result.description}
                        />}
                        <RecruitmentNews
                            companyId={data?.result.id}
                        />
                    </div>
                    <div className="w-full lg:w-1/3">
                        {!!data?.result.address && <ContactInformation
                            address={data?.result.address}
                        />}
                    </div>
                </div>
            </section>
        </main> 
    )
}

export default CompanyDetails