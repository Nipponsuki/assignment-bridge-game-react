import create from 'zustand';

interface GameState {
    gameStatus: string;
    setGameStatus: (status: string) => void;
}

const useGameStore = create<GameState>((set) => ({
    gameStatus: 'default',
    setGameStatus: (status: string) => set(() => ({ gameStatus: status })),
}));

export default useGameStore;
