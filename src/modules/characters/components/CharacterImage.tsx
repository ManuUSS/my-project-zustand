import { FC, useState, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import img_holder from '../../../assets/placeholder-wire-image.webp';

interface Props {
    url: string;
}

export const CharacterImage:FC<Props> = ({ url }):JSX.Element => {

    // <--- Loading image state ---> 
    const [ isLoaded, setIsLoaded ] = useState<boolean>( false );
    // <--- Zoomed image state ---> 
    const [ isZoomed, setIsZoomed ] = useState<boolean>( false );
    
    useEffect(() => {

        if( isZoomed ) {
            document.querySelector('body')?.classList.add("overflow-hidden");
        } 
        
        return () => {
            document.querySelector('body')?.classList.remove("overflow-hidden");
        }

    }, [ isZoomed ])

    /**
     * Changes local zoomed state to true
     * @returns {void}
     */
    const handleZoom = ():void => {
        setIsZoomed( true );
    }

    /**
     * Changes local zoomed state to false
     * @returns {void}
     */
    const closeModal = ():void => {
        setIsZoomed( false );
    }

    return (
        <>
            <div 
                className={`rounded-md h-[190px] cursor-zoom-in overflow-hidden ${ isLoaded ? "" : "animate-pulse"}`}
                onClick={ handleZoom }
            >
                <img 
                    className={`object-cover h-full w-full fade-in`}
                    src={ isLoaded ? url : img_holder } 
                    alt="character-photo"
                    onLoad={ () => setIsLoaded(true) }
                /> 
            </div>  
            {
                isZoomed && (
                    <div 
                        className="w-screen h-screen fixed top-0 left-0 right-0 z-50 p-10 backdrop-blur-md bg-neutral-900/30"
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
