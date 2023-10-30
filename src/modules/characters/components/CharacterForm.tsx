import { FC } from 'react'
import { SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form'
import { CharacterLike } from '..'

interface Props {
    handleSubmit: UseFormHandleSubmit<CharacterLike, undefined>;
    register: UseFormRegister<CharacterLike>;
    onNewCharacter: SubmitHandler<CharacterLike>;
    isPending: boolean;
}

export const CharacterForm:FC<Props> = ({ handleSubmit, register, onNewCharacter, isPending }) => {
  
    return (
        <form 
            className="p-4 border rounded-md flex flex-col gap-3 text-lg dark:border-gray-700" 
            onSubmit={ handleSubmit( onNewCharacter ) }
            noValidate
        >
            <div>
                <label htmlFor="name" className="text-gray-900 dark:text-white">Nombre del personaje:</label>
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
            </div>
            <div>
                <label htmlFor="serie" className="text-gray-900 dark:text-white">Serie a la que pertenece:</label>
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
            </div>
            <div>
                <label htmlFor="status" className="text-gray-900 dark:text-white">Estado actual:</label>
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
            </div>
            <div>
                <label htmlFor="about" className="text-gray-900 dark:text-white">Acerca de:</label>
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
            </div>
            <div>
                <label htmlFor="image" className="text-gray-900 dark:text-white">Imagen:</label>
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
