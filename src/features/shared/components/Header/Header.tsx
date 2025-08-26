import styles from "./Header.module.scss";

import { Nav } from "./Nav/Nav";
import { Logo } from "./Logo/Logo";
import { Actions } from "./Actions/Actions";
import { Menu } from "./Menu/Menu";
import { useIsDesktop } from "../../hooks/useMediaQuesry";
import { useState } from "react";
import { MenuIcon } from "../Icons/MenuIcon";

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const isDesktop = useIsDesktop();

    return (
        <header className={styles.container}>
            <div className={styles.header}>
                <Logo />
                {isDesktop ? (
                    <>
                        <Nav />
                        <Actions />
                    </>
                ) : (
                    <>
                        <button className={styles.menuButton} onClick={() => setMenuOpen(true)} aria-label="Abrir menu">
                            <MenuIcon />
                        </button>

                        <Menu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
                    </>
                )}
            </div>
        </header>
    );
}
