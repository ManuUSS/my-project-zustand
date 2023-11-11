import { FC, useState, useEffect } from 'react';
import { charactersActions } from '..';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface Props {
    url: string;
}

export const CharacterImage:FC<Props> = ({ url }) => {

    const [ isLoaded, setIsLoaded ] = useState<boolean>( false );
    const [ isZoomed, setIsZoomed ] = useState<boolean>( false );

    useEffect(() => {
        changeLoaded();
    }, [])
    
    useEffect(() => {

        if( isZoomed ) {
            document.querySelector('body')?.classList.add("overflow-hidden");
        } 
        
        return () => {
            document.querySelector('body')?.classList.remove("overflow-hidden");
        }

    }, [ isZoomed ])
    

    const changeLoaded = async () => {
        await charactersActions.delay( 800 );
        setIsLoaded( true );
    }

    const handleZoom = () => {
        setIsZoomed( true );
    }

    const closeModal = () => {
        setIsZoomed( false );
    }

    return (
        <>
            { 
                isLoaded 
                ? (        
                    <div 
                        className='rounded-md h-[190px] cursor-zoom-in overflow-hidden'
                        onClick={ handleZoom }
                    >
                        <img 
                            className="object-cover h-full w-full fade-in"
                            src={ url } 
                            alt="character-photo"
                        /> 
                    </div>
                )
                : (
                    <div 
                        className='flex items-center justify-center animate-pulse rounded-md h-[180px] bg-gray-300 dark:bg-gray-700 fade-out'
                    >
                        <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                            <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                        </svg>
                    </div>
                )
            }
            {
                isZoomed && (
                    <div 
                        className="w-screen h-screen fixed top-0 left-0 right-0 z-50 p-10 backdrop-blur-md bg-neutral-900/30 cursor-pointer"
                        onClick={ closeModal }
                    >
                        <div 
                            className="rounded-md bg-cover bg-no-repeat bg-center h-full flex flex-col p-4 gap-4 mx-auto w-[900px] cursor-auto"
                            style={{ backgroundImage: `url(${ url })`}}
                        >
                            <div className="flex justify-end">
                                <div
                                    className='bg-gray-700/50 rounded-full p-2'
                                >
                                    <XMarkIcon 
                                        width={ 16 } 
                                        className='text-white cursor-pointer'
                                        onClick={ closeModal }
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
}
