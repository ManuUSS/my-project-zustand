import { FC } from 'react';
import { StopIcon } from '@heroicons/react/24/solid';
import { CardButtons, CardHeaderInfo, CharacterResponse, validateStatus } from '..';
import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
    character: CharacterResponse
}

/**
 * This component displays information about a character, including their name, series, status, description, and image.
 *
 * @component
 *
 * @param {Object} Props - The component's props.
 * @param {Object} character - An object representing the character's details.
 * @return {JSX.Element} The rendered CharacterCard component.
 */
export const CharacterCard:FC<Props> = ({ character }):JSX.Element => {

    const clientQuery = useQueryClient();
    const navigate = useNavigate();

    const onPresetData = () => {
        clientQuery.setQueryData(
            ['characters', character.id ],
            character
        )
    }


    return (
        <article 
            className="max-w-sm bg-gray-50 overflow-hidden border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-800 fade-in"
            onMouseEnter={ onPresetData }
        >
            <div 
                className="overflow-hidden cursor-pointer"
                onClick={() => navigate(`/character/${ character.id }`)}
            >
                <img 
                    className="rounded-t-lg object-cover h-52 w-full hover:scale-110 ease-in duration-300" 
                    src={ character.image } 
                    alt={ character.name } 
                />
            </div>
            <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                    <CardHeaderInfo 
                        charName={ character.name }
                        charSerie={ character.serie }
                    />
                    <StopIcon 
                        className={`w-5 ${ validateStatus( character.status )}`} 
                    />
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-slate-300">
                    { 
                        ( character.about.length > 125 ) 
                        ? character.about.slice( 0, 125 ) + "..."
                        : character.about
                    }
                </p>
                <CardButtons character={ character } />
            </div>
        </article>
    )
}
