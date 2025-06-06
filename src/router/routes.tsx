import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout.js";
import JobNews from "../pages/jobs/JobNews.js";
import SavedJobs from "../pages/jobs/SavedJobs.js";
import ProtectedRoute from "../shared/components/ProtectedRoute.js";
const SearchJob = lazy(() => import("../pages/jobs/SearchJob.js"))
const JobDetails = lazy(() => import("../pages/jobs/JobDetails.js"))
const Companies = lazy(() => import("../pages/company/Companies.js"))
const CompanyDetails = lazy(() => import("../pages/company/CompanyDetails.js"))
const UpdateInformation = lazy(() => import("../pages/user-info/UpdateInformation.js"))
const AddProfile = lazy(() => import("../pages/profile/AddProfile.js"))
const Profiles = lazy(() => import("../pages/profile/Profiles.js"))
const UpdateProfile = lazy(() => import("../pages/profile/UpdateProfile.js"))
const AppliedJobs = lazy(() => import("../pages/jobs/AppliedJobs.js"))

export const routes = [
    { 
        id: 'index',
        path: '/',
        element: <Layout/>,
        children: [
            {
                id: 'home',
                index: true,
                element: <Navigate to={'/viec-lam'}/>
            },
            {
                id: 'viec-lam',
                path: 'viec-lam',
                element: <JobNews/>
            },
            {
                id: 'chi-tiet-cong-viec',
                path: 'viec-lam/:jobId',
                element: <JobDetails/>
            },
            {
                id: 'tim-viec-lam',
                path: 'tim-viec-lam',
                element: <SearchJob/>
            },
            {
                id: 'viec-lam-da-luu',
                path: 'viec-lam-da-luu',
                element: <SavedJobs/>
            },
            {
                id: 'viec-lam-da-ung-tuyen',
                path: 'viec-lam-da-ung-tuyen',
                element: <ProtectedRoute>
                        <AppliedJobs />
                    </ProtectedRoute>
                // element: <AppliedJobs/>
            },
            {
                id: 'cong-ty',
                path: 'cong-ty',
                element: <Companies/>
            },
            {
                id: 'chi-tiet-cong-ty',
                path: 'cong-ty/:companyId',
                element: <CompanyDetails/>
            },
            {
                id: 'thong-tin-ca-nhan',
                path: 'thong-tin-ca-nhan',
                element: <ProtectedRoute>
                        <UpdateInformation />
                    </ProtectedRoute>
            },
            {
                id: 'tao-ho-so',
                path: 'tao-ho-so',
                element: <ProtectedRoute>
                        <AddProfile />
                    </ProtectedRoute>
                // element: <AddProfile />
            },
            {
                id: 'ho-so-ung-vien',
                path: 'ho-so-ung-vien',
                element: <ProtectedRoute>
                        <Profiles />
                    </ProtectedRoute>
                // element: <Profiles />
            },
            {
                id: 'cap-nhat-ho-so',
                path: 'cap-nhat-ho-so/:profileId',
                element: <ProtectedRoute>
                        <UpdateProfile />
                    </ProtectedRoute>
                // element: <UpdateProfile />
            }
        ]
    }
]