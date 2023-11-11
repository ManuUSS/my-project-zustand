import { useMutation, useQueryClient } from "@tanstack/react-query"
import { CharacterResponse, charactersActions, useCharactersStore } from ".."
import { toast } from "sonner";
import moment from "moment";
import { createElement } from "react";
import { ToasterSuccess } from "../../shared/components";

export const useDeleteCharacter = () => {
    
    // <--- Current queryclient --->
    const queryClient = useQueryClient();
    const removeFromList = useCharactersStore(( store ) => store.removeFromMainList )

    const mutation = useMutation({
        mutationFn: charactersActions.deleteCharacter,
        onSuccess: ( charDeleted ) => {
            // <--- Shows a success message when confirms the POST was successfully submitted -->
            toast.custom(() => ( 
                createElement( 
                    ToasterSuccess, 
                    { 
                        message: `${ charDeleted.name } eliminado correctamente`,
                        description: `Personaje eliminado ${ moment().format('MM/DD/YYYY')}`
                    }
                )),
                {
                  className: "fixed right-0",
                }
            );
            
            removeFromList( charDeleted.id );

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

    const onDeleteCharacter = async ( id: number  ) => {
        mutation.mutate( { id } );
    }

    return {
        onDeleteCharacter,
        isFetching: mutation.isPending
    }
}
