import { FaHeart, FaRegHeart } from 'react-icons/fa6';
import { Job } from '../../types/job';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

interface JobItemProps {
    className?: string;
    job: Job;
}

const JobItem = ({className, job}: JobItemProps) => {

    return (
        <div className={cn(
                "job-item group rounded-xl p-3 border hover:border-primary transition-all",
                className
            )}>
                    <div className="flex gap-3 mb-2">
                        <Link to={`/companies/${job.company.id}`}>
                            <div className="company-logo size-16 rounded-md p-2 border">
                                <img
                                    src={job.company.logo}
                                    alt={job.company.name}
                                    className="size-full"
                                    loading="lazy"/>
                            </div>
                        </Link>
                        <div className="job-item-title">
                            <h3>
                                <Link to={`/viec-lam/${job.id}`}>
                                    <strong className="job-title text-md font-semibold hover:underline group-hover:text-primary transition-all line-clamp-2">{job.title}</strong>
                                </Link>
                            </h3>
                            <Link to={`/cong-ty/${job.id}`}>
                                <span className="company-name text-sm text-gray-500 font-medium line-clamp-1">{job.company.name}</span>
                            </Link>
                        </div>
                    </div>
                    <div className="job-item-footer flex justify-between items-center">
                        <div className="job-info flex gap-2 items-center">
                            <div className="job-salary py-1 px-3 bg-gray-200 rounded-full text-[13px] text-gray-900 font-medium">{job.salary}</div>
                            <div className="job-location  py-1 px-3 bg-gray-200 rounded-full text-[13px] text-gray-900 font-medium">{job.location}</div>
                        </div>
                        <div className="job-like">
                            <button
                                className="text-primary border-2 border-primary size-8 rounded-full place-items-center"
                            >
                                {job.liked ? <FaHeart /> : <FaRegHeart />}
                            </button>
                        </div>
                    </div>
                </div>
    )
}

export default JobItem;