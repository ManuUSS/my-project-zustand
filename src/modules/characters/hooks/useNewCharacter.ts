import { useState, ChangeEvent, createElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { toast } from 'sonner';
import moment from 'moment';
import { CharacterLike, CharacterResponse, Power, Status } from '../interfaces/character';
import { charactersActions, useCharactersStore } from '..';
import { ToasterSuccess } from '../../shared/components/ToasterSuccess';
import { ToasterError } from '../../shared/components/ToasterError';

// Defines the default values of the object that will be created
const defaultValues:CharacterLike = {
    name: "",
    serie: "",
    about: "",
    image: "",
    status: Status.Unset,
    powers: []
}

/**
 * Perfoms different opperations, it's in charge to handle form submit,
 * updates cache's and state's data and also display toaster messages considering UX.
 * @returns { register, watch, handleSubmit, onNewCharacter, queryClient, mutation }
 */
export const useNewCharacter = () => {

    // <--- Zustand Store | Characters --->
    const { addToMainList } = useCharactersStore();
    // <--- Form properties and handlers --->
    const { register, watch, handleSubmit, reset, formState: { errors }, setValue, getValues } = useForm<CharacterLike>({
        defaultValues
    });
    const [ power, setPower ] = useState<Power>({ name: "", efectiveness: 0 });
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
                    ? []
                    : [ ...oldState, optimisticCharacter ]
                }
            );
            
            // Sets the new characters into query client data
            queryClient.setQueryData<CharacterResponse[]>(
                ['characters', {}],
                ( oldState ) => {
                    return !oldState 
                    ? []
                    : [ ...oldState, optimisticCharacter ]
                }
            );

            return { optimisticCharacter }
        },
        onSuccess: ( character, _vars, ctx ) => {

            // <--- Shows a success message when confirms the POST was successfully submitted -->
            toast.custom(() => ( 
                createElement( 
                    ToasterSuccess, 
                    { 
                        message: `${ character.name } agregado correctamente`,
                        description: `Personaje agregado ${ moment().format('MM/DD/YYYY')}`
                    }
                )),
                {
                  className: "fixed right-0",
                }
            );

            // <--- Clears the previous query key ---> 
            queryClient.removeQueries({
                queryKey: ['characters', ctx?.optimisticCharacter.id ]
            });

            // <--- Invalidates the query to refresh the data --->
            queryClient.invalidateQueries({
                queryKey: ['characters', { filterKey: character.serie }]
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
                    
                    // <--- Updates the zustand state --->
                    addToMainList( character );

                    return oldCharacters.map(( cacheChar ) => 
                        ( cacheChar.id === ctx?.optimisticCharacter.id ) ? character : cacheChar
                    )  
                }
            )
            
            // <--- Resets the form to its initial values --->
            reset();
        },
        onError: ( _error, vars ) => {
            console.log( _error );
            // <--- Shows an error message when the POST wasn't successfully submitted -->
            toast.custom(() => ( 
                createElement( 
                    ToasterError, 
                    { 
                        message: `Ha ocurrido un error al agregar a ${ vars.name }`,
                        description: `Intento al ${ moment().format('MM/DD/YYYY')}`
                    }
                )),
                {
                  className: "fixed right-0",
                }
            );
        }
    })

    /**
     * Handles the submit form event
     * @param { data } CharacterLike
     */
    const onNewCharacter:SubmitHandler<CharacterLike> = async ( data ) => {
        mutation.mutate( data );
    }
    
    const onAddPower = () => {
        if( power.efectiveness > 10 ) {
            return;
        }
        const currentPowers = getValues("powers") || [];
        setValue("powers", [ ...currentPowers, power ]);
        setPower({ name: "", efectiveness: 0 });
    }

    const handleChangePower = ( event: ChangeEvent<HTMLInputElement> ) => {
        const { target: { value, name }} = event;
        setPower(( currentPower ) => ({ ...currentPower, [name]: value }));
    }

    return {
        register,
        errors,
        watch,
        power,
        handleSubmit,
        handleChangePower,
        onAddPower,
        onNewCharacter,
        queryClient,
        mutation
    }
}
