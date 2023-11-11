import { StopIcon } from '@heroicons/react/24/solid';
import { useSearcher } from '..';
import { FC, memo } from 'react';

interface Props {
    listModifier?: "filterMainList" | "filterJJKList" | "filterDemonSlayerList" | "filterHxHList";
    listState?: "mainFilterState" | "jjkFilterState" | "demonSlayerFilterState" | "hxhFilterState";
}

/**
 * This component provides a search bar and filter options for character search.
 * Users can input a character's name and filter characters by their status (alive, dead, unknown, or all).
 *
 * @component
 *
 * @return {JSX.Element} The rendered Searcher component.
 */
export const Searcher:FC<Props> = memo(({ listModifier, listState }) => {
  const { 
    filterStatus, filterColor, dropDownVisible, changeStatus, showDropDown 
  } = useSearcher({ listModifier, listState });

  return (
    <div className='flex items-center'>
        <form>
            <div className="flex">
                <div>
                    <button 
                        id="dropdown-button-2" 
                        data-dropdown-toggle="dropdown-search-character" 
                        className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 font-medium text-center text-gray-500 border border-gray-300 rounded-l-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600" 
                        type="button"
                        onClick={ showDropDown }
                    >
                        <StopIcon
                            className={`w-5 ${ filterColor } mr-1`}
                        />    
                        { filterStatus.label }
                    </button>
                    <div 
                        id="dropdown-search-character" 
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
                                            className="w-5 text-[#06d6a0]"
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
                                            className="w-5 text-[#ef233c]"
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
                                            className="w-5 text-sky-500"
                                        />       
                                        Todos
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <input type="search" id="location-search" className="w-64 p-2.5 z-20 text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white" placeholder="Búsqueda por nombre..." />
                </div>
            </div>
        </form>
    </div>
  )
})
