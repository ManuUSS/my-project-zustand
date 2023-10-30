import { useForm, SubmitHandler } from 'react-hook-form';
import { useQueryClient, useMutation } from '@tanstack/react-query'
import { toast } from 'sonner';
import moment from 'moment';
import { CharacterLike, Status } from '../interfaces/character';
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
        onSuccess: ( character ) => {

            toast.success(`${ character.name } agregado correctamente`, {
                description: `Personaje agregado ${ moment().format('MM/DD/YYYY')}`
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
