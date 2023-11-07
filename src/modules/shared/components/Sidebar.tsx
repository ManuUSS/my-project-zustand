import { PlusIcon, UsersIcon, CheckBadgeIcon, StarIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import { PATHS } from "../../../router/routes";

/**
 * 
 * @returns 
 */
export const Sidebar = () => {

    const validateActiveLink = ( value: boolean ): string => {
        return value 
        ? "flex items-center p-2 text-sky-600 rounded-lg w-full bg-gray-200 dark:bg-gray-900"
        : "flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 w-full"
    }

    return (
        <aside id="sidebar" 
            className="fixed top-0 left-0 shadow-md z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" 
            aria-label="Sidebar"
        >   
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-[#212C3B] ">
                <h1 className="text-center text-2xl border-b-2 border-b-sky-500 text-sky-600 dark:border-b-sky-200 dark:text-sky-200 pb-2 mb-2 select-none">Zest</h1>
                <ul className="space-y-2 text-lg">
                    <li>
                        <NavLink
                            to="" 
                            className={ ({ isActive }) => validateActiveLink( isActive )}
                        >
                            <UsersIcon className="w-5 text-sky-600 dark:text-sky-300" />
                            <span className="ml-3 dark:text-slate-200">Lista de personajes</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={ PATHS["JJK"] }
                            className={ ({ isActive }) => validateActiveLink( isActive )}
                        >
                            <CheckBadgeIcon className="w-5 text-sky-600 dark:text-sky-300" />
                            <span className="ml-3 dark:text-slate-200">Jujutsu Kaisen</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={ PATHS["DemonSlayer"] }
                            className={ ({ isActive }) => validateActiveLink( isActive )}
                        >
                            <CheckBadgeIcon className="w-5 text-sky-600 dark:text-sky-300" />
                            <span className="ml-3 dark:text-slate-200">Demon Slayer</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={ PATHS["HxH"]}
                            className={ ({ isActive }) => validateActiveLink( isActive )}
                        >
                            <CheckBadgeIcon className="w-5 text-sky-600 dark:text-sky-300" />
                            <span className="ml-3 dark:text-slate-200">Hunter X Hunter</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to="my-favorites"
                            className={ ({ isActive }) => validateActiveLink( isActive )}
                        >
                            <StarIcon className="w-5 text-sky-600 dark:text-sky-300" />
                            <span className="ml-3 dark:text-slate-200">Mis favoritos</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink 
                            to={ PATHS["New"] }
                             className={ ({ isActive }) => validateActiveLink( isActive )}
                        >
                            <PlusIcon className="w-5 text-sky-600 dark:text-sky-300"/>
                            <span className="ml-3 dark:text-slate-200">Agregar nuevo</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </aside>
    )
}
