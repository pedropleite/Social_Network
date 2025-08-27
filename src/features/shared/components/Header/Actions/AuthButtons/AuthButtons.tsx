import styles from "./AuthButtons.module.scss";

import { NavLink } from "react-router";

export function AuthButtons() {
    return (
        <ul className={styles.authButtons}>
            <li className={styles.login}>
                <NavLink to={"/login"}>Entrar</NavLink>
            </li>
            <li className={styles.register}>
                <NavLink to={"/register"}>Cadastrar</NavLink>
            </li>
        </ul>
    );
}
