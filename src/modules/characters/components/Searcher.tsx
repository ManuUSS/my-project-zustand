import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { StopIcon } from '@heroicons/react/24/solid';

export const Searcher = () => {

    
  return (
    <div className='flex items-center'>
        <form>
            <div className="flex">
                <button 
                    id="dropdown-button-2" 
                    data-dropdown-toggle="dropdown-search-city" 
                    className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 border border-gray-300 rounded-l-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600" 
                    type="button"
                >
                    Todos 
                </button>
                <div 
                    id="dropdown-search-city" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-2">
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                <div className="inline-flex items-center">     
                                    <StopIcon
                                        className="w-5 text-green-500"
                                    />        
                                    Vivos
                                </div>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                <div className="inline-flex items-center">
                                    <StopIcon
                                        className="w-5 text-red-500"
                                    />
                                    Muertos
                                </div>
                            </button>
                        </li>
                        <li>
                            <button type="button" className="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">
                                <div className="inline-flex items-center">
                                    <StopIcon
                                        className="w-5 text-slate-400"
                                    />        
                                    Desconocido
                                </div>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="relative">
                    <input type="search" id="location-search" className="w-60 p-2.5 z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Nombre del personaje" />
                    <button 
                        type="submit" 
                        className="absolute top-0 right-0 h-full p-2.5 text-sm font-medium text-white bg-sky-600 rounded-r-lg border border-sky-600 hover:bg-sky-700 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700 "
                    >
                        <MagnifyingGlassIcon width={ 15 }/>
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}
