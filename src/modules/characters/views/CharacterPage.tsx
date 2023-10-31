import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { ListHeader, Status, useCharacter } from '..';
import { StopIcon } from '@heroicons/react/24/solid';

export const CharacterPage = () => {

  const params = useParams();  
  const { id = '0' } = params;

  const { getCharacterData } = useCharacter({});
  const [ character ] = useState( getCharacterData( +id! ) );
  
  const validateStatus = ( status: Status ) => {
    if( status === "alive" )
        return "text-green-500"

    else if ( status === "dead" )
        return "text-red-500"

    return "text-slate-400"
  }

  return (
    <section className="list-container p-4">
        <ListHeader title={ character?.name || "" } hideSearcher />
        <div className='grid grid-cols-3'>
            <div className="border rounded-md dark:border-gray-700 shadow-sm fade-in">
                <div className="flex items-center rounded-t-md overflow-hidden">
                    <img 
                        className="object-cover h-80 w-full"
                        src={ character?.image } 
                        alt={ character?.name } 
                    />
                </div>
                <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">{ character?.name }</h5>
                            <p className="dark:text-slate-300">{ character?.serie }</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <p className={ validateStatus( character?.status! ) }>{ character?.status.charAt(0).toUpperCase() + character?.status.substring( 1 )}</p>
                            <StopIcon className={`w-5 ${ validateStatus( character?.status! )}`} />
                        </div>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-slate-300">
                        { character?.about }
                    </p>
                    <div className='flex flex-wrap gap-1'>
                        {
                            character.powers && character.powers.map(
                                ({ name }) => (
                                    <div key={ name } className='bg-sky-100 text-sky-600 px-2 py-1 rounded-xl'>
                                        <p className='text-md font-semibold'>{ name }</p>
                                    </div>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
