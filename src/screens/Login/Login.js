import formSignImg2 from '../../assets/ilustration/formSignUp2.jpg';
import { Container, Error } from '../../globalStyles';
import useAuthentication from '../../hooks/useAuthentication';
import { useState, useEffect } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login, error: authError, loading } = useAuthentication();

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');

        if (email.trim() === '' || password.trim() === '') {
            setError('Please fill in all fields');
            return;
        }

        const user = {
            email: email,
            password: password,
        };

        login(user);
    };

    return (
        <Container>
            <div style={{ minHeight: '450px' }}>
                <form onSubmit={handleSubmit}>
                    <h1>Login to post</h1>
                    <span>Log in and share your experiences</span>
                    <label>
                        <span>E-mail:</span>
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter your E-mail"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Password:</span>
                        <input
                            autoComplete="on"
                            type="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    {!loading && <button>Login</button>}
                    {loading && <button disabled>Loading...</button>}
                    {error && <Error>{error}</Error>}
                </form>
                <section>
                    <img src={formSignImg2} alt={'Descriptive'} />
                </section>
            </div>
        </Container>
    );
};

export default Login;
