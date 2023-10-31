import { StateCreator } from 'zustand';
import { CharacterResponse } from '..';

interface DemonSlice {
    demonSlayerList: CharacterResponse[];
}


type Actions = {
    setDemonSlayerList: ( list:CharacterResponse[] ) => void;
    addToDemonSlayerList: ( char: CharacterResponse ) => void;
    filterDemonSlayerList: () => void;
}

export const createJJSlice:StateCreator<DemonSlice & Actions> = ( set ) => ({
    demonSlayerList: [],
    setDemonSlayerList: ( list: CharacterResponse[] ) => {
        set(() => ({ demonSlayerList: list }))
    },
    addToDemonSlayerList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ demonSlayerList: [ ...ctx.demonSlayerList, char ] }))
    },
    filterDemonSlayerList: () => {},
})