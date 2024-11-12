import { FilterType } from "../types";
import styles from "./FilterBar.module.css";


type FilterBarProps = {
    filterCountriesByName: (searchValue: string) => void,
}
const FilterBar = (props: FilterBarProps) => {
    return (
        <div className={`container ${styles.filterBar}`}>
            <input className={styles.input} type="text" placeholder="Search for a country..." onChange={(e) => props.filterCountriesByName(e.target.value)}/>
            <select className={styles.dropdown}>
                <option hidden value="">Filter by Region</option>
                <option value={FilterType.africa}>{FilterType.africa}</option>
                <option value={FilterType.americas}>{FilterType.americas}</option>
                <option value={FilterType.asia}>{FilterType.asia}</option>
                <option value={FilterType.europe}>{FilterType.europe}</option>
                <option value={FilterType.oceania}>{FilterType.oceania}</option>
            </select>
        </div>
    )
}

export default FilterBar;