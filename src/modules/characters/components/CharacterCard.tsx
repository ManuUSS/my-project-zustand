import { FC } from 'react';
import { EyeIcon } from '@heroicons/react/24/outline';
import { StopIcon } from '@heroicons/react/24/solid';
import { CharacterResponse, Status } from '..';

const textProof = `Es un profesor y uno de los hechiceros más poderosos de la serie. 
Su función principal es entrenar a los estudiantes en la Escuela Técnica de Hechicería de Tokio, 
así como liderarlos en la lucha contra las maldiciones y demonios que amenazan a la humanidad. Gojo destaca por su carisma, 
astucia y habilidades sobresalientes en el combate, especialmente debido a sus "Ojos Malditos", una habilidad especial que le otorga una ventaja sobrenatural en la lucha contra maldiciones`;


interface Props {
    character: CharacterResponse
}

/**
 * 
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
        <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
            <div>
                <img 
                    className="rounded-t-lg" 
                    src={ character.image } 
                    alt={ character.name } 
                />
            </div>
            <div className="p-5">
                <div className="flex justify-between items-center mb-2">
                    <div>
                        <h5 className="text-2xl font-bold tracking-tight text-gray-900">{ character.name }</h5>
                        <p className="">{ character.serie }</p>
                    </div>
                    <StopIcon 
                        className={`w-5 ${ validateStatus( character.status )}`} 
                    />
                </div>
                <p className="mb-3 font-normal text-gray-700">
                    { textProof.slice(0, 150) + "..."}
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
                        className="text-gray-600 hover:text-white border border-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center"
                    >
                        <EyeIcon width={ 12 } />
                    </button>
                </div>
            </div>
        </article>
    )
}
