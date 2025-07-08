import type { DocumentSnapshot } from "firebase/firestore"
import type { Post } from "../types/Post"

export function mapDocToPost(doc: DocumentSnapshot) {
    const data = doc.data()

    if (!data) {
        throw new Error("Document is empty")
    }

    return ({
        id: doc.id,
        title: data.title,
        linkImage: data.linkImage,
        content: data.content,
        createdBy: data.createdBy,
        tagsArray: data.tagsArray,
        idPost: data.idPost,
        uid: data.uid,
    } satisfies Post)
}