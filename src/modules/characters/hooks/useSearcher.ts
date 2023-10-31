import { useState } from 'react'

interface FilterProps {
    label: string;
    value: string;
}

type DropDownOptions = 'visible' | 'hidden';

/**
 * This custom hook manages the state and behavior for filtering characters in a search component.
 *
 * @returns {Object} An object containing filterStatus, dropDownVisible, showDropDown, and changeStatus functions.
 */
export const useSearcher = () => {

    const [ filterStatus, setfilterStatus ] = useState<FilterProps>({ label: 'Todos', value: ''});
    const [ dropDownVisible, setdropDownVisible ] = useState<DropDownOptions>( 'hidden' );

    const showDropDown = () => {
        ( dropDownVisible === "hidden" )
        ? setdropDownVisible( "visible" )
        : setdropDownVisible( "hidden" );
    }

    const changeStatus = ( status:FilterProps ) => {
        setfilterStatus( status );
        setdropDownVisible( 'hidden' );
    }

    return {
        filterStatus,
        dropDownVisible,
        showDropDown,
        changeStatus,

    }
}
