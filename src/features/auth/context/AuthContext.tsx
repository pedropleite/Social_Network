import { createContext, useState, useEffect, type ReactNode } from "react";
import type { User } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "../hooks/useAuthentication";
import { useAsyncStatus } from "../../shared/hooks/useAsyncStatus";

interface AuthContextType {
    user: User | null;
    loading: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: false,
});

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const { loading, setLoading, setSuccess } = useAsyncStatus({ loading: true });

    const { auth } = useAuthentication();

    useEffect(() => {
        setLoading();

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setSuccess();
        });

        return () => {
            unsubscribe();
        };
    }, [auth, setLoading, setSuccess]);

    return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
}
