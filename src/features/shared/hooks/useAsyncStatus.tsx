import { useCallback, useReducer } from "react";

interface State {
    loading: boolean;
    error: string | null;
}

type Action = { type: "LOADING" } | { type: "ERROR"; message: string } | { type: "SUCCESS" } | { type: "RESET" };

function asyncStatusReducer(state: State, action: Action): State {
    switch (action.type) {
        case "LOADING":
            return { loading: true, error: null };
        case "ERROR":
            return { loading: false, error: action.message };
        case "SUCCESS":
            return { loading: false, error: null };
        default:
            return state;
    }
}

interface initialStatus {
    loading?: boolean;
    error?: string | null;
}

export function useAsyncStatus(initialStatus: initialStatus = {}) {
    const [state, dispatch] = useReducer(asyncStatusReducer, {
        loading: initialStatus.loading ?? false,
        error: initialStatus.error ?? null,
    });

    const setLoading = useCallback(function () {
        dispatch({ type: "LOADING" });
    }, []);

    const setSuccess = useCallback(function () {
        dispatch({ type: "SUCCESS" });
    }, []);

    const setError = useCallback(function (error: string) {
        dispatch({ type: "ERROR", message: error });
    }, []);

    return {
        ...state,
        setLoading,
        setSuccess,
        setError,
    };
}
