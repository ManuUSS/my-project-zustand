import { StateCreator } from 'zustand';
import { CharacterResponse } from '..';

export interface JJKSlice {
    jjkList: CharacterResponse[];
    setJJKList: ( list:CharacterResponse[] ) => void;
    addToJJKList: ( char: CharacterResponse ) => void;
    filterJJKList: () => void;
}

/**
 * Creates a new slice for JJK List
 * Follows the Slice Pattern set by Zustand Team
 * @see (@link https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern)
 * @param set JJKSlice | Partial<JJKSlice> 
 * @returns Object
 */
export const createJJKSlice:StateCreator<JJKSlice> = ( set ) => ({
    jjkList: [],
    setJJKList: ( list: CharacterResponse[] ) => {
        set(() => ({ jjkList: list }))
    },
    addToJJKList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ jjkList: [ ...ctx.jjkList, char ] }))
    },
    filterJJKList: () => {},
})