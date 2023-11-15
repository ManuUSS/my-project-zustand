import { createElement } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner';
import moment from 'moment';
import { ToasterSuccess } from '../../shared/components';
import { CharacterResponse, charactersActions, useCharactersStore, useFavoriteStore } from '..'

interface Props {
    t?: string | number;
}

export const useDeleteCharacter = ({ t }:Props ) => {
    
    // <--- Current queryclient --->
    const queryClient = useQueryClient();
    const removeFromList = useCharactersStore(( store ) => store.removeFromMainList )
    const removeFromFavorites = useFavoriteStore(( store ) => store.removeFromFavoriteList )

    const mutation = useMutation({
        mutationFn: charactersActions.deleteCharacter,
        onSuccess: ( charDeleted ) => {
            toast.dismiss( t );
            // <--- Shows a success message when confirms the POST was successfully submitted -->
            toast.custom(() => ( 
                createElement( 
                    ToasterSuccess, 
                    { 
                        message: `${ charDeleted.name } eliminado correctamente`,
                        description: `Personaje eliminado ${ moment().format('MM/DD/YYYY')}`
                    }
                ))
            );
            
            removeFromList( charDeleted.id );
            removeFromFavorites( charDeleted.name );
            // <--- Invalidates the query to refresh the data --->
            queryClient.invalidateQueries({
                queryKey: ['characters', { filterKey: charDeleted.serie }]
            });

            // <--- Set new data in general list --->
            queryClient.setQueryData<CharacterResponse[]>(
                ['characters', {}],
                ( oldCharacters ) => {
                    if ( !oldCharacters ) {
                        // The query is set as invalid
                        queryClient.invalidateQueries({
                            queryKey: ['characters', {}]
                        });
                        return;
                    }

                    return oldCharacters.filter(( cacheChar ) => cacheChar.id !== charDeleted.id ); 
                }
            );
            
        }
    })

    const onDeleteCharacter = async ( character: CharacterResponse ) => {
       mutation.mutate( character );
    }

    return {
        onDeleteCharacter,
        isFetching: mutation.isPending
    }
}
