import styled from 'styled-components';

const Container = styled.nav`
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
    justify-content: space-between;
    align-items: center;
    padding: 0.5em 2em;
    margin: 0.36rem;
    background-color: ${(props) => props.theme.background};
`;

const Brand = styled.span`
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 1.8em;

    &:hover {
        background: none;
    }

    div {
        display: inline-block;
        transform: rotate(180deg);
        margin-right: 0.1em;
        color: #0a66c2;
    }
`;

const ContainerSection = styled.div`
    display: flex;
    align-items: center;
`;

export { Container, Brand, ContainerSection };
