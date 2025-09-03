import styles from "./Showcase.module.scss";

import { SparkleIcon } from "../../../shared/components/Icons/SparkleIcon";
import { HeartIcon } from "../../../shared/components/Icons/HeartIcon";
import { CameraIcon } from "../../../shared/components/Icons/CameraIcon";
import { UsersIcon } from "../../../shared/components/Icons/UsersIcon";
import peopleImage from "../../../../assets/image/showcase/people.webp";

import { NavLink } from "react-router";
import Typewriter from "typewriter-effect";

export function Showcase() {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <SparkleIcon />
                <span>Conecte-se de verdade</span>
            </div>
            <div className={styles.showcase}>
                <div className={styles.info}>
                    <h1>
                        Compartilhe seus <span>momentos</span>
                        <Typewriter
                            options={{
                                strings: ["especiais", "únicos", "inesquecíveis", "autênticos"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </h1>
                    <p>
                        Uma rede social feita para pessoas reais, onde cada foto conta uma história e cada conexão
                        importa. Sem algoritmos, só autenticidade.
                    </p>
                    <NavLink to="/register">Comece a compartilhar agora</NavLink>
                    <div>
                        <div>
                            <span>2.4k+</span>
                            <span>momentos compartilhados</span>
                        </div>
                        <div>
                            <span>180+</span>
                            <span>pessoas conectadas</span>
                        </div>
                    </div>
                </div>
                <div className={styles.post}>
                    <div className={styles.card}>
                        <div className={styles.heartIcon}>
                            <HeartIcon />
                        </div>
                        <div className={styles.cameraIcon}>
                            <CameraIcon />
                        </div>
                        <div className={styles.content}>
                            <img src={peopleImage} alt="imagem de pessoas abraçadas" height="257" />
                            <div className={styles.detail}>
                                <div>
                                    <span>A</span>
                                    <div>
                                        <span>Ana Silva</span>
                                        <span>há 2 horas</span>
                                    </div>
                                </div>
                                <span>"Café da manhã perfeito com as pessoas que amo ☕️❤️"</span>
                                <div>
                                    <span>
                                        <HeartIcon /> 25
                                    </span>
                                    <span>
                                        <UsersIcon /> 8 comentários
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
