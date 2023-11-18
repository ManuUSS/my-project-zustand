import { useState, ChangeEvent, createElement } from 'react';
import { useQueryClient, useMutation, useQuery } from '@tanstack/react-query';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';
import dayjs from 'dayjs';
import { charactersActions, useCharactersStore } from '..';
import { CharacterLike, CharacterResponse, Power } from '..';
import { ToasterSuccess, ToasterError, ToasterInfo } from '../../shared/components';


/**
 * Perfoms different opperations, it's in charge to handle form submit,
 * updates cache's and state's data and also display toaster messages considering UX.
 * @returns { register, watch, handleSubmit, onNewCharacter, queryClient, mutation }
 */
export const useEditCharacter = () => {

    // <--- Zustand Store | Characters --->
    const { addToMainList, removeFromMainList } = useCharactersStore();
    const navigate = useNavigate();
    const params = useParams();  
    const { id = '0' } = params;
    const { data:defaultValues } = useQuery({
        queryKey: ['characters', Number(id) ],
        queryFn: () => charactersActions.getCharacter({ id:+id }),
        staleTime: 1000 * 60 * 10
    });

    // <--- Form properties and handlers --->
    const { register, watch, handleSubmit, formState: { errors }, setValue, getValues } = useForm<CharacterResponse>({
        defaultValues
    });
    
    const [ power, setPower ] = useState<Power>({ name: "", efectiveness: 0 });
    
    // <--- Current queryclient --->
    const queryClient = useQueryClient();

    // <--- Mutations to update caches and state data --->
    const mutation = useMutation({
        mutationFn: ( character:CharacterResponse ) => charactersActions.editCharacter( character, defaultValues!.id ),
        onMutate: ( charactertToUpdate ) => {

            // Optimistic success
            const optimisticCharacter = { ...charactertToUpdate };
            
            // Sets the new characters into query client data
            queryClient.setQueryData<CharacterResponse[]>(
                ['characters', {}],
                ( oldState ) => {
                    if( !oldState )
                    return [];
                    
                    const oldCache = oldState.filter(( { id } ) => id !== optimisticCharacter.id );
                    return [ ...oldCache, optimisticCharacter ]
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
                        message: `${ character.name } actualizado correctamente`,
                        description: `Personaje actualizado ${ dayjs().format('MM/DD/YYYY')}`
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
                    removeFromMainList( character.id );
                    addToMainList( character );

                    return oldCharacters.map(( cacheChar ) => 
                        ( cacheChar.id === ctx?.optimisticCharacter.id ) ? character : cacheChar
                    )  
                }
            )
            
            navigate('/');
        },
        onError: ( _error, vars, ctx ) => {
            console.log( _error );
            // <--- Shows an error message when the POST wasn't successfully submitted -->
            toast.custom(() => ( 
                createElement( 
                    ToasterError, 
                    { 
                        message: `Ha ocurrido un error al actualizar a ${ vars.name }`,
                        description: `Intento al ${ dayjs().format('MM/DD/YYYY')}`
                    }
                )),
                {
                  className: "fixed right-0",
                }
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
     * @param { data } CharacterResponse
     */
    const onEditCharacter:SubmitHandler<CharacterResponse> = async ( data ) => {
        
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
        let strn:string | string[] = data.cover_photos!;
        if( typeof strn === "string" ) {
            // @ts-ignore
            strn = strn.replaceAll("\n", "").trim();
            // @ts-ignore
            return strn.split(',');
        }
        return strn;
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
        onEditCharacter,
        queryClient,
        mutation
    }

    
}
