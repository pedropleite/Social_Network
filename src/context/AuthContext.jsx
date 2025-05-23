/* eslint-disable react-refresh/only-export-components */
import { useContext, createContext, useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import useAuthentication from '../hooks/useAuthentication';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    const { auth } = useAuthentication();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => setUser(user));
        setIsLoading(false)
    }, [auth]);

    return <AuthContext.Provider value={{ user, isLoading }}>{children}</AuthContext.Provider>;
};

export function useAuthValue() {
    return useContext(AuthContext);
};
