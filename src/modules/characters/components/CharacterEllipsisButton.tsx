import { createElement, useEffect, useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { EllipsisVerticalIcon, EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ToasterAction } from '../../shared/components';
import { CharacterResponse } from '..';

interface Props {
    character: CharacterResponse;
}

/**
 * Renders the ellipsis button and his respective pop over
 * Handles different actions related to characters
 * 
 * @component
 * @param {Props} Props - The component properties.
 * @param {Character} props.character - The character for which the favorite status is determined.  
 * @returns {JSX.Element}
 */
export const CharacterEllipsisButton:FC<Props> = ({ character }):JSX.Element => {

    // <--- Router functionalities --->
    const navigate = useNavigate();
    // <--- Pop Over State handler --->
    const [ menuOptions, setMenuOptions ] = useState<string>("hidden");

    // <--- State handler --->
    useEffect(() => {
      
      return () => {
        setMenuOptions("hidden");
      }
      
    }, [])

    /**
     * Toggles the visibility state of a menu between "visible" and "hidden".
     *
     * @function
     * @returns {void}
     */
    const toggleMenu = (): void => {
        // Toggle the menu visibility between "visible" and "hidden".
        menuOptions === "hidden" ? setMenuOptions("visible") : setMenuOptions("hidden");
    };

    /**
     * Initiates a confirmation toast for deleting a character.
     * Displays a custom toast notification with a confirmation message and character details.
     *
     * @function
     * @returns {void}
     */
    const onDelete = ():void => {
        toast.custom(( t ) => (
            createElement(
                ToasterAction,
                {
                    message: `¿Seguro que desea eliminar a ${ character.name }?`,
                    description: 'Esta acción es irreversible',
                    character,
                    t
                }
            )   
        ),{
            duration: 150000000
        }
        )
    }

    return (
        <div className='relative'>
            <EllipsisVerticalIcon
                id="dropdown-button-2" 
                data-dropdown-toggle="dropdown-menu-options" 
                width={ 20 } 
                className='text-gray-600 text-center dark:text-slate-300 cursor-pointer'
                onClick={ toggleMenu }
            />
            <div 
                id="dropdown-menu-options" 
                className={`${ menuOptions } absolute z-10 -top-[90px] -right-[5px] bg-white rounded-lg shadow-md border w-44 dark:bg-gray-700 dark:border-gray-600`}
            >   
                <ul className="py-2 text-gray-700 dark:text-gray-200" aria-labelledby="dropdown-button-2">
                    <li>
                        <button 
                            type="button" 
                            className="inline-flex w-full px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" 
                            role="menuitem"
                            onClick={ () => navigate(`/edit-character/${ character.id }`) }
                        >
                            <div className="inline-flex items-center gap-2 gap-2">     
                                <PencilIcon
                                    className="w-5"
                                />   
                                Editar
                            </div>
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className="inline-flex w-full px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" 
                            role="menuitem"
                            onClick={ () => navigate(`/character/${ character.id }`) }
                        >
                            <div className="inline-flex items-center gap-2">
                                <EyeIcon
                                    className="w-5"
                                />        
                                Ver detalles
                            </div>
                        </button>
                    </li>
                    <li>
                        <button 
                            type="button" 
                            className="inline-flex w-full px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600" 
                            role="menuitem"
                            onClick={ onDelete }
                        >
                            <div className="inline-flex items-center gap-2">
                                <TrashIcon
                                    className="w-5"
                                />
                                Eliminar
                            </div>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
