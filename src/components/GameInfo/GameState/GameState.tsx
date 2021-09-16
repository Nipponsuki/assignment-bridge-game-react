import * as React from 'react';

interface GameStateProps {
    children: React.ReactNode;
}

const GameState: React.FC<GameStateProps> = ({ children }: GameStateProps) => {
    return <>{children}</>;
};

export default GameState;
