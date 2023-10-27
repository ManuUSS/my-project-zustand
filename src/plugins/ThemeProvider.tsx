import { create } from 'zustand';

export interface ThemeStore {
    theme: Theme;
}

type Theme = 'light' | 'dark';

type Actions = {
    changeTheme: ( theme:Theme ) => void;
}

export const useThemeStore = create<ThemeStore & Actions>()(( set ) => ({
    theme: 'dark',
    changeTheme: ( theme: Theme ) => set(() => ({ theme: theme }))
}));
