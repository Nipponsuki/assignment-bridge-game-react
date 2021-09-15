import { CardType } from 'api/cards';
import Balance from 'components/Balance/Balance';
import Card from 'components/Card/Card';
import GameState from 'components/GameState/GameState';
import useCards from 'hooks/useCards';
import * as React from 'react';

import useGameStore from 'stores/game';
import styled from 'styled-components';

const StyledHomePage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column nowrap;
    width: 100%;
`;

const CardsContainer = styled.div`
    display: flex;
    position: relative;
    width: 60%;
    justify-content: space-between;
    align-items: center;
`;

const ActionButton = styled.button`
    height: 4rem;
    width: 8rem;
    border-radius: 5px;
    background: var(--primaryColor);
    border: none;
    color: #ffffff;
    font-size: 1.8rem;
    cursor: pointer;
    position: absolute;
    left: 45%;
`;

const HomePage: React.FC = () => {
    const { playerScore, computerScore, gameStatus, setGameStatus } = useGameStore(
        (state) => state,
    );

    const { data, refetch } = useCards();
    console.log(playerScore, computerScore, gameStatus);

    return (
        <StyledHomePage>
            <Balance />
            <GameState />

            <CardsContainer>
                {data && data.cards?.map((card: CardType) => <Card key={card.code} card={card} />)}

                {gameStatus === 'initial' && (
                    <ActionButton
                        onClick={() => {
                            setGameStatus('isStarted');
                        }}
                    >
                        Play
                    </ActionButton>
                )}

                {gameStatus !== 'initial' && gameStatus !== 'isStarted' && (
                    <ActionButton
                        onClick={() => {
                            setGameStatus('initial');
                            refetch();
                        }}
                    >
                        Again
                    </ActionButton>
                )}
            </CardsContainer>
        </StyledHomePage>
    );
};

export default HomePage;
