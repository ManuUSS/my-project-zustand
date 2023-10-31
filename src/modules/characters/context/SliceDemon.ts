import { StateCreator } from 'zustand';
import { CharacterResponse } from '..';

export interface DemonSlice {
    demonSlayerList: CharacterResponse[];
    setDemonSlayerList: ( list:CharacterResponse[] ) => void;
    addToDemonSlayerList: ( char: CharacterResponse ) => void;
    filterDemonSlayerList: () => void;
}

/**
 * Creates a new slice for Demon Slayer
 * @param set DemonSlice | Partial<DemonSlice> 
 * @returns Object
 */
export const createDemonSlice:StateCreator<DemonSlice> = ( set ) => ({
    demonSlayerList: [],
    setDemonSlayerList: ( list: CharacterResponse[] ) => {
        set(() => ({ demonSlayerList: list }))
    },
    addToDemonSlayerList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ demonSlayerList: [ ...ctx.demonSlayerList, char ] }))
    },
    filterDemonSlayerList: () => {},
})