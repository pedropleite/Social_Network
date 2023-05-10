import { Container } from '../../styles/Components';
import { Btn } from './styles';

const About = () => {
    return (
        <Container>
            <div style={{ flexDirection: 'column' }}>
                <h2>
                    About the Real <span>Social</span>
                </h2>
                <p>This project consists of a blog ( CRUD ) made with React in Front-End and Firebase as database. </p>
                <p style={{ fontWeight: '600' }}>
                    If you liked it, don't forget to visit my Linkedin and GitHub to know more about what I do, thank
                    you.
                </p>
                <Btn style={{ background: '#161b22' }} href="https://www.linkedin.com/in/pedro-paulo-leite/">
                    Linkedin
                </Btn>
                <Btn style={{ background: '#0a66c2' }} href="https://github.com/pedropleite">
                    GitHub
                </Btn>
            </div>
        </Container>
    );
};

export default About;
