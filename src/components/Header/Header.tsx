import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import useAuth from 'stores/auth';

const StyledHeader = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    background: var(--primaryColor);
    padding: 0 2rem;

    nav {
        width: 100%;
        display: flex;
        justify-content: space-between;

        a {
            color: #000000;
            font-size: 1.8rem;
            font-weight: bold;
            &.active {
                color: #ffffff;
            }
        }
    }
`;

const Header: React.FC = () => {
    const { user, logout } = useAuth((state) => state);
    return (
        <StyledHeader>
            <nav>
                <NavLink to="/" activeClassName="active" exact>
                    <span>Bridge</span>
                </NavLink>
                {user ? (
                    <NavLink to="/login" activeClassName="active" exact onClick={() => logout()}>
                        <span>Sign Out</span>
                    </NavLink>
                ) : (
                    <NavLink to="/login" activeClassName="active" exact>
                        <span>Sign In</span>
                    </NavLink>
                )}
            </nav>
        </StyledHeader>
    );
};

export default Header;
