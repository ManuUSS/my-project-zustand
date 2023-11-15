import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface ThemeStore {
    theme: Theme;
}

type Theme = 'light' | 'dark';

type Actions = {
    changeTheme: ( theme:Theme ) => void;
}

export const useThemeStore = create<ThemeStore & Actions>()( persist(( set ) => ({
    theme: 'light',
    changeTheme: ( theme: Theme ) => { set(() => ({ theme: theme }))}
    }), {
        name: "zest-theme"
    })
);
