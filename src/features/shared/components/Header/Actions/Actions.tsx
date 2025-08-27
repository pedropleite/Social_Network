import styles from "./Actions.module.scss";

import { useState } from "react";
import { useAuthValue } from "../../../../auth/hooks/useAuthValue";
import { UserIcon } from "../../Icons/UserIcon";

import { UserDropdown } from "./UserDropdown/UserDropdown";
import { AuthButtons } from "./AuthButtons/AuthButtons";
import { ThemeSwitch } from "./ThemeSwitch/ThemeSwitch";

interface ActionsProps {
    mobile?: boolean;
}

export function Actions({ mobile = false }: ActionsProps) {
    const { user } = useAuthValue();

    const [isOpen, setIsOpen] = useState(false);

    const userName = user?.displayName;
    const userNameFirstLetter = user?.displayName?.split(" ")[0][0].toUpperCase() ?? "";
    const userEmail = user?.email ?? "";

    return (
        <>
            <div className={styles.actions}>
                <ThemeSwitch mobile={mobile} />

                {!user && <AuthButtons />}

                {user && !mobile && (
                    <ul className={styles.loggedButtons}>
                        <li>
                            <button className={styles.user} onClick={() => setIsOpen((prev) => !prev)}>
                                <span>{userNameFirstLetter}</span>
                                <UserIcon />
                            </button>
                        </li>
                    </ul>
                )}
            </div>
            {user && <UserDropdown name={userName ?? ""} email={userEmail ?? ""} isOpen={isOpen} mobile={mobile} />}
        </>
    );
}
