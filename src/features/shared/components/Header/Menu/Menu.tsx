import styles from "./Menu.module.scss";

import { Actions } from "../Actions/Actions";
import { Nav } from "../Nav/Nav";
import { createPortal } from "react-dom";
import { useAuthValue } from "../../../../auth/hooks/useAuthValue";
import { Divider } from "../../Divider/Divider";

interface MenuProps {
    isOpen: boolean;
    onClose: () => void;
}

export function Menu({ isOpen, onClose }: MenuProps) {
    const rootElement = document.querySelector("#root") ?? document.body;
    const { user } = useAuthValue();

    return createPortal(
        <div className={styles.container} data-state={isOpen ? "open" : "close"} aria-hidden={!isOpen} role="menu">
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
                        <Divider />
                        <Divider className="order-2" />
                    </>
                )}
                <Actions mobile={true} />
            </div>
        </div>,
        rootElement,
    );
}
