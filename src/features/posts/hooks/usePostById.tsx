import { useEffect, useState } from "react";
import { db } from "../../../supabase/config";
import { doc, getDoc } from "firebase/firestore";
import type { Post } from "../types/Post";
import { mapDocToPost } from "../utils/mapDocToPost";
import { useAsyncStatus } from "../../shared/hooks/useAsyncStatus";

interface UsePostByIdProps {
    id: string;
}
export function usePostById({ id }: UsePostByIdProps) {
    const [post, setPost] = useState<Post | null>(null);
    const { loading, error, setLoading, setSuccess, setError } = useAsyncStatus();

    useEffect(() => {
        setLoading();

        async function fetchPost() {
            try {
                const docRef = doc(db, "posts", id);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    const doc = mapDocToPost(docSnap);
                    setPost(doc);
                } else {
                    setError("Document does not exist");
                }
            } catch (error) {
                const errorMessage = error instanceof Error ? error.message : "Unknown Error";
                setError(errorMessage);
            } finally {
                setSuccess();
            }
        }

        fetchPost();
    }, [id, setLoading, setSuccess, setError]);

    return { post, loading, error };
}
