import { StateCreator } from 'zustand';
import { CharacterResponse } from '..';

export interface HxHSlice {
    hxhList: CharacterResponse[];
    setHxHList: ( list:CharacterResponse[] ) => void;
    addToHxHList: ( char: CharacterResponse ) => void;
    filterHxHList: () => void;
}


export const createJJSlice:StateCreator<HxHSlice> = ( set ) => ({
    hxhList: [],
    setHxHList: ( list: CharacterResponse[] ) => {
        set(() => ({ hxhList: list }))
    },
    addToHxHList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ hxhList: [ ...ctx.hxhList, char ] }))
    },
    filterHxHList: () => {},
})