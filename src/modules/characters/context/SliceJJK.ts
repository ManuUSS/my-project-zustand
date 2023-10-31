import { StateCreator } from 'zustand';
import { CharacterResponse } from '..';

export interface JJKSlice {
    jjkList: CharacterResponse[];
    setJJKList: ( list:CharacterResponse[] ) => void;
    addToJJKList: ( char: CharacterResponse ) => void;
    filterJJKList: () => void;
}


export const createJJSlice:StateCreator<JJKSlice> = ( set ) => ({
    jjkList: [],
    setJJKList: ( list: CharacterResponse[] ) => {
        set(() => ({ jjkList: list }))
    },
    addToJJKList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ jjkList: [ ...ctx.jjkList, char ] }))
    },
    filterJJKList: () => {},
})