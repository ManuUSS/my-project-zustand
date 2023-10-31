import { StateCreator } from 'zustand';
import { CharacterResponse } from '..';

export interface HxHSlice {
    hxhList: CharacterResponse[];
    setHxHList: ( list:CharacterResponse[] ) => void;
    addToHxHList: ( char: CharacterResponse ) => void;
    filterHxHList: () => void;
}

/**
 * Creates a new slice for Hunter X Hunter
 * Follows the Slice Pattern set by Zustand Team
 * @see (@link https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern)
 * @param { set } HxHSlice | Partial<HxHSlice> 
 * @returns { Object }
 */
export const createHxHlice:StateCreator<HxHSlice> = ( set ) => ({
    hxhList: [],
    setHxHList: ( list: CharacterResponse[] ) => {
        set(() => ({ hxhList: list }))
    },
    addToHxHList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ hxhList: [ ...ctx.hxhList, char ] }))
    },
    filterHxHList: () => {},
})