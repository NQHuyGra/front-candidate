import { Link } from "react-router-dom"
import useSavedJobs from "../../shared/hooks/useStoredJobs"

const SavedJobs = () => {

    const { savedJobs } = useSavedJobs()

    return (
        <main className="container mx-auto py-5 px-3">
            <section className="w-full">
                <h1 className="text-primary font-bold text-2xl">Việc làm đã lưu</h1>
                {savedJobs.length === 0 ? (
                    <div className="py-20 flex flex-col gap-3 items-center justify-center">
                        <p className="text-gray-800">Bạn chưa lưu công việc nào!</p>
                        <Link
                            to="/tim-viec-lam"
                            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors duration-200">
                                Tìm việc ngay
                        </Link>
                    </div>
                ) : (
                    <></>
                )}
            </section>
        </main>
    )
}

export default SavedJobs