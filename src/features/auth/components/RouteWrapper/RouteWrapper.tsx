import type { ReactNode } from "react"
import { useAuthValue } from "../../hooks/useAuthValue"
import { Navigate } from "react-router"
import { LoadingLoop } from "../../../shared/components/LoadingLoop/LoadingLoop"

interface RouteWrapperProps {
    children: ReactNode
    isPrivate: boolean
}

export function RouteWrapper({ children, isPrivate }: RouteWrapperProps) {
    const { user, loading } = useAuthValue()

    if (loading) {
        return <LoadingLoop />
    }

    const isValid = (isPrivate && user) || (!isPrivate && !user)

    return isValid ? children : <Navigate to={`${user ? "/" : "/login"}`} />
}