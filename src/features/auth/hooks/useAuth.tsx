import { getAuth } from "@firebase/auth";

export function useAuth() {
    const auth = getAuth();

    return auth
}