import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from "firebase/auth";

import { useAsyncStatus } from "../../shared/hooks/useAsyncStatus";
import { useNavigate } from "react-router";

interface userType {
    displayName?: string;
    email: string;
    password: string;
}

export function useAuthentication() {
    const { loading, error: errorMessage, setLoading, setSuccess, setError: setErrorMessage } = useAsyncStatus();

    const auth = getAuth();
    const navigate = useNavigate();

    function handleError(error: unknown) {
        if (!(error instanceof Error)) {
            setErrorMessage("An unknown error occurred");
            return;
        }

        if (error.message.includes("user-not-found")) {
            setErrorMessage("User not found");
            return;
        }

        if (error.message.includes("wrong-password")) {
            setErrorMessage("Wrong password");
            return;
        }

        setErrorMessage("Something went wrong");
    }

    async function createUser({ email, password, displayName }: userType) {
        setLoading();

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user, { displayName: displayName });

            navigate("/");
        } catch (error: unknown) {
            handleError(error);
        } finally {
            setSuccess();
        }
    }

    function logout() {
        signOut(auth);
        navigate("/");
    }

    async function login({ email, password }: userType) {
        setLoading();

        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error: unknown) {
            handleError(error);
        } finally {
            setSuccess();
        }
    }

    return {
        auth,
        error: errorMessage,
        loading,
        createUser,
        logout,
        login,
    };
}
