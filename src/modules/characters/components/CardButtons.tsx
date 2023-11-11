import { EllipsisVerticalIcon, StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { CharacterResponse, useCharacterFavorite, useFavoriteStore } from '..';
import { FC } from 'react';

interface Props {
    character: CharacterResponse;
    className?: string;
    starIconOutlineColor?: string;
    hideEllipsis?: boolean;
}

export const CardButtons:FC<Props> = ({  character, className, hideEllipsis = false, starIconOutlineColor }) => {

    const { hasCharacter } = useFavoriteStore();
    const { onAddFavorite, onRemoveFavorite } = useCharacterFavorite();

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
                        className={`cursor-pointer text-gray-400 dark:text-gray-600 ${ starIconOutlineColor && `text-${ starIconOutlineColor } dark:text-${ starIconOutlineColor }`}`} 
                        onClick={ () => onAddFavorite( character ) } 
                    /> 
                )
            }
            {
                !hideEllipsis && (
                    <EllipsisVerticalIcon
                        width={ 20 } 
                        className='text-gray-600 text-center dark:text-slate-300 cursor-pointer'
                    />
                )
            }
            
        </div>
    )
}
