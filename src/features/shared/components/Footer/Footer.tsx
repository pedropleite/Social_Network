import { FacebookIcon } from '../Icons/FacebookIcon';
import { InstagramIcon } from '../Icons/InstagramIcon';
import { TwitterIcon } from '../Icons/TwitterIcon';
import { WhatsAppIcon } from '../Icons/WhatsAppIcon';

import styles from './Footer.module.scss';

export function Footer() {
    return (
        <footer className={styles.footer}>
            <h3 className={styles.title}>Write about what you are interested in</h3>

            <span className={styles.logo}>
                So
                <div className={styles['rotated-c']}>c</div>
                ial
            </span>

            <div className={styles.icons}>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <WhatsAppIcon />
            </div>

            <p className={styles.copy}>Copyright © {new Date().getFullYear()}. All rights reserved.</p>
        </footer>
    );
}
