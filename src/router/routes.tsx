import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Layout from "../layout/Layout.js";
import JobNews from "../pages/jobs/JobNews.js";
import SavedJobs from "../pages/jobs/SavedJobs.js";
const SearchJob = lazy(() => import("../pages/jobs/SearchJob.js"))
const JobDetails = lazy(() => import("../pages/jobs/JobDetails.js"))
const Companies = lazy(() => import("../pages/company/Companies.js"))
const CompanyDetails = lazy(() => import("../pages/company/CompanyDetails.js"))

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
                id: 'cong-ty',
                path: 'cong-ty',
                element: <Companies/>
            },
            {
                id: 'chi-tiet-cong-ty',
                path: 'cong-ty/:companyId',
                element: <CompanyDetails/>
            },
        ]
    }
]