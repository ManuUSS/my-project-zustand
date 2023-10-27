import { PlusIcon, UsersIcon, CheckBadgeIcon, StarIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

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
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <h1 className="text-center text-2xl border-b-2 border-b-sky-500 text-sky-600 dark:border-b-sky-200 dark:text-sky-200 pb-2 mb-2 select-none">Guía Zustand</h1>
                <ul className="space-y-2 text-lg">
                    <li>
                        <Link
                            to="/" 
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 w-full"
                        >
                            <UsersIcon className="w-5 text-sky-600 dark:text-sky-300" />
                            <span className="ml-3 dark:text-slate-200">Lista de personajes</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="/jjk"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 w-full"
                        >
                            <CheckBadgeIcon className="w-5 text-sky-600 dark:text-sky-300" />
                            <span className="ml-3 dark:text-slate-200">Jujutsu Kaisen</span>
                        </Link>
                    </li>
                    <li>
                        <button 
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 w-full"
                        >
                            <CheckBadgeIcon className="w-5 text-sky-600 dark:text-sky-300" />
                            <span className="ml-3 dark:text-slate-200">Demon Slayer</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 w-full"
                        >
                            <CheckBadgeIcon className="w-5 text-sky-600 dark:text-sky-300" />
                            <span className="ml-3 dark:text-slate-200">Hunter X Hunter</span>
                        </button>
                    </li>
                    <li>
                        <button 
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 w-full"
                        >
                            <StarIcon className="w-5 text-sky-600 dark:text-sky-300" />
                            <span className="ml-3 dark:text-slate-200">Mis favoritos</span>
                        </button>
                    </li>
                    <li>
                        <Link 
                            to="/new"
                            className="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 w-full"
                        >
                            <PlusIcon className="w-5 text-sky-600 dark:text-sky-300"/>
                            <span className="ml-3 dark:text-slate-200">Agregar nuevo</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
