import { useState } from 'react';
import { AuthProvider } from './context/AuthContext';

import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';
import { GlobalStyle } from './styles/GlobalStyles';

import Navbar from './components/Header/Navbar/';
import Footer from './components/Footer/';
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

    return (
        <AuthProvider>
            <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
                <Container>
                    <Navbar themeToggle={themeToggle} />
                    <Paths />
                    <Footer />
                    <GlobalStyle />
                </Container>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;
