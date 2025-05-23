import styled from 'styled-components';

const ContainerFooter = styled.footer`
    position: relative;
    bottom: 0;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.background};
    color: ${(props) => props.theme.fontColor};
    border-radius: 3px 3px 0 0;
`;

const Icons = styled.div`
    margin-top: 2.4rem;

    img {
        width: 2rem;
        margin-right: 2.5rem;
        cursor: pointer;
    }
`;

const Brand = styled.span`
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-size: 3.5rem;

    div {
        display: inline-block;
        transform: rotate(180deg);
        margin-right: 0.1rem;
        color: #0a66c2;
    }
`;

export { ContainerFooter, Icons, Brand };
