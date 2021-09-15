import getRandomCard from 'api/cards';
import * as React from 'react';
import { useQuery } from 'react-query';
import useGameStore from 'stores/game';

const HomePage: React.FC = () => {
    const gameStatus = useGameStore((state) => state.gameStatus);
    const { data } = useQuery('card', () => getRandomCard());
    console.log(gameStatus, data);
    return <div>{gameStatus}</div>;
};

export default HomePage;
