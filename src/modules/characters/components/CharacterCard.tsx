import { FC, useState } from 'react';
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
     // <--- Loading image state ---> 
     const [ isLoaded, setIsLoaded ] = useState<boolean>( false );

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
                className={`overflow-hidden cursor-pointer ${ !isLoaded && "hidden" }`}
                onClick={() => navigate(`/character/${ character.id }`)}
            >
                <img 
                    className="rounded-t-lg object-cover h-52 w-full hover:scale-110 ease-in duration-300" 
                    src={ character.image } 
                    alt={ character.name } 
                    onLoad={ () => setIsLoaded( true ) }
                />
            </div>
            { 
                !isLoaded &&
                (
                    <div 
                        className='flex items-center justify-center animate-pulse rounded-md h-52 bg-gray-300 dark:bg-gray-700 fade-out'
                    >
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                )
            }
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
