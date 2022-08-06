import React from 'react';
import { LinkList, StyledNavLink } from './styles';
import useAuthentication from '../../../../hooks/useAuthentication';
import { useAuthValue } from '../../../../context/AuthContext';

const RightNav = ({ open }) => {
    const { user } = useAuthValue();
    const { logout } = useAuthentication();

    return (
        <LinkList open={open}>
            <li>
                <StyledNavLink to="/">Home</StyledNavLink>
            </li>
            {!user && (
                <>
                    <li>
                        <StyledNavLink to="/login">Login</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/Register">Register</StyledNavLink>
                    </li>
                </>
            )}
            {user && (
                <>
                    <li>
                        <StyledNavLink to="/posts/create">New Post</StyledNavLink>
                    </li>
                    <li>
                        <StyledNavLink to="/dashboard">Dashboard</StyledNavLink>
                    </li>
                </>
            )}
            <li>
                <StyledNavLink to="/about">About</StyledNavLink>
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
