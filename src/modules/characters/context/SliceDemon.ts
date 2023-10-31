import { StateCreator } from 'zustand';
import { CharacterResponse } from '..';

interface DemonSlice {
    demonSlayerList: CharacterResponse[];
}


type Actions = {
    setJJKList: ( list:CharacterResponse[] ) => void;
    addToJJKList: ( char: CharacterResponse ) => void;
    filterJJKList: () => void;
}

export const createJJSlice:StateCreator<DemonSlice & Actions> = ( set ) => ({
    jjkList: [],
    setJJKList: ( list: CharacterResponse[] ) => {
        set(() => ({ jjkList: list }))
    },
    addToJJKList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ jjkList: [ ...ctx.jjkList, char ] }))
    },
    filterJJKList: () => {},
})