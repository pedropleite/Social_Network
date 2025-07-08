import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut,
} from 'firebase/auth';

import { useAsyncStatus } from '../../shared/hooks/useAsyncStatus';
import { useNavigate } from 'react-router';
import { handleAuthenticationError } from '../utils/handleAuthenticationError';
import { useAuth } from './useAuth';

interface userType {
    displayName?: string
    email: string
    password: string
}

export function useAuthentication() {
    const { loading, error: errorMessage, setLoading, setError: setErrorMessage } = useAsyncStatus()
    const auth = useAuth()
    const navigate = useNavigate()

    async function createUser({ email, password, displayName }: userType) {
        setLoading();

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user, { displayName: displayName });

            navigate("/")
        } catch (error: unknown) {
            handleAuthenticationError(error, setErrorMessage)
        }
    };

    function logout() {
        signOut(auth);
        navigate("/")
    };

    async function login({ email, password }: userType) {
        setLoading();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/")
        } catch (error: unknown) {
            handleAuthenticationError(error, setErrorMessage)
        }
    };

    return {
        error: errorMessage, loading, createUser, logout, login,
    };
};
