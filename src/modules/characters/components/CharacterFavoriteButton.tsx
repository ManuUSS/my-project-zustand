import { FC } from 'react';
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid';
import { CharacterResponse, useCharacterFavorite, useFavoriteStore } from '..';

interface Props {
    character: CharacterResponse;
}

/**
 * Renders a favorite button for a character that allows users to add or remove the character from their favorites.
 *
 * @component
 * @param {Props} props - The component properties.
 * @param {Character} props.character - The character for which the favorite status is determined.
 * @returns {JSX.Element} The rendered favorite button.
 */
export const CharacterFavoriteButton:FC<Props> = ({ character }):JSX.Element => {

    // <--- Uses the Favorite Store | Zustand ---> 
    const { hasCharacter } = useFavoriteStore();
    // <--- Destructure properties from custom hook ---> 
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
