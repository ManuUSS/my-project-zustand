import { SunIcon } from "@heroicons/react/24/outline"


export const ModeButton = () => {
  return (
    <div className="fixed right-0 px-8 py-2">
        <button 
            id="dropdown-button" 
            data-dropdown-toggle="dropdown-menu" 
            data-dropdown-placement="right" 
            className="p-3 bg-white border border-gray-200 rounded-full shrink-0 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" 
            type="button"
        > 
            <SunIcon 
                width={ 18 }
                color="#fabf0c"
            />
        </button>
    </div>
  )
}
