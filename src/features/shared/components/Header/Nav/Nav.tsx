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

    const filteredLinks = links.filter(({ onlyAuth }) => {
        if (onlyAuth === true && !user) return false;
        if (onlyAuth === false && user) return false;
        return true;
    });

    return (
        <nav className={styles.container}>
            {mobile && <span>Navegação</span>}
            <ul className={`${styles.nav}`}>
                {filteredLinks.map(({ url, label }) => (
                    <li key={label} className={styles.item}>
                        <NavLink
                            to={url}
                            className={({ isActive }) => `${styles.button} ${isActive ? styles.active : ""}`}
                        >
                            {label}
                            <div className={styles.underlineEffect} />
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
