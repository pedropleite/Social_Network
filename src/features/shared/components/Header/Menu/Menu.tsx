import styles from "./Menu.module.scss";

import { Actions } from "../Actions/Actions";
import { Nav } from "../Nav/Nav";
import { createPortal } from "react-dom";
import { useAuthValue } from "../../../../auth/hooks/useAuthValue";

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function Menu({ isOpen = false, onClose }: MenuProps) {
    const rootElement = document.querySelector("#root") ?? document.body;
    const { user } = useAuthValue();

    return createPortal(
        <div className={styles.container} data-state={isOpen ? "open" : "close"} aria-hidden={!isOpen}>
            <div className={styles.menu}>
                <div className={styles.nav}>
                    <div className={styles.close}>
                        <span>Menu de navegação</span>
                        <button onClick={onClose}>X</button>
                    </div>
                    <Nav mobile={true} />
                </div>
                {user && (
                    <>
                        <div className="borderDefault"></div>
                        <div className="borderDefault order-2"></div>
                    </>
                )}
                <Actions mobile={true} />
            </div>
        </div>,
        rootElement,
    );
}
