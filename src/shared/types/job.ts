import { Company } from "./company"

export type Job = {
    id: string;
    title: string;
    description: string;
    benefit: string;
    location: string[];
    location_details: string;
    salary: number;
    salary_details: string;
    category: number;
    deadline: Date;
    exp: number;
    form_of_work: number;
    gender: number;
    job_field: number;
    number_of_recruits: number;
    rank: number;
    requirement: string;
    company: Company;
}

export type JobFilterRequest = {
    search: string,
    location: string,
    category: number,
    job_field: number,
    company_field: number,
    salary: number,
    exp: number,
    rank: number,
    form_of_work: number,
}