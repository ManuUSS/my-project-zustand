import { StateCreator } from 'zustand';
import { CharacterResponse, Status, StatusCharacter } from '..';

export interface JJKSlice {
    jjkList: CharacterResponse[];
    jjkListCopy: CharacterResponse[];
    setJJKList: ( list:CharacterResponse[] ) => void;
    addToJJKList: ( char: CharacterResponse ) => void;
    filterJJKList: ( status?: Status, name?:string ) => void;
    jjkFilterState: StatusCharacter;
    jjkFilterStateSet: ( filter: StatusCharacter ) => void;
}

/**
 * Creates a new slice for JJK List
 * Follows the Slice Pattern set by Zustand Team
 * @see (@link https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern)
 * @param { set } JJKSlice | Partial<JJKSlice> 
 * @returns { Object }
 */
export const createJJKSlice:StateCreator<JJKSlice> = ( set, get ) => ({
    jjkList: [],
    jjkListCopy: [],
    setJJKList: ( list: CharacterResponse[] ) => {
        set(() => ({ jjkList: list, jjkListCopy: list }))
    },
    addToJJKList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ jjkList: [ ...ctx.jjkList, char ], jjkListCopy: [ ...ctx.jjkList, char ] }))
    },
    filterJJKList: ( status?: Status, name?:string ) => {

        // <--- No filters --->
        if( !status && !name ) {
            set(( ctx ) => ({ jjkListCopy: [ ...ctx.jjkList ] }));
            return;
        } 

        let listFiltered:CharacterResponse[] = [];

        // <--- Both filters --->
        if( name && status ) {
            listFiltered = get()
                .jjkList.filter(({ status: statusChar, name:nameChar }) => 
                    statusChar === status && nameChar.toLowerCase().includes( name || "" ) 
                );
        }

        // <--- Only name filter --->
        if( name && !status ) {
            listFiltered = get().jjkList.filter(({ name:nameChar }) => nameChar.toLowerCase().includes( name! ));
        }
        
        // <--- Only status filter --->
        if( !name && status ) {
            listFiltered = get().jjkList.filter(({ status: statusChar }) => statusChar === status );
        }

        set(() => ({ jjkListCopy: listFiltered }));
    },
    jjkFilterState: { label: "Todos", value: "" },
    jjkFilterStateSet: ( filter ) => { set(() => ({ jjkFilterState: filter })) }
})