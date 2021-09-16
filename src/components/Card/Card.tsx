import * as React from 'react';
import styled from 'styled-components';

import useCards from 'hooks/useCards';
import useGameStore from 'stores/game';

import { CardType } from 'api/cards';
import backCardImage from 'assets/images/back.png';

const StyledCard = styled.button`
    border: none;
    background: none;
    cursor: pointer;
    width: 20rem;
    height: 30rem;
    background: var(--primaryColor);
    border-radius: 10px;

    img {
        width: 100%;
        height: 100%;
    }

    &:disabled {
        pointer-events: none;
        cursor: not-allowed;
    }
`;

const NAMED_VALUES = {
    KING: 13,
    QUEEN: 12,
    JACK: 11,
    ACE: 1,
};

type NamedValuesType = 'KING' | 'QUEEN' | 'JACK' | 'ACE';

const normalizeCardValue = (value: string): number => {
    if (value in NAMED_VALUES) {
        return Number(NAMED_VALUES[value as NamedValuesType]);
    }

    return Number(value);
};

interface CardProps {
    card: CardType;
}

const Card: React.FC<CardProps> = ({ card }: CardProps) => {
    const { setPlayerScore, setComputerScore, gameStatus, compareScores } = useGameStore(
        (state) => state,
    );
    const { data } = useCards();

    const onCardSelect = () => {
        setPlayerScore(normalizeCardValue(card.value));
        setComputerScore(
            normalizeCardValue(
                (data && data.cards?.find((item) => item.code !== card.code)?.value) ?? '',
            ),
        );

        compareScores();
    };

    return (
        <StyledCard
            disabled={gameStatus === 'initial' || gameStatus !== 'isStarted'}
            aria-label="select card"
            type="button"
            key={card.code}
            onClick={onCardSelect}
        >
            <img
                src={
                    gameStatus === 'initial' || gameStatus === 'isStarted'
                        ? backCardImage
                        : card.image
                }
                alt={card.code}
            />
        </StyledCard>
    );
};

export default Card;
