import { Link } from 'react-router';
import styles from './CardPost.module.scss';

interface CardPostProps {
    post: {
        id: string;
        title: string;
        linkImage: string;
        content: string;
        createdBy: string;
        tagsArray: string[];
    };
}

export function CardPost({ post }: CardPostProps) {
    return (
        <div className={styles.cardPost}>
            <span className={styles.title}>{post.title}</span>
            <img src={post.linkImage} alt={post.title} className={styles.image} />

            <div className={styles.contentWrapper}>
                <div className={styles.leftSide}>
                    <div className={styles.contentText}>
                        <span>{post.content}</span>
                        <span className={styles.author}>{post.createdBy}</span>
                    </div>
                    <div className={styles.tags}>
                        {post.tagsArray.map((tag) => (
                            <span key={tag}>#{tag} </span>
                        ))}
                    </div>
                </div>

                <Link to={`/post/${post.id}`} className={styles.readBtn}>
                    Read
                </Link>
            </div>
        </div>
    );
}
