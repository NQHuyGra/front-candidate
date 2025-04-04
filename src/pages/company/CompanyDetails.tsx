import { useParams } from "react-router-dom"
import ContactInformation from "../../shared/components/company/ContactInformation"
import CompanyIntroduction from "../../shared/components/company/CompanyIntroduction"
import RecruitmentNews from "../../shared/components/company/RecruitmentNews"
import CompanyCover from "../../shared/components/company/CompanyCover"
import { Company } from "../../shared/types/company"

const CompanyDetails = () => {

    const { companyId } = useParams()
    const company = COMPANY

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full">
                <CompanyCover
                    company={company}
                />
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="w-full lg:w-2/3">
                        {!!company.description && <CompanyIntroduction
                            description={company.description}
                        />}
                        <RecruitmentNews
                            companyId={company.id}
                        />
                    </div>
                    <div className="w-full lg:w-1/3">
                        {!!company.location && <ContactInformation
                            address={company.location}
                        />}
                    </div>
                </div>
            </section>
        </main> 
    )
}

export default CompanyDetails

const COMPANY : Company = {
    id: "1",
    name: "Nhà Máy Sữa Đậu Nành Vinasoy Bắc Ninh (VNB)",
    logo: "https://cdn-new.topcv.vn/unsafe/140x/https://static.topcv.vn/company_logos/55cdb8ef260ccf7110f83d007d631414-5fd3174105f21.jpg",
    cover_photo: "https://cdn-new.topcv.vn/unsafe/https://static.topcv.vn/company_covers/d80db12281d056083300800956930e7d-5fd317509ab5e.jpg",
    location: "Đường TS5. KCN Tiên Sơn. Đồng Nguyên, Từ Sơn, Bắc Ninh",
    description: "ABCDXYZ",
    website: "https://vinasoycorp.vn/",
    size: "500 - 1000"
}