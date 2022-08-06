import React, { useState } from 'react';
import { StyledBurger } from './styles';
import RightNav from '../RightNav/RightNav';

const Burger = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)} style={{ position: open === true ? 'fixed' : 'absolute' }}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} />
        </>
    );
};

export default Burger;
