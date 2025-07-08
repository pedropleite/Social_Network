import styles from './DashboardPage.module.scss';

import { Link } from "react-router";
import { useAuthValue } from "../../../auth/hooks/useAuthValue";
import { usePostActions } from "../../hooks/usePostActions";
import { usePosts } from "../../hooks/usePosts";
import { LoadingLoop } from "../../../shared/components/LoadingLoop/LoadingLoop";

export function DashboardPage() {
    const { user } = useAuthValue();
    
    if (!user) throw new Error("User not found");

    const { deletePost, loading: loadingDelete } = usePostActions();
    const { posts, loading: loadingPosts } = usePosts({ uid: user.uid });
 
    if (loadingPosts) return <LoadingLoop />

    if ((posts && posts.length === 0) || !posts) {
        return (
            <div className={styles.emptyContent}>
                <span>You don't have any posts created.</span>
                <span>Shall we create a post?</span>
                <Link to="/post/create" className={styles.createButton}>
                    Create
                </Link>
            </div>
        );
    }

    return (
        <section className={styles.container}>
            <div className={styles.dashboard}>
                <h1>Dashboard</h1>
                <span className={styles.subtitle}>Edit your posts</span>
                <div className={styles.contentContainer}>
                    <div className={styles.header}>
                        <span>Title</span>
                        <span>Actions</span>
                    </div>
                    {posts.map((post) => (
                        <div key={post.id} className={styles.post}>
                            <div className={styles.postContent}>
                                <span className={styles.title}>{post.title}</span>
                                <div className={styles.actions}>
                                    <Link to={`/post/${post.id}`} className={styles.actionButton}>
                                        Read
                                    </Link>
                                    <Link to={`/post/${post.id}/edit`} className={styles.actionButton}>
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deletePost({ idPost: post.idPost, id: post.id })}
                                        className={`${styles.actionButton} ${styles.deleteButton}`}
                                    >
                                        {loadingDelete ? 'Loading' : 'Delete'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
