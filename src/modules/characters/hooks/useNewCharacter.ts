import { useForm, SubmitHandler } from 'react-hook-form';
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { toast } from 'sonner';
import moment from 'moment';
import { CharacterLike, CharacterResponse, Status } from '../interfaces/character';
import { charactersActions, useCharactersStore } from '..';

// Defines the default values of the object that will be created
const defaultValues:CharacterLike = {
    name: "",
    serie: "",
    about: "",
    image: "",
    status: Status.Unset
}

/**
 * Perfoms different opperations, it's in charge to handle form submit,
 * updates cache's and state's data and also display toaster messages considering UX.
 * @returns { register, watch, handleSubmit, onNewCharacter, queryClient, mutation }
 */
export const useNewCharacter = () => {

    // <--- Zustand Store | Characters --->
    const { addToMainList, addToJJKList, addToDemonSlayerList, addToHxHList } = useCharactersStore();
    // <--- Form properties and handlers --->
    const { register, watch, handleSubmit } = useForm<CharacterLike>({
        defaultValues
    });
    // <--- Current queryclient --->
    const queryClient = useQueryClient();
    // <--- Mutations to update caches and state data --->
    const mutation = useMutation({
        mutationFn: charactersActions.newCharacter,
        onMutate: ( charactertToAdd ) => {

            // Optimistic success
            const optimisticCharacter = { id: Math.random(), ...charactertToAdd }

            // Sets the new characters into query client data
            queryClient.setQueryData<CharacterResponse[]>(
                ['characters', {  filterKey: charactertToAdd.serie }],
                ( oldState ) => {
                    return !oldState 
                    ? [ optimisticCharacter ]
                    : [ ...oldState, optimisticCharacter ]
                }
            );
            
            // Sets the new characters into query client data
            queryClient.setQueryData<CharacterResponse[]>(
                ['characters', {}],
                ( oldState ) => {
                    return !oldState 
                    ? [ optimisticCharacter ]
                    : [ ...oldState, optimisticCharacter ]
                }
            );

            return { optimisticCharacter }
        },
        onSuccess: ( character, _vars, ctx ) => {

            // <--- Shows a success message when confirms the POST was successfully submitted -->
            toast.success(`${ character.name } agregado correctamente`, {
                description: `Personaje agregado ${ moment().format('MM/DD/YYYY')}`
            });
            
            // <--- Clears the previous query key ---> 
            queryClient.removeQueries({
                queryKey: ['characters', ctx?.optimisticCharacter.id ]
            });

            // <--- Set new data with cache filter key --->
            queryClient.setQueryData<CharacterResponse[]>(
            ['characters', { filterKey: character.serie }],
            ( oldCharacters ) => {
                if ( !oldCharacters ) {
                    // The query is set as invalid
                    queryClient.invalidateQueries({
                        queryKey: ['characters', { filterKey: character.serie }]
                    });
                    return [];
                }
  
                return oldCharacters.map(( cacheChar ) => 
                    ( cacheChar.id === ctx?.optimisticCharacter.id ) ? character : cacheChar
                )  
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
                        return [];
                    }
      
                    return oldCharacters.map(( cacheChar ) => 
                        ( cacheChar.id === ctx?.optimisticCharacter.id ) ? character : cacheChar
                    )  
                }
            )
            
            // <--- Updates the zustand state --->
            validateToAddCharacterSerie( character.serie, character );
        },
        onError: ( _error, vars ) => {
            console.log( _error );
            // <--- Shows an error message when the POST wasn't successfully submitted -->
            toast.error(`Ups, ha ocurrido un error al agregar a ${ vars.name }`, {
                description: `Intento al ${ moment().format('MM/DD/YYYY')}`
            });
        }
    })

    /**
     * Verifies the character's serie and adds it to his correspondent list
     * by modifying the local state on Zustand
     * @param { serie } string 
     * @param { character } CharacterResponse 
     */
    const validateToAddCharacterSerie = ( serie: string, character: CharacterResponse ) => {
        // <--- Verifies character's serie --->
        switch ( serie ) {
            case "Jujutsu Kaisen" :
                // <--- Modifies State's JJK List --->
                addToJJKList( character );
                break;
            
            case "Demon Slayer" :
                // <--- Modifies State's Demon Slayer List --->
                addToDemonSlayerList( character );
                break;

            case "Hunter X Hunter" :
                // <--- Modifies State's Hunter X Hunter List --->
                addToHxHList( character );
                break;
        }

        // <--- Modifies State's Main List --->
        addToMainList( character );

    }

    /**
     * Handles the submit form event
     * @param { data } CharacterLike
     */
    const onNewCharacter:SubmitHandler<CharacterLike> = async ( data ) => {
        mutation.mutate( data );
    }

    return {
        register,
        watch,
        handleSubmit,
        onNewCharacter,
        queryClient,
        mutation
    }
}
