import styles from "./ThemeSwitch.module.scss";

import { useEffect, useState } from "react";
import { SunIcon } from "../../../Icons/SunIcon";
import { MoonIcon } from "../../../Icons/MoonIcon";

interface ThemeSwitchProps {
    mobile: boolean;
}

export function ThemeSwitch({ mobile }: ThemeSwitchProps) {
    const themeLocalStorage = localStorage.getItem("theme") === "dark";
    const [isOn, setIsOn] = useState(themeLocalStorage);

    useEffect(() => {
        const theme = isOn ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [isOn]);

    return (
        <>
            {mobile && <span>Preferências</span>}
            <div className={styles.switch}>
                <SunIcon />
                {mobile && <span>Tema</span>}
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
        </>
    );
}
