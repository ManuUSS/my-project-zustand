import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CharacterResponse } from '..';

export interface FavoriteStore {
    favoriteList: CharacterResponse[];
    setfavoriteList: ( list:CharacterResponse[] ) => void;
    addTofavoriteList: ( char: CharacterResponse ) => void;
    removeFromFavoriteList: ( charName: string ) => void;
    hasCharacter: ( charName: string ) => boolean;
}

/**
 * Creates a new store for Favorite List
 * @see (@link https://docs.pmnd.rs/zustand/migrations/migrating-to-v4#persist)
 * @param { set } FavoriteStore | Partial<FavoriteStore> 
 * @returns { Object }
 */
export const useFavoriteStore = create<FavoriteStore>()( persist(( set, get ) => ({
    favoriteList: [],
    setfavoriteList: ( list: CharacterResponse[] ) => {
        set(() => ({ favoriteList: list }))
    },
    addTofavoriteList: ( char: CharacterResponse ) => {
        set(
            ( ctx ) => 
            ({ 
                favoriteList: [ ...ctx.favoriteList, char ] 
            })
        )
    },
    removeFromFavoriteList: ( charName: string ) => {
        const newFavoriteList = get().favoriteList.filter(({ name }) => name !== charName );
        set(() => ({ favoriteList: newFavoriteList }))
    },
    hasCharacter: ( charName: string ):boolean => {
        return get().favoriteList.some(({ name }) => name === charName );
    }
    }), {
        name: "favorite-list-store"
    })
)