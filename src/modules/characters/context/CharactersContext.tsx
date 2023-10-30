import { create } from 'zustand';
import { CharacterResponse, } from '..';

export interface CharacterStore {
    mainList:        CharacterResponse[];
    jjkList:         CharacterResponse[];
    demonSlayerList: CharacterResponse[];
    hxhList:         CharacterResponse[];
}


type Actions = {
    setMainList: ( list:CharacterResponse[] ) => void;
    addToMainList: ( char: CharacterResponse ) => void;
    filterMainList: ( ) => void;
    setJJKList: ( list:CharacterResponse[] ) => void;
    addToJJKList: ( char: CharacterResponse ) => void;
    filterJJKList: () => void;
    setDemonSlayerList: ( list:CharacterResponse[] ) => void;
    addToDemonSlayerList: ( char: CharacterResponse ) => void;
    filterDemonSlayerList: () => void;
    setHxHList: ( list:CharacterResponse[] ) => void;
    addToHxHList: ( char: CharacterResponse ) => void;
    filterHxHList: () => void;
}


export const useCharactersStore = create<CharacterStore & Actions>()(( set ) => ({
    mainList: [],
    jjkList: [],
    demonSlayerList: [],
    hxhList: [],
    setMainList: ( list: CharacterResponse[] ) => {
        set(() => ({ mainList: list }))
    },
    addToMainList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ mainList: [ ...ctx.mainList, char ] }))
    },
    filterMainList: () => {},
    setJJKList: ( list: CharacterResponse[] ) => {
        set(() => ({ jjkList: list }))
    },
    addToJJKList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ jjkList: [ ...ctx.jjkList, char ] }))
    },
    filterJJKList: () => {},
    setDemonSlayerList: ( list: CharacterResponse[] ) => {
        set(() => ({ demonSlayerList: list }))
    },
    addToDemonSlayerList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ demonSlayerList: [ ...ctx.demonSlayerList, char ] }))
    },
    filterDemonSlayerList: () => {},
    setHxHList: ( list: CharacterResponse[] ) => {
        set(() => ({ hxhList: list }))
    },
    addToHxHList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ hxhList: [ ...ctx.hxhList, char ] }))
    },
    filterHxHList: () => {},
}))