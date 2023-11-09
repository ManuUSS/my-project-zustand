import { useEffect, useState } from 'react'
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
    
    const filterContextHandler:FilterHandler = `${ listState }Set`;
    const filterList = useCharactersStore(( state ) => state[ listModifier ] );
    const filterState = useCharactersStore(( state ) => state[ listState ] );
    const filterStateHandler = useCharactersStore(( state ) => state[ filterContextHandler ] );

    // <--- Handlers filters status --->
    const [ filterStatus, setfilterStatus ] = useState<FilterProps>( filterState );
    const [ filterColor, setfilterColor ] = useState<string>( "" );
    const [ dropDownVisible, setdropDownVisible ] = useState<DropDownOptions>( 'hidden' );

    useEffect(() => {
        setfilterColor( validateStautsFilter( filterStatus.value ) );
    }, [ filterStatus ]);
    

    const showDropDown = () => {
        ( dropDownVisible === "hidden" )
        ? setdropDownVisible( "visible" )
        : setdropDownVisible( "hidden" );
    }

    const changeStatus = ( status:FilterProps ) => {
        setfilterStatus( status );
        filterList( status.value as Status );
        filterStateHandler( status );
        setdropDownVisible( 'hidden' );
    }


    return {
        filterStatus,
        filterColor,
        dropDownVisible,
        showDropDown,
        changeStatus,

    }
}
