import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CharacterResponse, Status, StatusCharacter } from '..';

export interface FavoriteStore {
    favoriteList: CharacterResponse[];
    favoriteListCopy: CharacterResponse[];
    favoriteFilterState: StatusCharacter;
    favoriteFilterStateSet: ( filter: StatusCharacter ) => void;
    setfavoriteList: ( list:CharacterResponse[] ) => void;
    addTofavoriteList: ( char: CharacterResponse ) => void;
    removeFromFavoriteList: ( charName: string ) => void;
    filterfavoriteList: ( status?: Status, name?:string ) => void;
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
    favoriteListCopy: [],
    setfavoriteList: ( list: CharacterResponse[] ) => {
        set(() => ({ favoriteList: list, favoriteListCopy: list }))
    },
    addTofavoriteList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ favoriteList: [ ...ctx.favoriteList, char ], favoriteListCopy: [ ...ctx.favoriteList, char ] }))
    },
    removeFromFavoriteList: ( charName: string ) => {
        const newFavoriteList = get().favoriteList.filter(({ name }) => name !== charName );
        set(() => ({ favoriteList: newFavoriteList, favoriteListCopy: newFavoriteList }))
    },
    filterfavoriteList: ( status?: Status, name?:string ) => {
        // <--- No filters --->
        if( !status && !name ) {
            set(( ctx ) => ({ favoriteListCopy: [ ...ctx.favoriteList ] }));
            return;
        } 

        let listFiltered:CharacterResponse[] = [];

        // <--- Both filters --->
        if( name && status ) {
            listFiltered = get().favoriteList.filter(( character ) => 
                character.status === status || character.name.includes( name || "" ) 
            );
        }

        // <--- Only name filter --->
        if( name && !status ) {
            listFiltered = get().favoriteList.filter(( character ) =>  character.name.includes( name ));
        }
        
        // <--- Only status filter --->
        if( !name && status ) {
            listFiltered = get().favoriteList.filter(( character ) =>  character.status === status );
        }

        set(() => ({ favoriteListCopy: listFiltered }));
    },
    favoriteFilterState: { label: "Todos", value: "" },
    favoriteFilterStateSet: ( filter: StatusCharacter ) => set(() => ({ favoriteFilterState: filter })),
    hasCharacter: ( charName: string ):boolean => {
        return get().favoriteList.some(({ name }) => name === charName );
    }
    }), {
        name: "favorite-list-store"

    })
)