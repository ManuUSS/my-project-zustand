import { ListHeader } from '..';


export const NewCharacter = () => {
  return (
    <section className="list-container p-4">
        <ListHeader title="Nuevo personaje" hideSearcher/>
        <div className="grid grid-cols-2 gap-4">
            <form className="p-4 border rounded-md flex flex-col gap-3 text-lg" action="" noValidate>
                <div>
                    <label htmlFor="name" className="text-gray-900 dark:text-white">Nombre del personaje:</label>
                    <input 
                        type="text" 
                        id="name" 
                        aria-describedby="character-name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
                    />
                </div>
                <div>
                    <label htmlFor="serie" className="text-gray-900 dark:text-white">Serie a la que pertenece:</label>
                    <select id="serie" className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="Hunter X Hunter">Jujutsu Kaisen</option>
                        <option value="Demon Slayer">Demon Slayer</option>
                        <option value="Hunter X Hunter">Hunter X Hunter</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="name" className="text-gray-900 dark:text-white">Acerca de:</label>
                    <textarea id="message" rows={ 4 } className="block p-2.5 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
                </div>
                <div>
                    <label htmlFor="name" className="text-gray-900 dark:text-white">Imagen:</label>
                    <input 
                        type="text" 
                        id="name" 
                        aria-describedby="character-name" 
                        className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  
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
