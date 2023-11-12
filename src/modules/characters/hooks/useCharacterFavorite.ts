import { createElement } from 'react';
import { toast } from 'sonner';
import moment from 'moment';
import { CharacterResponse, useFavoriteStore } from '..';
import { ToasterFavorite, ToasterInfo } from '../../shared/components';


export const useCharacterFavorite = () => {
    
    // <--- Favorites store handlers | Zustand --->
    const addFavoriteState = useFavoriteStore(( state ) => state.addTofavoriteList );
    const removeFavoriteState = useFavoriteStore(( state ) => state.removeFromFavoriteList );

    /**
     * Handles the addition of a character to favorites and displays a custom toast notification.
     *
     * @param {CharacterResponse} char - The character to be added to favorites.
     */
    const onAddFavorite = ( char: CharacterResponse ) => {
        // <--- Modifies local state --->
        addFavoriteState( char );
        // <--- Display a custom toast notification --->
        toast.custom(() => (
            createElement(
                ToasterFavorite,
                {
                    message: `${ char.name } agregado a favoritos`,
                    description: `Personaje agregado ${ moment().format('MM/DD/YYYY')}`
                }
            )
        ));
    }

    /**
     * Handles the remove of a character to favorites and displays a custom toast notification.
     *
     * @param { string } charName - The character to be added to favorites.
     */
    const onRemoveFavorite = ( charName: string ) => {
        // <--- Modifies local state --->
        removeFavoriteState( charName );
        // <--- Display a custom toast notification --->
        toast.custom(() => (
            createElement(
                ToasterInfo,
                {
                    message: `${ charName } eliminado de favoritos`,
                    description: `Personaje eliminado ${ moment().format('MM/DD/YYYY')}`
                }
            )
        ));
    }



    return {
        onAddFavorite,
        onRemoveFavorite
    }
}
