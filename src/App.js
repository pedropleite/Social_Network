import { useState, useEffect } from 'react';
import useAuthentication from './hooks/useAuthentication';
import { AuthProvider } from './store/AuthContext';
import { onAuthStateChanged } from 'firebase/auth';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';
import { GlobalStyle } from './styles/GlobalStyles';
import { LoadingLoop } from './components/LoadingLoop';

import { Navbar } from './components/Header/Navbar/';
import { Footer } from './components/Footer/';
import Paths from './routes';

const Container = styled.div`
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

function App() {
    const [theme, setTheme] = useState('light');

    const themeToggle = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    const [user, setUser] = useState(undefined);
    const { auth } = useAuthentication();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => setUser(user));
    }, [auth]);

    return (
        <AuthProvider value={{ user }}>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <Container>
                    <Navbar themeToggle={themeToggle} />
                    { user === undefined ? <LoadingLoop /> : <Paths /> }
                    <Footer />
                    <GlobalStyle />
                </Container>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
