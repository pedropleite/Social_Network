import styles from './PostDetailPage.module.scss';

import { LoadingLoop } from '../../../shared/components/LoadingLoop/LoadingLoop';
import { Link, useNavigate, useParams } from 'react-router';
import { usePostById } from '../../hooks/usePostById';

export function PostDetailPage() {
    const navigate = useNavigate()
    const { id: postId } = useParams();

    if (!postId) {
        navigate("/")
    }

    const { post, loading, error } = usePostById({ id: postId ?? "" })

    if (loading) return <LoadingLoop />
    if (error) return <p className={styles.error}>{error}</p>;

    return (
        <section className={styles.container}>
            {post && (
                <div className={styles.containerPost}>
                    <div>
                        <span>{post.title}</span>
                        <span>{post.createdBy}</span>
                    </div>
                    <img src={post.linkImage} alt={post.title} />
                    <span>{post.content}</span>
                    <div>
                        {post.tagsArray.map((tag) => (
                            <span key={tag}>
                                <span>#</span>
                                {tag + ' '}
                            </span>
                        ))}
                    </div>
                    <Link className={styles.btn} to="/">
                        Return
                    </Link>
                </div>
            )}
        </section>
    );
};
