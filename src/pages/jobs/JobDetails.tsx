import { useParams } from "react-router-dom"

const JobDetails = () => {

    const { jobId } = useParams()

    return (
        <>JobDetails - {jobId}</>
    )
}

export default JobDetails