import { useState } from 'react';
import styles from './Links.module.scss';

import { RightNav } from './RightNav/RightNav';

export function Links() {
    const [open, setOpen] = useState(false);

    function handleModal() {
        setOpen(prev => !prev);
    };

    return (
        <div className={styles.actions}>
            <div onClick={handleModal} className={`${styles.burger} ${open ? styles.open : undefined}`}>
                <span className={`${styles.line} ${open ? styles.rotate1 : undefined}`}/>
                <span className={`${styles.line} ${open ? styles.hidden : undefined}`}/>
                <span className={`${styles.line} ${open ? styles.rotate2 : undefined}`}/>
            </div>
            <RightNav open={open} handleModal={handleModal} />
        </div>
    );
};