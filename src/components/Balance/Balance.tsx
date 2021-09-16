import * as React from 'react';
import styled from 'styled-components';

import useGameStore from 'stores/game';

const StyledBalance = styled.div`
    background: #d0e1f9;
    color: #000000;
    padding: 1rem 2rem;
    font-size: 2rem;
    border-radius: 5px;
    margin: 1rem auto;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Balance: React.FC = () => {
    const { balance } = useGameStore((state) => state);

    return (
        <StyledBalance>
            <span>Баланс:{balance}</span>
        </StyledBalance>
    );
};

export default Balance;
