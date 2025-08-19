import styles from './Nav.module.scss';

import { NavLink } from 'react-router';
import { useAuthValue } from '../../../../auth/hooks/useAuthValue';

// { url: '/post/create', label: 'New Post', onlyAuth: true },
// { url: '/dashboard', label: 'Dashboard', onlyAuth: true },

interface Link {
    url: string
    label: string
    onlyAuth?: boolean
}

const links: Link[] = [
    { url: '/', label: 'Explorar' },
    { url: '/sobre', label: 'Sobre' },
];

export function Nav() {
    const { user } = useAuthValue();

    return (
        <div>
            <ul className={`${styles.Nav}`}>
                {links.map(({ url, label, onlyAuth = false }) => {
                    if ((onlyAuth === true && !user) || (onlyAuth === false && user)) return null;

                    return (
                        <li key={label} className={styles.item}>
                            <NavLink to={url} className={({ isActive }) =>`${styles.button} ${isActive ? styles.active : ''}`}>
                                {label}
                                <div className={styles.underlineEffect} />
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};