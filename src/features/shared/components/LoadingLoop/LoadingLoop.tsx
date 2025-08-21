import "./LoadingLoop.module.scss";

import styles from "./LoadingLoop.module.scss";

export function LoadingLoop() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.spinner} />
        </div>
    );
}
