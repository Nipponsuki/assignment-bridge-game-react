import create from 'zustand';

const WITHDRAW_AMOUNT = 5;
const WINNING_BET = 2;

export type GameStatus = 'initial' | 'win' | 'lose' | 'draw' | 'isStarted';
type Score = number | null;
type SetScore = (value: number) => void;
type SetFunction = () => void;

interface GameState {
    gameStatus: GameStatus;
    setGameStatus: (status: GameStatus) => void;
    playerScore: Score;
    computerScore: Score;
    setPlayerScore: SetScore;
    setComputerScore: SetScore;
    compareScores: SetFunction;
    withdraw: SetFunction;
    addWinningBet: SetFunction;
    balance: number;
}

const useGameStore = create<GameState>((set, get) => ({
    gameStatus: 'initial',
    balance: 100,
    playerScore: null,
    computerScore: null,
    setGameStatus: (status) => set(() => ({ gameStatus: status })),
    withdraw: () => set((state) => ({ balance: state.balance - WITHDRAW_AMOUNT })),
    addWinningBet: () =>
        set((state) => ({ balance: state.balance + WITHDRAW_AMOUNT * WINNING_BET })),
    setPlayerScore: (value: number) => set(() => ({ playerScore: value })),
    setComputerScore: (value: number) => set(() => ({ computerScore: value })),
    compareScores: () => {
        const { playerScore, computerScore, setGameStatus, addWinningBet } = get();
        if (playerScore && computerScore) {
            if (playerScore > computerScore) {
                setGameStatus('win');
                addWinningBet();
            } else if (playerScore === computerScore) {
                setGameStatus('draw');
            } else {
                setGameStatus('lose');
            }
        }
    },
}));

export default useGameStore;
