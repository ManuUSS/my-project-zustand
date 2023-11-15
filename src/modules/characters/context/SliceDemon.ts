import { StateCreator } from 'zustand';
import { CharacterResponse, Status, StatusCharacter } from '..';

export interface DemonSlice {
    demonSlayerList: CharacterResponse[];
    demonSlayerListCopy: CharacterResponse[];
    demonSlayerFilterState: StatusCharacter;
    demonSlayerFilterStateSet: ( filter:StatusCharacter ) => void;
    setDemonSlayerList: ( list:CharacterResponse[] ) => void;
    addToDemonSlayerList: ( char: CharacterResponse ) => void;
    filterDemonSlayerList: ( status?: Status, name?:string ) => void;
}

/**
 * Creates a new slice for Demon Slayer
 * Follows the Slice Pattern set by Zustand Team
 * @see (@link https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern)
 * @param { set } DemonSlice | Partial<DemonSlice> 
 * @returns { Object }
 */
export const createDemonSlice:StateCreator<DemonSlice> = ( set, get ) => ({
    demonSlayerList: [],
    demonSlayerListCopy: [],
    demonSlayerFilterState: { label: "Todos", value: "" },
    setDemonSlayerList: ( list: CharacterResponse[] ) => {
        set(() => ({ demonSlayerList: list, demonSlayerListCopy: list }))
    },
    addToDemonSlayerList: ( char: CharacterResponse ) => {
        set(
            ( ctx ) => 
            ({ 
                demonSlayerList: [ ...ctx.demonSlayerList, char ], 
                demonSlayerListCopy: [ ...ctx.demonSlayerList, char ] 
            })
        )
    },
    filterDemonSlayerList: ( status?: Status, name?:string ) => {
        // <--- No filters --->
        if( !status && !name ) {
            set(( ctx ) => ({ demonSlayerListCopy: [ ...ctx.demonSlayerList ] }));
            return;
        } 

        let listFiltered:CharacterResponse[] = [];

        // <--- Both filters --->
        if( name && status ) {
            listFiltered = get().demonSlayerList.filter(({ status:statusChar, name:nameChar }) => 
                statusChar === status && nameChar.toLowerCase().includes( name || "" ) 
            );
        }

        // <--- Only name filter --->
        if( name && !status ) {
            listFiltered = get()
                .demonSlayerList.filter(({ name:nameChar }) => nameChar.toLowerCase().includes( name ));
        }
        
        // <--- Only status filter --->
        if( !name && status ) {
            listFiltered = get().demonSlayerList.filter(({ status:statusChar }) => statusChar === status );
        }

        set(() => ({ demonSlayerListCopy: listFiltered }));
    },
    demonSlayerFilterStateSet: ( filter: StatusCharacter ) => {
        set(() => ({ demonSlayerFilterState: filter }))
    }
})