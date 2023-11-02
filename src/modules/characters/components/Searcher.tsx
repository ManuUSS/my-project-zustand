import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { StopIcon } from '@heroicons/react/24/solid';
import { useSearcher } from '..';
import { FC } from 'react';

interface Props {
    listModifier?: "filterMainList" | "filterJJKList" | "filterDemonSlayerList" | "filterHxHList"
}

/**
 * This component provides a search bar and filter options for character search.
 * Users can input a character's name and filter characters by their status (alive, dead, unknown, or all).
 *
 * @component
 *
 * @return {JSX.Element} The rendered Searcher component.
 */
export const Searcher:FC<Props> = ({ listModifier }) => {

  const { filterStatus, dropDownVisible, changeStatus, showDropDown } = useSearcher({ listModifier });

  return (
    <div className='flex items-center'>
        <form>
            <div className="flex">
                <div>
                    <button 
                        id="dropdown-button-2" 
                        data-dropdown-toggle="dropdown-search-city" 
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 font-medium text-center text-gray-500 border border-gray-300 rounded-l-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600" 
                        type="button"
                        onClick={ showDropDown }
                    >
                        { filterStatus.label }
                    </button>
                    <div 
                        id="dropdown-search-city" 
                        className={`${ dropDownVisible } absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                    >
                        <ul className="py-2 text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-2">
                            <li>
                                <button 
                                    type="button" 
                                    className="inline-flex w-full px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" 
                                    role="menuitem"
                                    onClick={ () => changeStatus({ label: 'Vivos', value: 'alive' })}
                                >
                                    <div className="inline-flex items-center">     
                                        <StopIcon
                                            className="w-5 text-green-500"
                                        />        
                                        Vivos
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button 
                                    type="button" 
                                    className="inline-flex w-full px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" 
                                    role="menuitem"
                                    onClick={ () => changeStatus({ label: 'Muertos', value: 'dead' })}
                                >
                                    <div className="inline-flex items-center">
                                        <StopIcon
                                            className="w-5 text-red-500"
                                        />
                                        Muertos
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button 
                                    type="button" 
                                    className="inline-flex w-full px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" 
                                    role="menuitem"
                                    onClick={ () => changeStatus({ label: 'Desconocido', value: 'unknown' })}
                                >
                                    <div className="inline-flex items-center">
                                        <StopIcon
                                            className="w-5 text-slate-400"
                                        />        
                                        Desconocido
                                    </div>
                                </button>
                            </li>
                            <li>
                                <button 
                                    type="button" 
                                    className="inline-flex w-full px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" 
                                    role="menuitem"
                                    onClick={ () => changeStatus({ label: 'Todos', value: '' })}
                                >
                                    <div className="inline-flex items-center">
                                        <StopIcon
                                            className="w-5 text-gray-100 dark:text-gray-800"
                                        />       
                                        Todos
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="relative">
                    <input type="search" id="location-search" className="w-64 p-2.5 z-20 text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Nombre del personaje" />
                    <button 
                        type="submit" 
                        className="absolute top-0 right-0 h-full p-2.5 font-medium text-white bg-sky-600 rounded-r-lg border border-sky-600 hover:bg-sky-700 focus:ring-4 dark:bg-blue-600 dark:hover:bg-blue-700 "
                    >
                        <MagnifyingGlassIcon width={ 15 }/>
                    </button>
                </div>
            </div>
        </form>
    </div>
  )
}
