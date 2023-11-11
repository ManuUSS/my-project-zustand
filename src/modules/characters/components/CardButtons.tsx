import { EllipsisVerticalIcon, StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { CharacterResponse, useCharacterFavorite, useFavoriteStore } from '..';
import { FC } from 'react';

interface Props {
    character: CharacterResponse;
    className?: string;
}

export const CardButtons:FC<Props> = ({  character, className }) => {

    const { hasCharacter } = useFavoriteStore();
    const { onAddFavorite, onRemoveFavorite } = useCharacterFavorite();

    return (
        <div
            className="flex justify-between items-center"
        >
            {
                hasCharacter( character.name ) 
                ? ( 
                    <StarIconSolid 
                        width={ 20 } 
                        className={`cursor-pointer text-[#fabf0c] ${ className }`}
                        onClick={ () => onRemoveFavorite( character.name )}
                    /> 
                )
                : ( 
                    <StarIconOutline 
                        width={ 20 } 
                        className="cursor-pointer text-gray-400 dark:text-gray-600" 
                        onClick={ () => onAddFavorite( character ) } 
                    /> 
                )
            }
            <EllipsisVerticalIcon
                width={ 20 } 
                className='text-gray-600 text-center dark:text-slate-300 cursor-pointer'
            />
        </div>
    )
}
