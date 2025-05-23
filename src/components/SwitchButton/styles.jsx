import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled.div`
    height: 30px;
    width: 80px;
    margin: 0;
    border-radius: 25px;
    display: flex;
    justify-content: ${(props) => (props.isOn ? 'flex-end' : 'flex-start')};
    align-items: center;
    box-sizing: border-box;
    padding: 0 5px;
    cursor: pointer;
    background-image: ${(props) => props.theme.gradient};

    @media (max-width: 768px) {
        margin-right: 2em;
    }
`;

const Handle = styled(motion.div)`
    height: 22px;
    width: 22px;
    border-radius: 50%;
    background-color: #fff;
`;

export { Container, Handle };
