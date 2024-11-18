import { Link, Outlet } from "react-router-dom";

import styles from "./styles.module.css";

function Layout() {
    return <>
        <nav className={styles.navbar}>
            <div>
                <Link to="/">Game</Link>
            </div>
            <div>
                <Link to="/profile">Profile</Link>
            </div>
            <div>
                <Link to="/pictures">Pictures</Link>
            </div>
        </nav>
        <Outlet/>
    </>
}

export default Layout;