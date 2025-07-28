import styles from "./Logo.module.scss";

import { NavLink } from "react-router";
import { UsersIcon } from "../../Icons/UsersIcon";

export function Logo() {
    return (
        <div className={styles.logo}>
            <NavLink to="/">
                <div className={styles.icon}>
                    <span></span>
                    <UsersIcon />
                </div>
                <span className={styles.title}>SOCIAL</span>
                <span className={styles.version}>Beta</span>
            </NavLink>
        </div>
    )
}