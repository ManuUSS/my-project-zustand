import { FC } from 'react';
import { CharacterResponse, } from '..';
import { CharacterFavoriteButton } from './CharacterFavoriteButton';
import { CharacterEllipsisButton } from './CharacterEllipsisButton';

interface Props {
    character: CharacterResponse;
    className?: string;
}

export const CardButtons:FC<Props> = ({  character, className }) => {
    
    return (
        <div
            className={`flex justify-between items-center ${ className }`}
        >
            <CharacterFavoriteButton character={ character }/>
            <CharacterEllipsisButton character={ character }/>
        </div>
    )
}
