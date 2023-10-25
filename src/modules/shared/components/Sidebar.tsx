import { PlusIcon, HeartIcon, HandThumbDownIcon, HandThumbUpIcon, UsersIcon } from "@heroicons/react/24/outline";

/**
 * 
 * @returns 
 */
export const Sidebar = () => {
    return (
        <aside id="sidebar" 
            className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" 
            aria-label="Sidebar"
        >   
        <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
            <ul className="space-y-2 text-lg">
                <li>
                    <button 
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                    >
                        <UsersIcon className="w-5 text-teal-500" />
                        <span className="ml-3">Lista de personajes</span>
                    </button>
                </li>
                <li>
                    <button 
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                    >
                        <HandThumbUpIcon className="w-5 text-teal-500" />
                        <span className="ml-3">Personajes vivos</span>
                    </button>
                </li>
                <li>
                    <button 
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                    >
                        <HandThumbDownIcon className="w-5 text-teal-500" />
                        <span className="ml-3">Personajes muertos</span>
                    </button>
                </li>
                <li>
                    <button 
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                    >
                        <HeartIcon className="w-5 text-teal-500" />
                        <span className="ml-3">Mis favoritos</span>
                    </button>
                </li>
                <li>
                    <button 
                        className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                    >
                        <PlusIcon className="w-5 text-teal-500"/>
                        <span className="ml-3">Agregar nuevo</span>
                    </button>
                </li>
            </ul>
        </div>
        </aside>
    )
}
