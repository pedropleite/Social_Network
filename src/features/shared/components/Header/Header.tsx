import { NavLink } from 'react-router';

import { Burger } from './Burger/Burger';
import { SwitchButton } from './SwitchButton/SwitchButton';

import styles from './Header.module.scss';

export function Header() {
    return (
        <header className={styles.header}>
            <NavLink to="/">
                <span className={styles.logo}>
                    So
                    <span className={styles['rotated-c']}>c</span>
                    ial
                </span>
            </NavLink>
            <div className={styles.actions}>
                <Burger />
                <SwitchButton />
            </div>
        </header>
    );
}
