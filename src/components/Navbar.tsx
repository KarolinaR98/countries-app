import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import moonIcon from "/moon.svg";

const Navbar = () => {

    return (
        <nav className={styles.mainNav}>
            <div className={`container ${styles.flex}`}>
                <Link className={styles.link} to="/">Where in the world?</Link>
                <div className={`${styles.flex} ${styles.modeChanger}`}>
                    <img className={styles.img} src={moonIcon} alt="Moon" />
                    <p className={styles.txt}>Dark Mode</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;