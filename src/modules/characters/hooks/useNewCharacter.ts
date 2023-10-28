import { useForm, SubmitHandler } from 'react-hook-form';
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom';
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
    const navigate = useNavigate();
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
        onSuccess: ( character, _vars ) => {
            toast.success("Personaje agregado correctamente", {
                description: `${ character.name } agregado ${ moment().format('MMMM Do YYYY')}`
            });
            
            queryClient.refetchQueries({
                queryKey: ['characters', {}]
            });

            queryClient.refetchQueries({
                queryKey: ['characters', { filterKey: character.serie }]
            });
            

            navigate( -1 );
        },
        onError: ( _error, vars ) => {
            console.log( _error );
            toast.error("Ups, ha ocurrido un error al agregar el personaje", {
                description: `${ vars.name } intento ${ moment().format('MMMM Do YYYY')}`
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
