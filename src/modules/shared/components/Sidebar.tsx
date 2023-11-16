import { PlusIcon, UsersIcon, CheckBadgeIcon, StarIcon } from '@heroicons/react/24/outline';
import { PATHS } from '../../../router/routes';
import { SideItem } from './SideItem';

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
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-[#212C3B] ">
                <h1 className="text-center text-2xl border-b-2 border-b-sky-500 text-sky-600 dark:border-b-sky-200 dark:text-sky-200 pb-2 mb-2 select-none">Zest</h1>
                <ul className="space-y-2 text-lg">
                    <SideItem 
                        url=""
                        iconComponent={ <UsersIcon className="w-5 text-sky-600 dark:text-sky-300" /> }
                        text="Lista de personajes"
                    />
                    <SideItem 
                        url={ PATHS["JJK"] }
                        iconComponent={ <CheckBadgeIcon className="w-5 text-sky-600 dark:text-sky-300" /> }
                        text="Jujutsu Kaisen"
                    />
                    <SideItem 
                        url={ PATHS["DemonSlayer"] }
                        iconComponent={ <CheckBadgeIcon className="w-5 text-sky-600 dark:text-sky-300" /> }
                        text="Demon Slayer"
                    />
                    <SideItem 
                        url={ PATHS["HxH"] }
                        iconComponent={ <CheckBadgeIcon className="w-5 text-sky-600 dark:text-sky-300" /> }
                        text="Hunter X Hunter"
                    />
                    <SideItem 
                        url={ PATHS["Favorite"] }
                        iconComponent={ <StarIcon className="w-5 text-sky-600 dark:text-sky-300" /> }
                        text="Mis favoritos"
                    />
                    <SideItem 
                        url={ PATHS["New"] }
                        iconComponent={ <PlusIcon className="w-5 text-sky-600 dark:text-sky-300" /> }
                        text="Agregar nuevo"
                    />
                </ul>
            </div>
        </aside>
    )
}
