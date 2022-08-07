import React from 'react';
import { LinkList, StyledNavLink } from './styles';
import useAuthentication from '../../../../hooks/useAuthentication';
import { useAuthValue } from '../../../../context/AuthContext';

const RightNav = (props) => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <LinkList open={props.open}>
            <li>
                <StyledNavLink to="/" onClick={props.handleModal}>
                    Home
                </StyledNavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <StyledNavLink to="/login" onClick={props.handleModal}>
                            Login
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/Register" onClick={props.handleModal}>
                            Register
                        </StyledNavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li>
                        <StyledNavLink to="/posts/create" onClick={props.handleModal}>
                            New Post
                        </StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/dashboard" onClick={props.handleModal}>
                            Dashboard
                        </StyledNavLink>
                    </li>
                </>
            )}
            <li>
                <StyledNavLink to="/about" onClick={props.handleModal}>
                    About
                </StyledNavLink>
            </li>
            {user && (
                <li>
                    <button onClick={logout}>Logout</button>
                </li>
            )}
        </LinkList>
    );
};

export default RightNav;
