import { useState } from 'react'
import { Status, useCharactersStore } from '..';

interface FilterProps {
    label: string;
    value: string;
}

type DropDownOptions = 'visible' | 'hidden';

interface Props {
    listModifier?: "filterMainList" | "filterJJKList" | "filterDemonSlayerList" | "filterHxHList";
    listState?: "mainFilterState" | "jjkFilterState" | "demonSlayerFilterState" | "hxhFilterState";
}

/**
 * This custom hook manages the state and behavior for filtering characters in a search component.
 *
 * @returns {Object} An object containing filterStatus, dropDownVisible, showDropDown, and changeStatus functions.
 */
export const useSearcher = ({ listModifier = "filterMainList", listState = "mainFilterState" }:Props) => {

    const filterList = useCharactersStore(( state ) => state[ listModifier ] );
    const filterState = useCharactersStore(( state ) => state[ listState ] );
    // <--- Handlers filters status --->
    const [ filterStatus, setfilterStatus ] = useState<FilterProps>( filterState );
    const [ dropDownVisible, setdropDownVisible ] = useState<DropDownOptions>( 'hidden' );

    const showDropDown = () => {
        ( dropDownVisible === "hidden" )
        ? setdropDownVisible( "visible" )
        : setdropDownVisible( "hidden" );
    }

    const changeStatus = ( status:FilterProps ) => {
        setfilterStatus( status );
        filterList( status.value as Status );
        setdropDownVisible( 'hidden' );
    }

    return {
        filterStatus,
        dropDownVisible,
        showDropDown,
        changeStatus,

    }
}
