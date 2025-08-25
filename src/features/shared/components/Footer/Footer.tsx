import { NavLink } from "react-router";

import { UsersIcon } from "../Icons/UsersIcon";

import styles from "./Footer.module.scss";
import { GithubIcon } from "../Icons/GithubIcon";
import { LinkedinIcon } from "../Icons/LinkedinIcon";
import { EmailIcon } from "../Icons/EmailIcon";
import { LocationIcon } from "../Icons/LocationIcon";

export function Footer() {
    return (
        <footer className={styles.container}>
            <div className={styles.footer}>
                <section>
                    <div className={styles.about}>
                        <div className={styles.logo}>
                            <div>
                                <div className={styles.icon}>
                                    <span></span>
                                    <UsersIcon />
                                </div>
                                <div className={styles.title}>
                                    <h2>Momentos</h2>
                                    <span>Compartilhe sua vida</span>
                                </div>
                            </div>
                        </div>
                        <p>
                            Uma plataforma para compartilhar histórias e se conectar com pessoas. Valorize autenticidade
                            e momentos genuínos.
                        </p>
                        <p>
                            <LocationIcon /> Desenvolvido no Brasil por Pedro Paulo
                        </p>
                    </div>
                    <div className={styles.contact}>
                        <h3>Contato</h3>
                        <p>
                            Entre em contato conosco através das redes sociais ou por e-mail. Sua opinião é importante
                            para nós.
                        </p>
                        <div>
                            <NavLink to="https://github.com/pedropleite">
                                <GithubIcon />
                                Github
                            </NavLink>
                            <NavLink to="https://www.linkedin.com/in/pedro-paulo-leite/">
                                <LinkedinIcon />
                                Linkedin
                            </NavLink>
                            <NavLink to="mailto:pedroaksson@gmail.com">
                                <EmailIcon />
                                E-mail
                            </NavLink>
                        </div>
                    </div>
                </section>
                <section>
                    <p>© {new Date().getFullYear()} Momentos</p>
                </section>
            </div>
        </footer>
    );
}
