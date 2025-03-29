import { Company } from "./company"

export type Job = {
    id: string
    title: string
    company: Company
    salary: string
    location: string
}