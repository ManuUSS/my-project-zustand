import { ChangeEvent, useEffect, useState } from 'react'
import { Status, useCharactersStore, validateStautsFilter } from '..';

interface FilterProps {
    label: string;
    value: string;
}

type DropDownOptions = 'visible' | 'hidden';

interface Props {
    listModifier?: "filterMainList" | "filterJJKList" | "filterDemonSlayerList" | "filterHxHList";
    listState?: "mainFilterState" | "jjkFilterState" | "demonSlayerFilterState" | "hxhFilterState";
}

type FilterHandler = "mainFilterStateSet" | "jjkFilterStateSet" | "demonSlayerFilterStateSet" | "hxhFilterStateSet";

/**
 * This custom hook manages the state and behavior for filtering characters in a search component.
 *
 * @returns {Object} An object containing filterStatus, dropDownVisible, showDropDown, and changeStatus functions.
 */
export const useSearcher = ({ listModifier = "filterMainList", listState = "mainFilterState" }:Props) => {
    
    // <--- Characters store handlers | Zustand --->
    const filterContextHandler:FilterHandler = `${ listState }Set`;
    const filterList = useCharactersStore(( state ) => state[ listModifier ] );
    const filterState = useCharactersStore(( state ) => state[ listState ] );
    const filterStateHandler = useCharactersStore(( state ) => state[ filterContextHandler ] );

    // <--- Handlers filters status --->
    const [ filterStatus, setfilterStatus ] = useState<FilterProps>( filterState );
    const [ filterName, setfilterName ] = useState<string>( "" );
    const [ filterColor, setfilterColor ] = useState<string>( "" );
    const [ dropDownVisible, setdropDownVisible ] = useState<DropDownOptions>( 'hidden' );

    useEffect(() => {
        setfilterColor( validateStautsFilter( filterStatus.value ) );
    }, [ filterStatus ]);
    

    /**
     * Toggles the visibility of the dropdown element between "visible" and "hidden".
     */
    const showDropDown = () => {
        ( dropDownVisible === "hidden" )
        ? setdropDownVisible( "visible" )
        : setdropDownVisible( "hidden" );
    }

    /**
     * Changes the status filter and triggers associated actions.
     *
     * @param {FilterProps} status - The status filter to apply.
     */
    const changeStatus = ( status:FilterProps ) => {
        setfilterStatus( status );
        filterList( status.value as Status );
        filterStateHandler( status );
        setdropDownVisible( 'hidden' );
    }

    /**
     * 
     * @param { ChangeEvent<HTMLInputElement> } event
     */
    const changeSearchName = ( event: ChangeEvent<HTMLInputElement >) => {
        const { target: { value }} = event;
        filterList( filterStatus.value as Status, value.toLowerCase() );
        setfilterName( value );
    }


    return {
        filterStatus,
        filterColor,
        filterName,
        dropDownVisible,
        showDropDown,
        changeStatus,
        changeSearchName
    }
}
