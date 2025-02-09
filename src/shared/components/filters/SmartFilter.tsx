import { Select } from "antd";
import { useRef, useState } from "react";
import { SMART_FILTER_OPTIONS } from "./smartFilterOptions";
import { cn } from "../../utils/cn";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export type SmartFilterType = {
    type: "city" | "salary" | "exp" | "category";
    value: string | number;
}

interface SmartFilterProps {
    value: SmartFilterType;
    onFilterChange: (filter: SmartFilterType) => void;
}

const FILTER_OPTIONS = [
    {value: "city", label: "Địa điểm"},
    {value: "salary", label: "Mức lương"},
    {value: "exp", label: "Kinh nghiệm"},
    {value: "category", label: "Ngành nghề"}
]

export default function SmartFilter({ value, onFilterChange }: SmartFilterProps) {
    const [filter, setFilter] = useState(value);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const scrollToStart = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: 0,
                behavior: "smooth",
            });
        }
    };

    const scrollToEnd = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                left: containerRef.current.scrollWidth,
                behavior: "smooth",
            });
        }
    };

    const handleTypeChange = (value: string) => {
        const newFilter = {type: value as SmartFilterType["type"], value: SMART_FILTER_OPTIONS[value as SmartFilterType["type"]][0].value};
        setFilter(newFilter);
        onFilterChange(newFilter);
    }

    const handleOptionChange = (value: string | number) => {
        const newFilter = {...filter, value};
        setFilter(newFilter);
        onFilterChange(newFilter);
    }

    return (
        <div className="flex flex-col sm:flex-row py-3 gap-6 sm:items-center">
            <Select
                value={filter.type}
                onChange={handleTypeChange}
                style={{ minWidth: 200 }}
                options={FILTER_OPTIONS.map(option => ({
                    label: <span className="text-gray-900 font-medium text-md">{option.label}</span>, 
                    value: option.value
                }))}
                labelRender={(option) => <span className="text-gray-500 font-medium">Lọc theo: {option.label}</span>}
            />
            <div className="flex flex-1 min-w-0 gap-3 items-center">
                <button onClick={scrollToStart} className="p-2 rounded-full ring-1 ring-primary text-primary shrink-0">
                    <FaChevronLeft />
                </button>
                <div
                    ref={containerRef}
                    className="flex min-w-0 gap-3 flex-1 overflow-x-auto flex-nowrap scrollbar-hide"
                >
                    {SMART_FILTER_OPTIONS[filter.type].map((options) => 
                        <label key={options.value} className={cn(
                            "flex items-center gap-2 py-2 px-5 rounded-full text-md font-medium text-gray-900 bg-gray-100 whitespace-nowrap",
                            filter.value === options.value && "bg-primary text-white"
                        )}>
                            <input
                                type="radio"
                                onChange={() => handleOptionChange(options.value)}
                                name={filter.type}
                                className="hidden"
                            />
                            {options.label}
                        </label>
                    )}
                </div>
                <button onClick={scrollToEnd} className="p-2 rounded-full ring-1 ring-primary text-primary shrink-0">
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
}