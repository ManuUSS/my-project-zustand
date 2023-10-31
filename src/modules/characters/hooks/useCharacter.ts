import { useEffect, useState } from 'react';
import { CharacterResponse, useCharactersStore } from '..'
import { useNavigate } from 'react-router-dom';

interface Props {
    characterId: number;
}

export const useCharacter = ({ characterId }:Props) => {

    const { mainList } = useCharactersStore();
    const [ character, setCharacter ] = useState<CharacterResponse | undefined>( undefined );
    const navigate = useNavigate();

    useEffect(() => {
        getCharactertById();
    }, [])
    

    const getCharactertById = () => {
        if( !mainList || !characterId ) return;
        const characterToSet = mainList.find(( char ) => char.id === characterId );
        if( !characterToSet )
        navigate("/", {
            replace: false
        });
        setCharacter(  characterToSet );
    }

    return {
        character
    }

}
