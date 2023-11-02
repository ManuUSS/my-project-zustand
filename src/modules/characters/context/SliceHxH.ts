import { StateCreator } from 'zustand';
import { CharacterResponse, Status } from '..';

export interface HxHSlice {
    hxhList: CharacterResponse[];
    hxhListCopy: CharacterResponse[];
    setHxHList: ( list:CharacterResponse[] ) => void;
    addToHxHList: ( char: CharacterResponse ) => void;
    filterHxHList: ( status?: Status, name?:string ) => void;
}

/**
 * Creates a new slice for Hunter X Hunter
 * Follows the Slice Pattern set by Zustand Team
 * @see (@link https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern)
 * @param { set } HxHSlice | Partial<HxHSlice> 
 * @returns { Object }
 */
export const createHxHlice:StateCreator<HxHSlice> = ( set, get ) => ({
    hxhList: [],
    hxhListCopy: [],
    setHxHList: ( list: CharacterResponse[] ) => {
        set(() => ({ hxhList: list, hxhListCopy: list }))
    },
    addToHxHList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ hxhList: [ ...ctx.hxhList, char ], hxhListCopy: [ ...ctx.hxhList, char ] }))
    },
    filterHxHList: ( status?: Status, name?:string ) => {
        // <--- No filters --->
        if( !status && !name ) {
            set(( ctx ) => ({ hxhListCopy: [ ...ctx.hxhList ] }));
            return;
        } 

        let listFiltered:CharacterResponse[] = [];

        // <--- Both filters --->
        if( name && status ) {
            listFiltered = get().hxhList.filter(( character ) => 
                character.status === status || character.name.includes( name || "" ) 
            );
        }

        // <--- Only name filter --->
        if( name && !status ) {
            listFiltered = get().hxhList.filter(( character ) =>  character.name.includes( name ));
        }
        
        // <--- Only status filter --->
        if( !name && status ) {
            listFiltered = get().hxhList.filter(( character ) =>  character.status === status );
        }

        set(() => ({ hxhListCopy: listFiltered }));
    },
})