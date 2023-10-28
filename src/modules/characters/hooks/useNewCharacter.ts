import { useForm, SubmitHandler } from 'react-hook-form';
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { toast } from 'sonner';
import moment from 'moment';
import { CharacterLike } from '../interfaces/character';
import { charactersActions } from '..';


const defaultValues:CharacterLike = {
    name: "",
    serie: "",
    about: "",
    image: "",
    status: ""
}

export const useNewCharacter = () => {

    const { register, watch, handleSubmit } = useForm<CharacterLike>({
        defaultValues
    });
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: charactersActions.newCharacter,
        onSuccess: ( character, _vars ) => {
            toast.success("Personaje agregado correctamente", {
                description: `${ character.name } agregado ${ moment().format('MMMM Do YYYY, h:mm:ss a')}`
            });
            
            queryClient.invalidateQueries({
                queryKey: ['characters', { filterKey: character.serie }]
            });

            queryClient.invalidateQueries({
                queryKey: ['characters', {}]
            });
        },
        onError: ( _error, vars ) => {
            console.log( _error );
            toast.error("Ups, ha ocurrido un error al agregar el personaje", {
                description: `${ vars.name } intento ${ moment().format('MMMM Do YYYY, h:mm:ss a')}`
            });
        }
    })

    const onNewCharacter:SubmitHandler<CharacterLike> = async ( data ) => {
        console.log( data );
        //mutation.mutate( data );
    }

    return {
        register,
        watch,
        handleSubmit,
        onNewCharacter,
        queryClient
    }
}
