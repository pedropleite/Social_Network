import styles from "./Actions.module.scss";

import { useState, useEffect } from "react";
import { useAuthValue } from "../../../../auth/hooks/useAuthValue";
import { NavLink } from "react-router";
import { SunIcon } from "../../Icons/SunIcon";
import { MoonIcon } from "../../Icons/MoonIcon";
import { useAuthentication } from "../../../../auth/hooks/useAuthentication";

export function Actions() {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    const themeLocalStorage = localStorage.getItem("theme") === "dark";
    const [isOn, setIsOn] = useState(themeLocalStorage);

    useEffect(() => {
        const theme = isOn ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [isOn]);

    return (
        <div className={styles.actions}>
            <div className={styles.switch}>
                <SunIcon />
                <button
                    type="button"
                    role="switch"
                    onClick={() => setIsOn((prev) => !prev)}
                    className={`${styles.wrapper} ${isOn ? styles.on : styles.off}`}
                >
                    <div className={`${styles.circle}`} />
                </button>
                <MoonIcon />
            </div>

            {!user && (
                <ul className={styles.authButtons}>
                    <li className={styles.login}>
                        <NavLink to={"/login"}>Entrar</NavLink>
                    </li>
                    <li className={styles.register}>
                        <NavLink to={"/register"}>Cadastrar</NavLink>
                    </li>
                </ul>
            )}

            {/* {user && (
                <li className={styles.item}>
                    <button onClick={logout} className={styles.logoutButton}>
                        Logout
                    </button>
                </li>
            )} */}
        </div>
    );
}
