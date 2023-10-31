import { useEffect, useState } from 'react';
import { CharacterResponse, useCharactersStore } from '..'
import { useNavigate } from 'react-router-dom';

interface Props {
    characterId: number;
}

export const useCharacter = ({ characterId }:Props) => {

    // <--- Main Store | Zustand --->
    const { mainList } = useCharactersStore();
    // <--- Local State --->
    const [ character, setCharacter ] = useState<CharacterResponse | undefined>( undefined );
    const navigate = useNavigate();
    // <--- Triggers an effect --->
    useEffect(() => {
        getCharactertById();
    }, [])
    

   /**
    * Retrieves a character by their unique identifier (ID) and sets it as the currently selected character.
    * If the character with the specified ID is not found, it navigates to the home page.
    */
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
