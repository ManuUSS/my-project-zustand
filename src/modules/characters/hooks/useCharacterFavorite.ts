import { createElement } from 'react';
import { toast } from 'sonner';
import moment from 'moment';
import { CharacterResponse, useFavoriteStore } from '..';
import { ToasterFavorite } from '../../shared/components';


export const useCharacterFavorite = () => {
    
    const addFavoriteState = useFavoriteStore(( state ) => state.addTofavoriteList );

    const onAddFavorite = ( char: CharacterResponse ) => {
        addFavoriteState( char );
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

    return {
        onAddFavorite
    }
}
