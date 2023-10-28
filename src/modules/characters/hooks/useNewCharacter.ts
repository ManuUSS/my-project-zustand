import { useForm } from "react-hook-form"
import { CharacterLike } from "../interfaces/character"



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

    



    return {
        register,
        watch,
        handleSubmit
    
    }
}
