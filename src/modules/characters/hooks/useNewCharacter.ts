import { useForm, SubmitHandler } from 'react-hook-form';
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { toast } from 'sonner';
import moment from 'moment';
import { CharacterLike, CharacterResponse, Status } from '../interfaces/character';
import { charactersActions } from '..';


const defaultValues:CharacterLike = {
    name: "",
    serie: "",
    about: "",
    image: "",
    status: Status.Unset
}

export const useNewCharacter = () => {

    const { register, watch, handleSubmit } = useForm<CharacterLike>({
        defaultValues
    });
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: charactersActions.newCharacter,
        onMutate: ( characterToAdd ) => {
            const optimisticCharacter = { id: Math.random(), ...characterToAdd };
            queryClient.setQueryData<CharacterResponse[]>(
                ['characters', { filterKey: characterToAdd.serie }],
                ( old ) => {
                    if( !old ) return [ optimisticCharacter ];

                    return [ ...old, optimisticCharacter ]
            });
            return { optimisticCharacter }
        },
        onSuccess: ( character, _vars, ctx ) => {
            toast.success(`${ character.name } agregado correctamente`, {
                description: `Personaje agregado ${ moment().format('MM/DD/YYYY')}`
            });
            
            queryClient.removeQueries({
                queryKey: ['characters', ctx?.optimisticCharacter.id]
            });

            queryClient.setQueryData<CharacterResponse[]>(
                ['characters', {}],
                ( oldChars ) => {
                  if ( !oldChars ) return []
      
                  return oldChars.map(( cacheChar ) => 
                    ( cacheChar.id === ctx?.optimisticCharacter.id ) ? character : cacheChar
                  )  
                }
            )
            queryClient.setQueryData<CharacterResponse[]>(
                ['characters', { filterKey: character.serie }],
                ( oldChars ) => {
                  if ( !oldChars ) return []
      
                  return oldChars.map(( cacheChar ) => 
                    ( cacheChar.id === ctx?.optimisticCharacter.id ) ? character : cacheChar
                  )  
                }
            )

        },
        onError: ( _error, vars ) => {
            console.log( _error );
            toast.error(`Ups, ha ocurrido un error al agregar a ${ vars.name }`, {
                description: `Intento al ${ moment().format('MM/DD/YYYY')}`
            });
        }
    })

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
