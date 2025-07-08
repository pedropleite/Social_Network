import { NavLink } from 'react-router';

import { Burguer } from './Burger/Burger';

import styles from './Header.module.scss';
import { SwitchButton } from './SwitchButton/SwitchButton';

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
                <Burguer />
                <SwitchButton />
            </div>
        </header>
    );
}
