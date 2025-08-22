import styles from "./UserDropdown.module.scss";

import { NavLink } from "react-router";
import { LogoutIcon } from "../../../Icons/logoutIcon";
import { ConfigIcon } from "../../../Icons/ConfigIcon";
import { useAuthentication } from "../../../../../auth/hooks/useAuthentication";

interface UserDropdownProps {
    name: string;
    email: string;
    isOpen: boolean;
}

export function UserDropdown({ name, email, isOpen }: UserDropdownProps) {
    const { logout } = useAuthentication();

    return (
        <div className={styles.dropdown} data-state={isOpen ? "open" : "closed"} aria-hidden={!isOpen}>
            <div className={styles.user}>
                <p>{name}</p>
                <p>{email}</p>
            </div>
            <div className={styles.links}>
                <NavLink to="/sobre">
                    <ConfigIcon />
                    Configurações
                </NavLink>
            </div>
            <div className={styles.logout}>
                <button onClick={logout}>
                    <LogoutIcon />
                    Sair
                </button>
            </div>
        </div>
    );
}
