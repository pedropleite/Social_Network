interface ErrorMessageProps {
    hasError: string | null
    errorText: string | null
    className?: string
}

export function ErrorMessage({ hasError, errorText, className = "" }: ErrorMessageProps) {
    return (
        <>
            {hasError && (
                <p className={`errorDefault ${className}`}>{errorText}</p>
            )}
        </>
    );
}