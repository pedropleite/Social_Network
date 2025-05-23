import React, { useState } from 'react';
import { Container, Handle } from './styles';

export default function SwitchButton(props) {
    const [isOn, setIsOn] = useState(false);

    const handleClick = () => {
        setIsOn((prev) => !prev);
        props.themeToggle();
    };

    const spring = {
        type: "spring",
        stiffness: 300,
        damping: 30
    };

    return (
        <Container onClick={() => handleClick()} isOn={isOn}>
            <Handle layout transition={spring}></Handle>
        </Container>
    );
};
