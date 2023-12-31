import { useState, ChangeEvent, createElement } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useQueryClient, useMutation } from '@tanstack/react-query'
import dayjs from 'dayjs';
import { toast } from 'sonner';
import { charactersActions, useCharactersStore } from '..';
import { CharacterLike, CharacterResponse, Power, Status } from '..';
import { ToasterSuccess, ToasterError, ToasterInfo } from '../../shared/components';

// Defines the default values of the object that will be created
const defaultValues:CharacterLike = {
    name: "",
    serie: "",
    about: "",
    image: "",
    status: ("") as Status.Unset,
    powers: [],
    cover_photos: [],
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
                        description: `Personaje agregado ${ dayjs().format('MM/DD/YYYY')}`
                    }
                ))
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
        onError: ( _error, vars, ctx ) => {
            console.log( _error );
            // <--- Shows an error message when the POST wasn't successfully submitted -->
            toast.custom(() => ( 
                createElement( 
                    ToasterError, 
                    { 
                        message: `Ha ocurrido un error al agregar a ${ vars.name }`,
                        description: `Intento al ${ dayjs().format('MM/DD/YYYY')}`
                    }
                ))
            );
            // Sets the new characters into query client data
            queryClient.setQueryData<CharacterResponse[]>(
                ['characters', {}],
                ( oldState ) => {
                    if( !oldState ) return [];

                    return oldState.filter(( cacheChar ) => ( cacheChar.id !== ctx?.optimisticCharacter.id ))
                }
            );
        }
    })

    /**
     * Handles the submit form event
     * @param { data } CharacterLike
     */
    const onNewCharacter:SubmitHandler<CharacterLike> = async ( data ) => {
        const links = transformData( data );
        if( links.length > 6 || links.length < 6 ){
            toast.custom(() => (
                createElement(
                    ToasterInfo,
                    {
                        message: "Se aceptan únicamente 6 fotografías"
                    }
                )
            ));
            return;
        }
        data.cover_photos = links;
        mutation.mutate( data );
    }
    
    /**
     * Transforms character data into an array of strings by processing cover photos.
     *
     * @param {CharacterLike} data - The character data containing cover photos.
     * @returns {string[]} An array of strings representing cover photos.
     */
    const transformData = ( data:CharacterLike ): string[] => {
        let strn:any = data.cover_photos;
        strn = strn.replaceAll("\n", "").trim();
        return strn.split(',');
    }

    /**
     * Adds a new power to an array based on the input values.
     *
     * @function
     */
    const onAddPower = () => {
        if( power.efectiveness > 10 || power.efectiveness < 1 ) {
            toast.custom(() => (
                createElement(
                    ToasterInfo,
                    {
                        message: "El poder de escala máximo es 10 y mínimo 1"
                    }
                )
            ));
            return;
        }
        const currentPowers = getValues("powers") || [];
        setValue("powers", [ ...currentPowers, power ]);
        setPower({ name: "", efectiveness: 0 });
    }

    /**
     * Deletes a power from current powers array.
     * Modifies form state
     * 
     * @param {string} powerName 
     */
    const onDeletePower = ( powerName: string ) => {
        const currentPowers = getValues("powers");
        const filtPowers = currentPowers?.filter(( power ) => power.name !== powerName ) || [];
        setValue("powers", [ ...filtPowers ]);
    }

    /**
     * Updates the "power" state based on the input's value and name.
     *
     * @param {ChangeEvent<HTMLInputElement>} event - The event object containing the input data.
     */
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
        onDeletePower,
        onNewCharacter,
        queryClient,
        mutation
    }
}
