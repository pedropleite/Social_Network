import React, { useState } from 'react';
import { StyledBurger } from './styles';
import RightNav from '../RightNav';

export default function Burguer() {
    const [open, setOpen] = useState(false);

    function handleModal() {
        setOpen(open => !open);
    };

    return (
        <>
            <StyledBurger open={open} onClick={handleModal} style={{ position: open === true ? 'fixed' : 'absolute' }}>
                <div />
                <div />
                <div />
            </StyledBurger>
            <RightNav open={open} handleModal={handleModal} />
        </>
    );
};