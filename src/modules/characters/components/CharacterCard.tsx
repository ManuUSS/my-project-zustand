import { FC } from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';
import { StopIcon } from '@heroicons/react/24/solid';
import { CharacterResponse, Status } from '..';

interface Props {
    character: CharacterResponse
}

/**
 * Displays the information about a character, image, name, description, etc
 * @param { character } 
 * @returns JSX.Element
 */
export const CharacterCard:FC<Props> = ({ character }) => {

    const validateStatus = ( status: Status ) => {
        if( status === "alive" )
            return "text-green-500"

        else if ( status === "dead" )
            return "text-red-500"

        return "text-slate-400"
    }

    return (
        <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-800 fade-in">
            <div className="overflow-hidden">
                <img 
                    className="rounded-t-lg object-cover h-48 w-96 hover:scale-110 ease-in duration-300" 
                    src={ character.image } 
                    alt={ character.name } 
                />
            </div>
            <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">{ character.name }</h5>
                        <p className="dark:text-slate-300">{ character.serie }</p>
                    </div>
                    <div className='flex'>
                        <p className={ validateStatus( character.status) }>{ character.status.charAt(0).toUpperCase() + character.status.slice(1, character.status.length )}</p>
                        <StopIcon 
                            className={`w-5 ${ validateStatus( character.status )}`} 
                        />
                    </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-slate-300">
                    { 
                        ( character.about.length > 125 ) 
                        ? character.about.slice( 0, 125 ) + "..."
                        : character.about
                    }
                </p>
                <div
                    className="flex justify-between items-center"
                >
                    <button
                        type="button"
                        className="text-white bg-sky-500 hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-sky-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        Guardar como favorito
                    </button>
                    <button
                        type="button"
                        className="text-gray-600 text-center dark:text-slate-300"
                    >
                        <EyeIcon width={ 15 } />
                    </button>
                </div>
            </div>
        </article>
    )
}
