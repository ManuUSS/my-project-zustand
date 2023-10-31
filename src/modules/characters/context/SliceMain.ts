import { StateCreator } from 'zustand';
import { CharacterResponse } from '..';

export interface MainSlice {
    mainList: CharacterResponse[];
    setMainList: ( list:CharacterResponse[] ) => void;
    addToMainList: ( char: CharacterResponse ) => void;
    filterMainList: () => void;
}

/**
 * Creates a new slice for Main List (All characteres)
 * @param set MainSlice | Partial<MainSlice> 
 * @returns Object
 */
export const createMainSlice:StateCreator<MainSlice> = ( set ) => ({
    mainList: [],
    setMainList: ( list: CharacterResponse[] ) => {
        set(() => ({ mainList: list }))
    },
    addToMainList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ mainList: [ ...ctx.mainList, char ] }))
    },
    filterMainList: () => {},
})