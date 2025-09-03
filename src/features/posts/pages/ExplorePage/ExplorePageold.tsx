import styles from "./ExplorePage.module.scss";

import { Link, useSearchParams } from "react-router";
import { usePosts } from "../../hooks/usePosts";
import React, { useRef } from "react";

import { LoadingLoop } from "../../../shared/components/LoadingLoop/LoadingLoop";
import { SearchIcon } from "../../../shared/components/Icons/SearchIcon";
import { CardPost } from "../../components/CardPost/CardPost";

export function ExplorePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search") || null;
    const searchInput = useRef<HTMLInputElement>(null);
    const { posts, loading, error } = usePosts({ search });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const value = searchInput.current?.value;

        if (!value || value === search) return;

        setSearchParams({ search: value });
    };

    if (loading) return <LoadingLoop />;
    if (error) return <p className={styles.error}>{error}</p>;

    const hasPosts = posts && posts.length > 0;
    const hasSearched = search !== null;

    return (
        <div className={styles.container}>
            {hasPosts && (
                <section className={styles.searchContainer}>
                    <h1>Recent Posts</h1>
                    <form onSubmit={handleSubmit} className={styles.searchForm}>
                        <input ref={searchInput} type="text" placeholder="Search by tags..." />
                        <button>
                            <SearchIcon />
                        </button>
                    </form>
                </section>
            )}

            <section className={styles.postsContainer}>
                {hasSearched && (
                    <div className={styles.searchResults}>
                        <h2>Search Result:</h2>
                        <span>
                            {hasPosts
                                ? `There were ${posts.length} results found for your tag.`
                                : `There were no results found for your tag.`}
                        </span>
                    </div>
                )}

                {hasPosts && posts.map((post) => <CardPost key={post.id} post={post} />)}

                {!hasPosts && !loading && (
                    <div>
                        <Link to="/post/create" className={styles.btnLink}>
                            Create a New Post
                        </Link>
                    </div>
                )}
            </section>
        </div>
    );
}
