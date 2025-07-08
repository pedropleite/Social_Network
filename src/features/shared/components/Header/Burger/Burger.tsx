import { useState } from 'react';
import styles from './Burger.module.scss';

import { RightNav } from '../RightNav/RightNav';

export function Burger() {
    const [open, setOpen] = useState(false);

    function handleModal() {
        setOpen(prev => !prev);
    };

    return (
        <>
            <div onClick={handleModal} className={`${styles.burger} ${open ? styles.open : undefined}`}>
                <span className={`${styles.line} ${open ? styles.rotate1 : undefined}`}/>
                <span className={`${styles.line} ${open ? styles.hidden : undefined}`}/>
                <span className={`${styles.line} ${open ? styles.rotate2 : undefined}`}/>
            </div>
            <RightNav open={open} handleModal={handleModal} />
        </>
    );
};