import * as React from 'react';
import useGameStore, { GameStatus } from 'stores/game';
import styled from 'styled-components';

const InitialState: React.FC = () => {
    return (
        <>
            <h2>Кто выиграет?</h2>
            <h3>Сыграй в игру и испытый удачу!</h3>`
        </>
    );
};

const WonState: React.FC = () => {
    return (
        <>
            <h2>Вы выиграли</h2>
            <h3>&#128513;</h3>`
        </>
    );
};

const LoseState: React.FC = () => {
    return (
        <>
            <h2>Вы проиграли</h2>
            <h3>&#128557;</h3>
        </>
    );
};

const DrawState: React.FC = () => {
    return (
        <>
            <h2>Ничья</h2>
            <h3>&#128517;</h3>`
        </>
    );
};

const GAME_STATES = {
    initial: <InitialState />,
    win: <WonState />,
    lose: <LoseState />,
    draw: <DrawState />,
    isStarted: <InitialState />,
};

const StyledGameState = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin: 1rem auto;
    gap: 1rem;

    h2 {
        font-size: 2.4rem;
    }

    h3 {
        font-size: 2rem;
    }
`;

const GameState: React.FC = () => {
    const { gameStatus } = useGameStore((state) => state);
    return <StyledGameState>{GAME_STATES[gameStatus as GameStatus]}</StyledGameState>;
};

export default GameState;
