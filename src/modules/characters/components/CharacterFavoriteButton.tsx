import { FC } from 'react';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { CharacterResponse, useCharacterFavorite, useFavoriteStore } from '..';

interface Props {
    character: CharacterResponse;
}

export const CharacterFavoriteButton:FC<Props> = ({ character }) => {

    const { hasCharacter } = useFavoriteStore();
    const { onAddFavorite, onRemoveFavorite } = useCharacterFavorite();

    return (
        <>
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
        </>
    )
}
