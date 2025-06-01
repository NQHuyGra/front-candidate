import { CATEGORIES } from "../../constants/category";
import { CITIES } from "../../constants/city";
import { EXP } from "../../constants/exp";
import { SALARY } from "../../constants/salary";

export const SMART_FILTER_OPTIONS = {
    location: CITIES.map((city) => ({value: city, label: city})),
    salary: SALARY.map((salary) => ({value: salary.id, label: salary.name})),
    exp: EXP.map((exp) => ({value: exp.id, label: exp.name})),
    category: CATEGORIES.map((category) => ({value: category.id, label: category.name}))
}