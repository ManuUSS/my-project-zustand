import { FC, useState } from 'react';
import { CharacterResponse } from ".."

interface Props {
    character: CharacterResponse;
}

export const CharacterRelated:FC<Props> = ({ character }) => {

    const [ classT, setClassT] = useState( "hidden" )

    return (
        <div 
            className={'relative bg-no-repeat bg-cover flex items-center justify-center rounded-md shadow-sm min-w-[350px] min-h-[180px] mb-2 cursor-pointer'}
            style={{ backgroundImage: `url(${ character.image })` }}
            onMouseEnter={ () => setClassT("visible")}
            onMouseLeave={ () => setClassT("hidden") }
        >
            <p className={`${ classT } z-50 text-3xl text-white font-bold text-center transition-all duration-300 ease-in-out`}>{ character.name }</p>
            <div className={`${ classT } absolute bg-neutral-950/80 top-0 right-0 bottom-0 left-0 transition-all duration-150 ease-in-out`}></div>
        </div>
    )
}
