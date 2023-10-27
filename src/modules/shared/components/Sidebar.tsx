import { PlusIcon, UsersIcon, CheckBadgeIcon, StarIcon } from "@heroicons/react/24/outline";

/**
 * 
 * @returns 
 */
export const Sidebar = () => {
    return (
        <aside id="sidebar" 
            className="fixed top-0 left-0 shadow-md z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" 
            aria-label="Sidebar"
        >   
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50">
                <h1 className="text-center text-2xl border-b-2 border-b-sky-500 text-sky-600 pb-2 mb-2 select-none">Guía Zustand</h1>
                <ul className="space-y-2 text-lg">
                    <li>
                        <button 
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                        >
                            <UsersIcon className="w-5 text-sky-600" />
                            <span className="ml-3">Lista de personajes</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                        >
                            <CheckBadgeIcon className="w-5 text-sky-600" />
                            <span className="ml-3">Jujutsu Kaisen</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                        >
                            <CheckBadgeIcon className="w-5 text-sky-600" />
                            <span className="ml-3">Demon Slayer</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                        >
                            <CheckBadgeIcon className="w-5 text-sky-600" />
                            <span className="ml-3">Hunter X Hunter</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                        >
                            <StarIcon className="w-5 text-sky-600" />
                            <span className="ml-3">Mis favoritos</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 w-full"
                        >
                            <PlusIcon className="w-5 text-sky-600"/>
                            <span className="ml-3">Agregar nuevo</span>
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
