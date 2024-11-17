import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import moonIcon from "/moon.svg";
import moonIconDarkMode from "/moon-dark-mode.svg";
import { useDarkMode } from "../context/darkModeContext";


const Navbar = () => {
    const {darkMode, toggleDarkMode} = useDarkMode();

    const onClick = () => {
        toggleDarkMode();
    }

    const onKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
    }

    return (
        <nav className={`${styles.mainNav} ${darkMode && styles.mainNavDarkMode}`}>
            <div className={`container ${styles.flex}`}>
                <Link className={`link ${styles.logo}`} to="/">Where in the world?</Link>
                <div className={`${styles.flex} ${styles.modeChanger}`} role="button" tabIndex={0} onClick={onClick} onKeyDown={onKeyDown}>
                    <img className={styles.img} src={darkMode ? moonIconDarkMode : moonIcon } alt="Moon" />
                    <p className={styles.txt}>Dark Mode</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;