import { useState } from "react"
import SmartFilter, { SmartFilterType } from "../../shared/components/filters/SmartFilter"
import JobItem from "../../shared/components/job/JobItem"

const JobNews = () => {

    const [filter, setFilter] = useState<SmartFilterType>({
        type: "city",
        value: "Hà Nội"
    })

    console.log(filter)

    return (
        <>
            <SmartFilter value={filter} onFilterChange={setFilter} />
            <div className="job-container flex gap-4">
                {JOBS.map(job  => <JobItem job={job} key={job.id} />)}
            </div>
            <div className="job-pagination"></div>
        </>
    )
}

export default JobNews

const JOBS = [
    {
        id: "1",
        title: "Frontend Developer",
        company: {
            id: "1",
            name: "Google",
            logo: "https://via.placeholder.com/150"
        },
        salary: "20 - 30 triệu",
        location: "Hà Nội",
        liked: true
    },
    {
        id: "2",
        title: "Backend Developer",
        company: {
            id: "2",
            name: "Facebook",
            logo: "https://via.placeholder.com/150"
        },
        salary: "20 - 30 triệu",
        location: "Hồ Chí Minh",
        liked: false
    }
]