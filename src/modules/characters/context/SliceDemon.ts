import { StateCreator } from 'zustand';
import { CharacterResponse, Status } from '..';

export interface DemonSlice {
    demonSlayerList: CharacterResponse[];
    demonSlayerListCopy: CharacterResponse[];
    demonSlayerFilterState: { label: string, value: string };
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
            listFiltered = get().demonSlayerList.filter(( character ) => 
                character.status === status || character.name.includes( name || "" ) 
            );
        }

        // <--- Only name filter --->
        if( name && !status ) {
            listFiltered = get().demonSlayerList.filter(( character ) =>  character.name.includes( name ));
        }
        
        // <--- Only status filter --->
        if( !name && status ) {
            listFiltered = get().demonSlayerList.filter(( character ) =>  character.status === status );
        }

        set(() => ({ demonSlayerListCopy: listFiltered }));
    },
})