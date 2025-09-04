import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
    type User,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "../../../supabase/config";

import { useAsyncStatus } from "../../shared/hooks/useAsyncStatus";
import { useNavigate } from "react-router";

interface UserType {
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

    async function createUserDoc(user: User, displayName?: string) {
        const userRef = doc(db, "users", user.uid);
        const snap = await getDoc(userRef);

        if (!snap.exists()) {
            await setDoc(userRef, {
                uid: user.uid,
                displayName: displayName,
                email: user.email,
                photoURL: "",
                createdAt: serverTimestamp(),
                updatedAt: serverTimestamp(),
            });
        }
    }

    async function createUser({ email, password, displayName }: UserType) {
        setLoading();

        try {
            const { user } = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(user, { displayName: displayName });
            await createUserDoc(user, displayName);

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

    async function login({ email, password }: UserType) {
        setLoading();

        try {
            const { user } = await signInWithEmailAndPassword(auth, email, password);

            await createUserDoc(user, user.displayName!);

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
