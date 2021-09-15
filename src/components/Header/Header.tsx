import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const LINKS = [
    { id: 1, to: '/', label: 'Bridge' },
    { id: 2, to: '/login', label: 'Login' },
];

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
    return (
        <StyledHeader>
            <nav>
                {LINKS.map((link) => (
                    <NavLink to={link.to} key={link.id} activeClassName="active" exact>
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </nav>
        </StyledHeader>
    );
};

export default Header;
