import { useForm } from 'react-hook-form';
import { useQueryClient, useMutation } from '@tanstack/react-query'
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
            
        } 
    })


    return {
        register,
        watch,
        handleSubmit
    
    }
}
