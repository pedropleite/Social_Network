import styles from './Header.module.scss';

import { Links } from './Links/Links';
import { Logo } from './Logo/Logo';
import { Switch } from './Switch/Switch';

export function Header() {
    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <Logo />
                <Links />
                <Switch />
            </div>
        </header>
    );
}
