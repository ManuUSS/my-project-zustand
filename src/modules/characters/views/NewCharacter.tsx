import { ListHeader } from '..';
import { useNewCharacter } from '../hooks/useNewCharacter';


export const NewCharacter = () => {
  
  const { register, handleSubmit, onNewCharacter } = useNewCharacter();


  return (
    <section className="list-container p-4">
        <ListHeader title="Nuevo personaje" hideSearcher/>
        <div className="grid grid-cols-2 gap-4">
            <form 
                className="p-4 border rounded-md flex flex-col gap-3 text-lg" 
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
                        <option value="unknown">Muerto</option>
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
                        className="text-lg text-white bg-sky-500 hover:bg-sky-600 rounded-lg px-5 py-2.5 dark:bg-sky-400 dark:hover:bg-sky-500"
                    >
                        Guardar
                    </button>
                </div>
            </form>
            <div className="p-3 border rounded-md">

            </div>
        </div>
    </section>
  )
}
