import styles from "./ExplorePage.module.scss";

import { Showcase } from "../../components/Showcase/Showcase";

export function ExplorePage() {
    return (
        <div className={styles.container}>
            <div className={styles.explore}>
                <Showcase />
            </div>
        </div>
    );
}
