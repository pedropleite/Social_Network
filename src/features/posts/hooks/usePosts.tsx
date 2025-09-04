import { useState, useEffect } from "react";
import { collection, query, onSnapshot, orderBy, where, QueryConstraint } from "firebase/firestore";
import { db } from "../../../supabase/config";
import type { Post } from "../types/Post";
import { mapDocToPost } from "../utils/mapDocToPost";
import { useAsyncStatus } from "../../shared/hooks/useAsyncStatus";

interface UsePostsProps {
    search?: string | null;
    uid?: string | null;
}

export function usePosts({ search = null, uid = null }: UsePostsProps = {}) {
    const [posts, setPosts] = useState<Post[] | null>(null);
    const { loading, error, setLoading, setSuccess, setError } = useAsyncStatus({
        loading: true,
    });

    useEffect(() => {
        setLoading();

        const collectionRef = collection(db, "posts");
        const constraints: QueryConstraint[] = [orderBy("createdAt", "desc")];

        if (search) {
            constraints.unshift(where("tagsArray", "array-contains", search));
        }

        if (uid) {
            constraints.unshift(where("uid", "==", uid));
        }

        const q = query(collectionRef, ...constraints);

        const unsubscribe = onSnapshot(
            q,
            (snapshot) => {
                const docsData: Post[] = snapshot.docs.map((data) => {
                    const doc = mapDocToPost(data);
                    return doc;
                });

                setPosts(docsData);
                setSuccess();
            },
            (error) => {
                setError(error.message);
            },
        );

        return () => unsubscribe();
    }, [search, uid, setError, setLoading, setSuccess]);

    return { posts, loading, error };
}
