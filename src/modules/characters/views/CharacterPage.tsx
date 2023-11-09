import { useParams } from 'react-router-dom'
import { StopIcon } from '@heroicons/react/24/solid';
import { CharacterImage, CharacterPowerChip, ListHeader, useCharacter, validateStatus } from '..';
import { useEffect } from 'react';

export const CharacterPage = () => {

    const params = useParams();  
    const { id = '0' } = params;
    const { data: character } = useCharacter({ characterId: +id });

    useEffect(() => {
        window.scrollTo(0,0);
        document.title = `Zest | ${ character?.name }`;
    }, []);


  return (
    <section className="list-container p-4">
        <ListHeader 
            title={ character?.name || "" } 
            hideSearcher 
            showBackButton
        />
        <article className='grid grid-cols-3 gap-4 list-max mb-8'>
            <div className="border rounded-md dark:bg-gray-700 dark:border-gray-800 shadow-sm fade-in">
                <div className="flex items-center rounded-t-md overflow-hidden">
                    <img 
                        className="object-cover h-80 w-full"
                        src={ character!.image } 
                        alt={ character!.name } 
                    />
                </div>
                <div className="p-5">
                    <div className="flex justify-between items-center mb-2">
                        <div>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">{ character!.name }</h5>
                            <p className="dark:text-slate-300">{ character!.serie }</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <p className={ validateStatus( character!.status! ) }>{ character!.status.charAt(0).toUpperCase() + character!.status.substring( 1 )}</p>
                            <StopIcon className={`w-5 ${ validateStatus( character!.status! )}`} />
                        </div>
                    </div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-slate-300">
                        { character?.about }
                    </p>
                    <div className='flex flex-wrap gap-1'>
                        {
                            character!.powers && character!.powers.map(
                                ({ name }) => (
                                    <CharacterPowerChip key={ name } powerName={ name }/>
                                )
                            )
                        }
                    </div>
                </div>
            </div>
            <div className="col-span-2 grid grid-cols-2 grid-rows-3 gap-4">
                {
                    character?.cover_photos?.map(( photo ) => (
                        <CharacterImage key={ photo } url={ photo } />
                    ))
                }
            </div>
        </article>
        <div className=''>
            <p className="after:border-b text-center text-2xl font-semibold mb-2 dark:text-slate-100">Personajes similares</p>
            <div className='flex gap-4'>
                <div 
                    className='bg-no-repeat bg-cover rounded-md shadow-sm w-full min-h-[180px] border border-red-300'
                >
                </div>
                <div 
                    className='bg-no-repeat bg-cover rounded-md shadow-sm w-full min-h-[180px] border border-red-300'
                >
                </div>
                <div 
                    className='bg-no-repeat bg-cover rounded-md shadow-sm w-full min-h-[180px] border border-red-300'
                >
                </div>
            </div>
        </div>
    </section>
  )
}
