import { useEffect, useState } from 'react';
import { CharacterResponse, useCharactersStore } from '..'

interface Props {
    characterId: number;
}

export const useCharacter = ({ characterId }:Props) => {

    const { mainList } = useCharactersStore();
    const [ character, setCharacter ] = useState<CharacterResponse | undefined>( undefined );

    useEffect(() => {
        getCharactertById();
    }, [])
    

    const getCharactertById = () => {
        if( !mainList ) return;
        setCharacter(mainList.find(( char ) => char.id === characterId ));
    }

    return {
        character
    }

}
