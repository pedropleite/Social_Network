import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { db, storage } from "../../../firebase/config";
import { useAsyncStatus } from "../../shared/hooks/useAsyncStatus";
import { addDoc, collection, deleteDoc, doc, Timestamp, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router";

interface Post {
    title: string
    content: string
    tagsArray: string[]
    uid: string
    createdBy: string
    idPost: string
}

interface PostImage {
    uid: string
    data: File
    idPost: string
}

interface DeletePostProps {
    idPost: string
    id: string
}

interface CreatePostProps {
    post: Post
    image: PostImage
}

interface UpdatePostProps {
    id: string
    post: Omit<Post, "createdBy" | "idPost" | "uid">
    image: Omit<PostImage, "uid"> | undefined
}

const docCollection = "posts"

function getPostDoc(id: string) {
    return doc(db, docCollection, id)
}

export function usePostActions() {
    const navigate = useNavigate();
    const { loading, error, setLoading, setSuccess, setError } = useAsyncStatus()

    async function deletePost({ idPost, id }: DeletePostProps) {
        setLoading()

        try {
            const imageRef = ref(storage, `images/${idPost}`);
            await deleteObject(imageRef);
            await deleteDoc(getPostDoc(id));
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        } finally {
            setSuccess()
        }
    }

    async function createPost({ post, image }: CreatePostProps) {
        setLoading()

        try {
            const imageRef = ref(storage, `images/${image.idPost}`);
            await uploadBytes(imageRef, image.data);

            const url = await getDownloadURL(imageRef);
            const newPost = { ...post, linkImage: url, createdAt: Timestamp.now() };

            await addDoc(collection(db, docCollection), newPost);

            navigate('/');
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        } finally {
            setSuccess()
        }
    }

    async function updatePost({ id, post, image }: UpdatePostProps) {
        setLoading()

        try {
            const newPost: typeof post & { linkImage?: string } = { ...post }

            if (image) {
                const imageRef = ref(storage, `images/${image.idPost}`);
                await uploadBytes(imageRef, image.data);

                const url = await getDownloadURL(imageRef);
                newPost.linkImage = url
            }
            
            await updateDoc(getPostDoc(id), newPost);

            navigate('/dashboard');
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message)
            }
        } finally {
            setSuccess()
        }
    }

    return { deletePost, createPost, updatePost, loading, error }
}