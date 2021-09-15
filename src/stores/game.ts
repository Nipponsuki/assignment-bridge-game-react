import create from 'zustand';

type GameStatus = 'initial' | 'win' | 'lose' | 'draw';
type Score = number | null;
type SetScore = (value: number) => void;

interface GameState {
    gameStatus: GameStatus;
    setGameStatus: (status: GameStatus) => void;
    playerScore: Score;
    computerScore: Score;
    setPlayerScore: SetScore;
    setComputerScore: SetScore;
    compareScores: () => void;
}

const useGameStore = create<GameState>((set, get) => ({
    gameStatus: 'initial',
    playerScore: null,
    computerScore: null,
    setGameStatus: (status) => set(() => ({ gameStatus: status })),
    setPlayerScore: (value: number) => set(() => ({ playerScore: value })),
    setComputerScore: (value: number) => set(() => ({ computerScore: value })),
    compareScores: () => {
        const { playerScore, computerScore, setGameStatus } = get();
        if (playerScore && computerScore) {
            if (playerScore > computerScore) {
                setGameStatus('win');
            } else if (playerScore === computerScore) {
                setGameStatus('draw');
            } else {
                setGameStatus('lose');
            }
        }
    },
}));

export default useGameStore;
