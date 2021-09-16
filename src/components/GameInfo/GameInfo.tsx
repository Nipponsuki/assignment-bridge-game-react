import * as React from 'react';
import styled from 'styled-components';

import useGameStore, { GameStatus } from 'stores/game';
import GameState from './GameState/GameState';

const GAME_STATES = {
    initial: (
        <GameState>
            <h2>Кто выиграет?</h2>
            <h3>Сыграй в игру и испытый удачу!</h3>
        </GameState>
    ),
    win: (
        <GameState>
            <h2>Вы выиграли</h2>
            <h3>&#128513;</h3>
        </GameState>
    ),
    lose: (
        <GameState>
            <h2>Вы проиграли</h2>
            <h3>&#128557;</h3>
        </GameState>
    ),
    draw: (
        <GameState>
            <h2>Ничья</h2>
            <h3>&#128517;</h3>
        </GameState>
    ),
    isStarted: (
        <GameState>
            <h2>Выберите карту</h2>
            <h3>&#128521;</h3>
        </GameState>
    ),
};

const StyledGameInfo = styled.div`
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

const GameInfo: React.FC = () => {
    const { gameStatus } = useGameStore((state) => state);
    return <StyledGameInfo>{GAME_STATES[gameStatus as GameStatus]}</StyledGameInfo>;
};

export default GameInfo;
