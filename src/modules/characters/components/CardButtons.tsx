import { EllipsisVerticalIcon, EyeIcon, PencilIcon, StarIcon as StarIconOutline, TrashIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { CharacterResponse, useCharacterFavorite, useFavoriteStore } from '..';
import { FC, useState } from 'react';
import { toast } from 'sonner';

interface Props {
    character: CharacterResponse;
    className?: string;
    hideEllipsis?: boolean;
}

export const CardButtons:FC<Props> = ({  character, className, hideEllipsis = false }) => {

    const { hasCharacter } = useFavoriteStore();
    const { onAddFavorite, onRemoveFavorite } = useCharacterFavorite();
    const [ menuOptions, setMenuOptions ] = useState<string>("hidden");

    const toggleMenu = () => {
        menuOptions === "hidden" ? setMenuOptions("visible") : setMenuOptions("hidden")
    }

    const onDelete = () => {
        toast('Hola', {
            action: {
                label: 'Eliminar',
                onClick: () => console.log('Eliminado...')
            },
            cancel: {
                label: 'Cancelar',
                onClick: () => console.log('Cancelando')
            }
        })
    }

    return (
        <div
            className={`flex justify-between items-center ${ className }`}
        >
            {
                hasCharacter( character.name ) 
                ? ( 
                    <StarIconSolid 
                        width={ 20 } 
                        className="cursor-pointer text-[#fabf0c]"
                        onClick={ () => onRemoveFavorite( character.name )}
                    /> 
                )
                : ( 
                    <StarIconOutline 
                        width={ 20 } 
                        className='cursor-pointer text-gray-400 dark:text-gray-600' 
                        onClick={ () => onAddFavorite( character ) } 
                    /> 
                )
            }
            {
                !hideEllipsis && (
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
            
        </div>
    )
}
