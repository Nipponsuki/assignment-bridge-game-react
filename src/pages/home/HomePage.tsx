import { CardType } from 'api/cards';
import Balance from 'components/Balance/Balance';
import Card from 'components/Card/Card';
import GameInfo from 'components/GameInfo/GameInfo';
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
    border-radius: 5px;
    background: var(--primaryColor);
    border: none;
    color: #ffffff;
    font-size: 1.8rem;
    cursor: pointer;
    position: absolute;
    width: 15rem;
    left: 43%;

    &:hover {
        background-color: #207567;
    }
`;

const HomePage: React.FC = () => {
    const { gameStatus, setGameStatus, withdraw } = useGameStore((state) => state);

    const { data, refetch, isFetched } = useCards();

    const startGame = () => {
        setGameStatus('isStarted');
        withdraw();
    };

    const resetGame = () => {
        setGameStatus('initial');
        refetch();
    };

    return (
        <StyledHomePage>
            <Balance />
            <GameInfo />
            {isFetched && (
                <CardsContainer>
                    {gameStatus === 'initial' && (
                        <ActionButton onClick={startGame}>Играть</ActionButton>
                    )}
                    {gameStatus !== 'initial' && gameStatus !== 'isStarted' && (
                        <ActionButton onClick={resetGame}>Сыграть еще</ActionButton>
                    )}
                    {data &&
                        data.cards?.map((card: CardType) => <Card key={card.code} card={card} />)}
                </CardsContainer>
            )}
        </StyledHomePage>
    );
};

export default HomePage;
