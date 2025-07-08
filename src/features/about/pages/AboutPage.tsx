import styles from "./AboutPage.module.scss";

export function AboutPage() {
    return (
        <div className={`containerDefault ${styles.aboutContainer}`}>
            <div>
                <h2 className={styles.title}>
                    About the Real <span className={styles.highlight}>Social</span>
                </h2>
                <p className={styles.paragraph}>
                    This project consists of a blog ( CRUD ) made with React in Front-End and Firebase as database.
                </p>
                <p className={styles.paragraphStrong}>
                    If you liked it, don't forget to visit my Linkedin and GitHub to know more about what I do, thank you.
                </p>
                <a
                    href="https://www.linkedin.com/in/pedro-paulo-leite/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button} ${styles.linkedin}`}
                >
                    Linkedin
                </a>
                <a
                    href="https://github.com/pedropleite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.button} ${styles.github}`}
                >
                    GitHub
                </a>
            </div>
        </div>
    );
};