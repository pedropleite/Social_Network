import React from 'react';
import Burger from '../Burger';
import { Container, Brand, ContainerSection } from './styles';
import { NavLink } from 'react-router-dom';
import SwitchButton from '../../SwitchButton/';

export const Navbar = (props) => {
    return (
        <Container>
            <NavLink to="/">
                <Brand>
                    So<div>c</div>ial
                </Brand>
            </NavLink>
            <ContainerSection>
                <Burger />
                <SwitchButton themeToggle={props.themeToggle} />
            </ContainerSection>
        </Container>
    );
};
