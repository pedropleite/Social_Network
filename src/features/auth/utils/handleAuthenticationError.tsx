export function handleAuthenticationError(error: unknown, setErrorMessage: (error: string) => void) {
    if (!(error instanceof Error)) {
        setErrorMessage('An unknown error occurred');
        return;
    }

    if (error.message.includes('user-not-found')) {
        setErrorMessage('User not found');
        return;
    }

    if (error.message.includes('wrong-password')) {
        setErrorMessage('Wrong password');
        return;
    }

    if (error.message.includes('too-many-requests')) {
        setErrorMessage('Too many requests, try later.');
        return;
    }

    setErrorMessage('Something went wrong');
}