import { useEffect, useState, type ReactNode } from "react";
import type { User } from "@supabase/supabase-js";
import { AuthContext } from "../context/AuthContext";
import { useAsyncStatus } from "../../shared/hooks/useAsyncStatus";
import { supabase } from "../../../supabase/config";

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);
    const { loading, setLoading, setSuccess, setError } = useAsyncStatus({ loading: true });

    useEffect(() => {
        setLoading();

        (async () => {
            try {
                const { data, error } = await supabase.auth.getUser();
                if (error) throw error;

                setUser(data.user ?? null);
                setSuccess();
            } catch (err: unknown) {
                const message =
                    err instanceof Error ? err.message : typeof err === "string" ? err : "Erro ao obter usuário";
                setUser(null);
                setError(message);
            }
        })();

        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null);
            setSuccess();
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [setLoading, setSuccess, setError]);

    return <AuthContext.Provider value={{ user, loading }}>{children}</AuthContext.Provider>;
}
