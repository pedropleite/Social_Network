import styles from './Header.module.scss';

import { Nav } from './Nav/Nav';
import { Logo } from './Logo/Logo';
import { Actions } from './Actions/Actions';

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <Logo />
                <Nav />
                <Actions />
            </div>
        </header>
    );
}
