import { NavLink } from 'react-router';
import { useAuthValue } from '../../../../auth/hooks/useAuthValue';
import { useAuthentication } from '../../../../auth/hooks/useAuthentication';

import styles from './RightNav.module.scss';

const links = [
    { url: '/', label: 'Home' },
    { url: '/login', label: 'Login', onlyAuth: false },
    { url: '/register', label: 'Register', onlyAuth: false },
    { url: '/post/create', label: 'New Post', onlyAuth: true },
    { url: '/dashboard', label: 'Dashboard', onlyAuth: true },
    { url: '/about', label: 'About' },
];

interface RightNavProps {
    open: boolean
    handleModal: () => void
}

export function RightNav({ open, handleModal }: RightNavProps) {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <ul className={`${styles.nav} ${open ? styles.open : undefined}`}>
            {links.map(({ url, label, onlyAuth }) => {
                if ((onlyAuth === true && !user) || (onlyAuth === false && user)) return null;
                
                return (
                    <li key={label} className={styles.item}>
                        <NavLink to={url} onClick={handleModal} className={({ isActive }) => `${styles.link} ${isActive ? styles.linkActive : ''}`}>
                            {label}
                        </NavLink>
                    </li>
                );
            })}

            {user && (
                <li className={styles.item}>
                    <button onClick={logout} className={styles.logoutButton}>
                        Logout
                    </button>
                </li>
            )}
        </ul>
    );
}
