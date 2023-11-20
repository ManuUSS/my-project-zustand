import { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { StopIcon } from '@heroicons/react/24/solid';
import { CardHeaderInfo, CharacterFavoriteButton, CharacterImage, CharacterPowerChip, CharacterRelated, ListHeader, getRandomCharacters, getStatusText, useCharacter, validateStatus } from '..';
import { Loader } from '../../shared/components';
import { useQueryClient } from '@tanstack/react-query';

export const CharacterPage = () => {

    const params = useParams();  
    const { id = '0' } = params;
    const queryClient = useQueryClient();
    const { data: character, isFetching } = useCharacter({ characterId: +id });

    useEffect(() => {
        window.scrollTo(0,0);
        document.title = `Zest | ${ character?.name }`;
    }, []);

    useEffect(() => {
        if( !character ) {
            id && queryClient.invalidateQueries({
                queryKey: ['characters', +id ]
            });
        }
    }, [ character, id ])
    

    return (
        <section className="list-container p-4">
            <ListHeader 
                title={ character?.name || "" } 
                hideSearcher 
                showBackButton
            />
            {
                isFetching ? ( <Loader /> )
                : character && (
                    <>
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
                            <div className='flex gap-4 overflow-x-scroll snap-proximity'>
                                { getRandomCharacters().map(( char ) => (
                                    <CharacterRelated key={ char.id } character={ char }  />
                                )) }
                            </div>
                        </div>
                    </>
                )
            }
        </section>
    )
}
