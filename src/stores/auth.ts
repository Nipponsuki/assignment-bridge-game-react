import create from 'zustand';
import { persist } from 'zustand/middleware';

export interface AuthState {
    user: null | string;
    login: (user: string) => void;
    logout: () => void;
}

const useAuth = create<AuthState>(
    persist(
        (set) => ({
            user: null,
            login: (user) => set({ user }),
            logout: () => set({ user: null }),
        }),
        {
            name: 'bridge-user',
            getStorage: () => localStorage,
        },
    ),
);

export default useAuth;
