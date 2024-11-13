import { FilterType } from "../types";
import styles from "./FilterBar.module.css";


type FilterBarProps = {
    handleSearchValueChange: (value: string) => void,
    handleSelectedRegionChange: (value: string) => void
}
const FilterBar = (props: FilterBarProps) => {
    return (
        <div className={`container ${styles.filterBar}`}>
            <input className={styles.input} type="text" placeholder="Search for a country..." onChange={(e: React.ChangeEvent<HTMLInputElement>) => props.handleSearchValueChange(e.target.value)}/>
            <select className={styles.dropdown} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => props.handleSelectedRegionChange(e.target.value)}>
                <option hidden value="">Filter by Region</option>
                <option value="all">All</option>
                <option value={FilterType.africa}>{FilterType.africa}</option>
                <option value={FilterType.antarctic}>{FilterType.antarctic}</option>
                <option value={FilterType.americas}>{FilterType.americas}</option>
                <option value={FilterType.asia}>{FilterType.asia}</option>
                <option value={FilterType.europe}>{FilterType.europe}</option>
                <option value={FilterType.oceania}>{FilterType.oceania}</option>
            </select>
        </div>
    )
}

export default FilterBar;