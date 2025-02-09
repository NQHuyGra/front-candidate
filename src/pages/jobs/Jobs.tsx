import { useState } from "react"
import SmartFilter, { SmartFilterType } from "../../shared/components/filters/SmartFilter"

const Jobs = () => {

    const [filter, setFilter] = useState<SmartFilterType>({
        type: "city",
        value: "Hà Nội"
    })

    console.log(filter)

    return (
        <>
            <SmartFilter value={filter} onFilterChange={setFilter} />
        </>
    )
}

export default Jobs