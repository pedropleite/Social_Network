import styles from "./Nav.module.scss";

import { NavLink } from "react-router";
import { useAuthValue } from "../../../../auth/hooks/useAuthValue";

interface Link {
    url: string;
    label: string;
    onlyAuth?: boolean | null;
}

const links: Link[] = [
    { url: "/sobre", label: "Meu feed", onlyAuth: true },
    { url: "/sobre", label: "Meus momentos", onlyAuth: true },
    { url: "/", label: "Explorar", onlyAuth: false },
    { url: "/sobre", label: "Sobre", onlyAuth: null },
];

interface NavProps {
    mobile?: boolean;
}

export function Nav({ mobile = false }: NavProps) {
    const { user } = useAuthValue();

    return (
        <nav className={styles.container}>
            {mobile && <span>Navegação</span>}
            <ul className={`${styles.nav}`}>
                {links.map(({ url, label, onlyAuth = false }) => {
                    if ((onlyAuth === true && !user) || (onlyAuth === false && user)) return null;

                    return (
                        <li key={label} className={styles.item}>
                            <NavLink
                                to={url}
                                className={({ isActive }) => `${styles.button} ${isActive ? styles.active : ""}`}
                            >
                                {label}
                                <div className={styles.underlineEffect} />
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
