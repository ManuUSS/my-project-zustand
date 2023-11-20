import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { StopIcon } from '@heroicons/react/24/solid';
import { CardHeaderInfo, CharacterFavoriteButton, CharacterImage, CharacterPowerChip, ListHeader, getRandomCharacters, getStatusText, useCharacter, useCharactersStore, validateStatus } from '..';

export const CharacterPage = () => {

    const params = useParams();  
    const { id = '0' } = params;
    const { data: character } = useCharacter({ characterId: +id });
    const charactersList = useCharactersStore(( store ) => store.mainList );

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
            <div className='grid grid-cols-3 gap-4 list-max mb-8'>
                <article className="border bg-gray-50 rounded-md dark:bg-gray-700 dark:border-gray-800 shadow-sm fade-in">
                    <div className="flex items-center rounded-t-md overflow-hidden relative">
                        <div className='absolute top-2 right-2 bg-gray-900/80 rounded-full p-2'>
                            <CharacterFavoriteButton character={ character! } />
                        </div>
                        <img 
                            className="object-cover h-80 w-full"
                            src={ character!.image } 
                            alt={ character!.name } 
                        />
                    </div>
                    <div className="p-5">
                        <div className="flex justify-between items-center mb-2">
                            <CardHeaderInfo 
                                charName={ character!.name }
                                charSerie={ character!.serie }
                            />
                            <div className='flex gap-1 items-center'>
                                <p className={ validateStatus( character!.status! ) }>{ getStatusText( character!.status) }</p>
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
                </article>
                <div className="col-span-2 grid grid-cols-2 grid-rows-3 gap-4">
                    {
                        character?.cover_photos?.map(( photo ) => (
                            <CharacterImage key={ photo } url={ photo } />
                        ))
                    }
                </div>
            </div>
            <div>
                <p className="after:border-b text-center text-2xl font-semibold mb-2 dark:text-slate-100">Personajes similares</p>
                <div className='flex gap-4 overflow-x-scroll'>
                    { getRandomCharacters( charactersList ).map(( char ) => (
                        <div 
                            key={ char.id }
                            className='bg-no-repeat bg-cover rounded-md shadow-sm min-w-[350px] min-h-[180px] border border-red-300'
                        >
                        </div>
                    )) }
                </div>
            </div>
        </section>
    )
}
