import { StateCreator } from 'zustand';
import { CharacterResponse, Status, StatusCharacter } from '..';

export interface HxHSlice {
    hxhList: CharacterResponse[];
    hxhListCopy: CharacterResponse[];
    hxhFilterState: StatusCharacter;
    hxhFilterStateSet: ( status:StatusCharacter ) => void;
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
    hxhFilterState: { label: "Todos", value: "" },
    setHxHList: ( list: CharacterResponse[] ) => {
        set(() => ({ hxhList: list, hxhListCopy: list }))
    },
    addToHxHList: ( char: CharacterResponse ) => {
        set(
            ( ctx ) => 
            ({ 
                hxhList: [ ...ctx.hxhList, char ], 
                hxhListCopy: [ ...ctx.hxhList, char ] 
            })
        )
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
            listFiltered = get().hxhList.filter(({ status:statusChar, name:nameChar }) => 
                statusChar === status && nameChar.toLowerCase().includes( name || "" ) 
            );
        }

        // <--- Only name filter --->
        if( name && !status ) {
            listFiltered = get().hxhList.filter(({ name:nameChar }) => nameChar.toLowerCase().includes( name ));
        }
        
        // <--- Only status filter --->
        if( !name && status ) {
            listFiltered = get().hxhList.filter(({ status:statusChar }) => statusChar === status );
        }

        set(() => ({ hxhListCopy: listFiltered }));
    },
    hxhFilterStateSet: ( filter:StatusCharacter ) => {
        set(() => ({ hxhFilterState: filter }))
    }
})