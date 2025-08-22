import styles from "./Actions.module.scss";

import { useState, useEffect } from "react";
import { useAuthValue } from "../../../../auth/hooks/useAuthValue";
import { NavLink } from "react-router";
import { UserDropdown } from "./UserDropdown/UserDropdown";

import { SunIcon } from "../../Icons/SunIcon";
import { MoonIcon } from "../../Icons/MoonIcon";
import { UserIcon } from "../../Icons/UserIcon";

export function Actions() {
    const { user } = useAuthValue();

    const themeLocalStorage = localStorage.getItem("theme") === "dark";
    const [isOn, setIsOn] = useState(themeLocalStorage);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const theme = isOn ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [isOn]);

    const userName = user?.displayName;
    let userNameFirstLetter;
    let userEmail;

    if (userName) {
        userNameFirstLetter = userName.split(" ")[0][0].toUpperCase();
        userEmail = user.email;
    }

    return (
        <>
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

                {user && (
                    <>
                        <ul className={styles.loggedButtons}>
                            <li>
                                <button className={styles.user} onClick={() => setIsOpen((prev) => !prev)}>
                                    <span>{userNameFirstLetter}</span>
                                    <UserIcon />
                                </button>
                            </li>
                        </ul>
                    </>
                )}
            </div>
            {user && <UserDropdown name={userName ?? ""} email={userEmail ?? ""} isOpen={isOpen} />}
        </>
    );
}
