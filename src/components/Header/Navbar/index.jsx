import React from 'react';
import Burguer from '../Burguer';
import { Container, Brand, ContainerSection } from './styles';
import { NavLink } from 'react-router-dom';
import SwitchButton from '../../SwitchButton/';

export default function Navbar(props) {
    return (
        <Container>
            <NavLink to="/">
                <Brand>
                    So<div>c</div>ial
                </Brand>
            </NavLink>
            <ContainerSection>
                <Burguer />
                <SwitchButton themeToggle={props.themeToggle} />
            </ContainerSection>
        </Container>
    );
};
