import { FC } from 'react';
import { CharacterResponse } from '..';
import './CharacterRelated.css';
import { useNavigate } from 'react-router-dom';

interface Props {
    character: CharacterResponse;
}

export const CharacterRelated:FC<Props> = ({ character }) => {

    const navigate = useNavigate();

    return (
        <div 
            className={'relative bg-no-repeat bg-cover flex items-center justify-center rounded-md shadow-sm min-w-[350px] min-h-[180px] mb-2 cursor-pointer card-character'}
            style={{ backgroundImage: `url(${ character.image })` }}
            onClick={ () => navigate(`/character/${ character.id }`) }
        >
            <p className={`z-50 text-3xl text-white font-bold text-center card-character__text`}>{ character.name }</p>
            <div className={`absolute bg-neutral-950/80 top-0 right-0 bottom-0 left-0 card-character__cover`}></div>
        </div>
    )
}
