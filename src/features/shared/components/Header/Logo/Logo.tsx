import styles from "./Logo.module.scss";

import { UsersIcon } from "../../Icons/UsersIcon";

export function Logo() {
    return (
        <div className={styles.logo}>
            <div>
                <div className={styles.icon}>
                    <span></span>
                    <UsersIcon />
                </div>
                <div className={styles.title}>
                    <h1>Momentos</h1>
                    <span>Compartilhe sua vida</span>
                </div>
            </div>
        </div>
    );
}
