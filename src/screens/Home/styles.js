import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const ContainerSearch = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
`;

const SearchForm = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        max-width: 80%;
        width: 600px;
        height: 2.6rem;
        padding-left: 25px;
        font-size: 1.2rem;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
        border: none;
    }

    button {
        max-width: 20%;
        width: 120px;
        height: 2.6rem;
        background-color: #0a66c2;
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        border: none;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
        cursor: pointer;
    }
`;

const ContainerPosts = styled.div`
    margin-top: 3rem;
    margin-bottom: 7rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    p {
        font-size: 1.2rem;
        margin-bottom: 2rem;
    }
`;

const BtnLink = styled(Link)`
    padding: 1rem;
    background-color: ${(props) => props.theme.background};
    border-radius: 10px;
    font-size: 1.2rem;
    font-weight: bold;
`;

export { SearchForm, ContainerSearch, ContainerPosts, BtnLink, Container };
