import { useState, useEffect } from 'react';
import styles from './SwitchButton.module.scss';

export function SwitchButton() {
    const themeLocalStorage = localStorage.getItem('theme') === 'dark'
    const [isOn, setIsOn] = useState(themeLocalStorage);

    useEffect(() => {
        const theme = isOn ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [isOn]);

    return (
        <div onClick={() => setIsOn(prev => !prev)} className={`${styles.wrapper} ${isOn ? styles.on : styles.off}`}>
            <div className={styles.circle} />
        </div>
    );
}
