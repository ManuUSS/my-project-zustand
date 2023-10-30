import { create } from 'zustand';
import { CharacterResponse, } from '../modules/characters';

export interface CharacterStore {
    mainList:        CharacterResponse[];
    jjkList:         CharacterResponse[];
    demonSlayerList: CharacterResponse[];
    hxhList:         CharacterResponse[];
}


type Actions = {
    setMainList: ( list:CharacterResponse[] ) => void;
    modifyMainList: ( ) => void;
    setJJKList: ( list:CharacterResponse[] ) => void;
    modifyJJKList: () => void;
    setDemonSlayerList: ( list:CharacterResponse[] ) => void;
    modifyDemonSlayerList: () => void;
    setHxHList: ( list:CharacterResponse[] ) => void;
    modifyHxHList: () => void;
}


export const useCharactersStore = create<CharacterStore & Actions>()(( set ) => ({
    mainList: [],
    jjkList: [],
    demonSlayerList: [],
    hxhList: [],
    setMainList: ( list: CharacterResponse[] ) => {
        set(() => ({ mainList: list }))
    },
    modifyMainList: () => {},
    setJJKList: ( list: CharacterResponse[] ) => {
        set(() => ({ jjkList: list }))
    },
    modifyJJKList: () => {},
    setDemonSlayerList: ( list: CharacterResponse[] ) => {
        set(() => ({ demonSlayerList: list }))
    },
    modifyDemonSlayerList: () => {},
    setHxHList: ( list: CharacterResponse[] ) => {
        set(() => ({ hxhList: list }))
    },
    modifyHxHList: () => {},
}))