import { StateCreator } from 'zustand';
import { CharacterResponse, Status, StatusCharacter } from '..';

export interface MainSlice {
    mainList: CharacterResponse[];
    mainListCopy: CharacterResponse[];
    mainFilterState: StatusCharacter;
    mainFilterStateSet: ( filter: StatusCharacter ) => void;
    setMainList: ( list:CharacterResponse[] ) => void;
    addToMainList: ( char: CharacterResponse ) => void;
    filterMainList: ( status?: Status, name?:string ) => void;
}

/**
 * Creates a new slice for Main List (All characteres)
 * Follows the Slice Pattern set by Zustand Team
 * @see (@link https://docs.pmnd.rs/zustand/guides/typescript#slices-pattern)
 * @param { set } MainSlice | Partial<MainSlice> 
 * @returns { Object }
 */
export const createMainSlice:StateCreator<MainSlice> = ( set, get ) => ({
    mainList: [],
    mainListCopy: [],
    setMainList: ( list: CharacterResponse[] ) => {
        set(() => ({ mainList: list, mainListCopy: list }))
    },
    addToMainList: ( char: CharacterResponse ) => {
        set(( ctx ) => ({ mainList: [ ...ctx.mainList, char ], mainListCopy: [ ...ctx.mainList, char ] }))
    },
    filterMainList: ( status?: Status, name?:string ) => {
        // <--- No filters --->
        if( !status && !name ) {
            set(( ctx ) => ({ mainListCopy: [ ...ctx.mainList ] }));
            return;
        } 

        let listFiltered:CharacterResponse[] = [];

        // <--- Both filters --->
        if( name && status ) {
            listFiltered = get().mainList.filter(( character ) => 
                character.status === status || character.name.includes( name || "" ) 
            );
        }

        // <--- Only name filter --->
        if( name && !status ) {
            listFiltered = get().mainList.filter(( character ) =>  character.name.includes( name ));
        }
        
        // <--- Only status filter --->
        if( !name && status ) {
            listFiltered = get().mainList.filter(( character ) =>  character.status === status );
        }

        set(() => ({ mainListCopy: listFiltered }));
    },
    mainFilterState: { label: "Todos", value: "" },
    mainFilterStateSet: ( filter: StatusCharacter ) => {
        set(() => ({ mainFilterState: filter }))
    }
})