import { FC, ChangeEvent } from 'react';
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { CharacterLike } from '..'
import { Power } from '../interfaces/character';

interface Props {
    handleSubmit: UseFormHandleSubmit<CharacterLike, undefined>;
    handleChangePower: ( event: ChangeEvent<HTMLInputElement> ) => void;
    onAddPower: () => void;
    power: Power;
    register: UseFormRegister<CharacterLike>;
    onNewCharacter: SubmitHandler<CharacterLike>;
    errors: FieldErrors<CharacterLike>
    isPending: boolean;
}

/**
 * This component represents a form for entering character information, such as name, series, status, description, and image.
 * It handles form submission and displays validation errors if applicable.
 *
 * @component
 *
 * @param {Object} Props - The component's props.
 * @param {Function} handleSubmit - The function to handle form submission.
 * @param {Function} register - The function for registering form inputs.
 * @param {Function} onNewCharacter - The function to call upon successful form submission.
 * @param {Object} errors - Validation errors associated with form inputs.
 * @param {boolean} isPending - Flag indicating if the form submission is pending.
 *
 * @return {JSX.Element} The rendered CharacterForm component.
 */
export const CharacterForm:FC<Props> = (
    { handleSubmit, handleChangePower, onAddPower, power, register, onNewCharacter, errors, isPending }
) => {
  
    return (
        <form 
            className="p-4 col-span-2 border bg-gray-50 rounded-md flex flex-col gap-3 text-lg dark:border-gray-700 dark:bg-gray-700" 
            onSubmit={ handleSubmit( onNewCharacter ) }
            noValidate
        >
            {/* Name */}
            <div>
                <label htmlFor="name" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-gray-900 dark:text-white">Nombre del personaje</label>
                <input 
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                    type="text" 
                    id="name" 
                    aria-describedby="character-name" 
                    { ...register("name", {
                        required: {
                            value: true,
                            message: "Este campo es requerido"
                        }
                    })}
                />
                <p className='text-red-600 text-sm font-semibold mt-1 ml-1 dark:text-red-400'>
                    { errors?.name?.message }
                </p>
            </div>
            {/* Serie */}
            <div>
                <label htmlFor="serie" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-gray-900 dark:text-white">Serie a la que pertenece</label>
                <select 
                    id="serie" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    { ...register("serie", {
                        required: {
                            value: true,
                            message: "Este campo es requerido"
                        }
                    })}
                >
                    <option value="Jujutsu Kaisen">Jujutsu Kaisen</option>
                    <option value="Demon Slayer">Demon Slayer</option>
                    <option value="Hunter X Hunter">Hunter X Hunter</option>
                </select>
                <p className='text-red-600 text-sm font-semibold mt-1 ml-1 dark:text-red-400'>
                    { errors?.serie?.message }
                </p>
            </div>
            {/* Status */}
            <div>
                <label htmlFor="status" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-gray-900 dark:text-white">Estado actual</label>
                <select 
                    id="status" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    { ...register("status", {
                        required: {
                            value: true,
                            message: "Este campo es requerido"
                        }
                    })}
                >
                    <option value="alive">Vivo</option>
                    <option value="dead">Muerto</option>
                    <option value="unknown">Desconocido</option>
                </select>
                <p className='text-red-600 text-sm font-semibold mt-1 ml-1 dark:text-red-400'>
                    { errors?.status?.message }
                </p>
            </div>
            {/* About */}
            <div>
                <label htmlFor="about" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-gray-900 dark:text-white">Acerca de</label>
                <textarea 
                    id="about" 
                    className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Leave a comment..."
                    rows={ 4 } 
                    { ...register("about", {
                        required: {
                            value: true,
                            message: "Este campo es requerido"
                        },
                        minLength: {
                            value: 120,
                            message: "La descripción del personaje es demasiado corta"
                        }
                    })}
                />
                <p className='text-red-600 text-sm font-semibold mt-1 ml-1 dark:text-red-400'>
                    { errors?.about?.message }
                </p>
            </div>
            {/* Powers */}
            <div>
                <p className="text-gray-900 dark:text-white">Poderes</p>
                <div className='flex flex-row gap-2'>
                    <div className='flex-1'>
                        <label htmlFor="name" className="text-gray-900 dark:text-white">Nombre</label>
                        <input 
                            type="text"
                            id="name" 
                            name="name"
                            value={ power.name } 
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                            onChange={ handleChangePower }
                        />
                    </div>
                    <div className='flex-1'>
                        <label htmlFor="efectiveness" className="text-gray-900 dark:text-white">Escala</label>
                        <input 
                            type="number" 
                            max={ 10 }
                            id="efectiveness"
                            name="efectiveness" 
                            value={ power.efectiveness }
                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                            onChange={ handleChangePower }
                        />
                        <p className='text-gray-300 text-sm font-semibold mt-1 ml-1 dark:text-gray-400'>
                            Máximo de escala 10
                        </p>
                    </div>
                    <button
                        type='button'
                        className="self-center text-lg text-white bg-green-500 hover:bg-green-600 rounded-lg px-5 py-2.5 text-center dark:bg-green-400 dark:hover:bg-green-500 flex items-center"
                        onClick={ onAddPower }
                    >
                        Agregar
                    </button>
                </div>
            </div>
            {/* Image */}
            <div>
                <label htmlFor="image" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-gray-900 dark:text-white">Imagen principal</label>
                <input 
                    type="text" 
                    id="image" 
                    aria-describedby="character-image" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                    { ...register("image", {
                        required: {
                            value: true,
                            message: "Este campo es requerido"
                        }
                    })}
                />
                <p className='text-red-600 text-sm font-semibold mt-1 ml-1 dark:text-red-400'>
                    { errors?.image?.message }
                </p>
            </div>
             {/* Cover photos */}
             <div>
                <label htmlFor="about" className="after:content-['*'] after:ml-0.5 after:text-red-500 text-gray-900 dark:text-white">Imagenes de cover</label>
                <textarea 
                    id="about" 
                    className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Leave a comment..."
                    rows={ 4 } 
                    { ...register("cover_photos", {
                        required: {
                            value: true,
                            message: "Este campo es requerido"
                        }
                    })}
                />
                <p className='text-gray-300 text-sm font-semibold mt-1 ml-1 dark:text-gray-400'>
                    Agregue 6 links separados por ","
                </p>
            </div>
            <div className='flex justify-end mt-4'>
                <button 
                    type="submit" 
                    disabled={ isPending }
                    className="text-lg text-white bg-sky-500 hover:bg-sky-600 rounded-lg px-5 py-2.5 text-center dark:bg-sky-400 dark:hover:bg-sky-500 flex items-center"
                >
                    {
                        isPending && 
                        (
                            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                        )
                    }
                    { 
                        isPending 
                        ? "Guardando..."
                        : "Guardar"
                    }
                </button>
            </div>
        </form>
    )
}
