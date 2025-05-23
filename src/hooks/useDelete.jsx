import { useReducer } from 'react';
import { db, storage } from '../firebase/config';
import { doc, deleteDoc } from 'firebase/firestore';
import { ref, deleteObject } from 'firebase/storage';

const initialState = {
    loading: null,
    error: null,
};

function deleteReducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                error: null,
            };
        case 'ERROR':
            return {
                loading: null,
                error: action.message,
            };
        case 'SUCCESS':
            return {
                loading: false,
                error: null,
            };
        default:
            return state;
    }
};

export default function useDelete(docCollection) {
    const [response, dispatch] = useReducer(deleteReducer, initialState);

    async function deletePost(idPost, id) {
        dispatch({ type: 'LOADING' });
        try {
            const imageRef = ref(storage, `images/${idPost}`);

            await deleteObject(imageRef);

            const deletedPost = await deleteDoc(doc(db, docCollection, id));

            dispatch({ type: 'SUCCESS', message: deletedPost });
        } catch (error) {
            dispatch({ type: 'ERROR', message: error.message });
        }
    };

    return { deletePost, response };
};

