import getRandomCard, { Card } from 'api/cards';
import * as React from 'react';
import { useQuery } from 'react-query';
import useGameStore from 'stores/game';

const NAMED_VALUES = {
    KING: 13,
    QUEEN: 12,
    JACK: 11,
    ACE: 1,
};

type NamedValues = 'KING' | 'QUEEN' | 'JACK' | 'ACE';

const normalizeCardValue = (value: string): number => {
    if (value in NAMED_VALUES) {
        return Number(NAMED_VALUES[value as NamedValues]);
    }

    return Number(value);
};

const HomePage: React.FC = () => {
    const {
        playerScore,
        computerScore,
        setPlayerScore,
        setComputerScore,
        gameStatus,
        compareScores,
    } = useGameStore((state) => state);
    const { data, isError, isLoading } = useQuery('cards', () => getRandomCard());
    console.log(playerScore, computerScore, gameStatus);

    return (
        <>
            <h1>{playerScore}</h1>
            <h1>{computerScore}</h1>
            <h1>{gameStatus}</h1>
            {isError && <p>errror</p>}
            {isLoading && <p>loading</p>}
            {data &&
                data.cards?.map((card: Card) => (
                    <button
                        disabled={gameStatus !== 'initial'}
                        type="button"
                        key={card.code}
                        onClick={() => {
                            setPlayerScore(normalizeCardValue(card.value));
                            setComputerScore(
                                normalizeCardValue(
                                    data.cards?.find((item) => item.code !== card.code)?.value ??
                                        '',
                                ),
                            );
                            compareScores();
                        }}
                    >
                        {card.value}
                    </button>
                ))}
        </>
    );
};

export default HomePage;
