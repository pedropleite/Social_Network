import styled from 'styled-components';

const Container = styled.nav`
    display: flex;
    box-shadow: rgba(0, 0, 0, 0.15) 0px -2px 10px 0px;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 2rem;
    background-color: ${(props) => props.theme.background};
`;

const Brand = styled.span`
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 1.8rem;

    &:hover {
        background: none;
    }

    div {
        display: inline-block;
        transform: rotate(180deg);
        margin-right: 0.1rem;
        color: #0a66c2;
    }
`;

const ContainerSection = styled.div`
    display: flex;
    align-items: center;
`;

export { Container, Brand, ContainerSection };
