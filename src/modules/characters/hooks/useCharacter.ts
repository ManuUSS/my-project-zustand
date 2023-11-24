import { useEffect, useState } from 'react';
import { CharacterResponse, charactersActions, useCharactersStore,} from '..'
import { useQuery } from '@tanstack/react-query';

interface Props {
    characterId: number;
}

/**
 * A custom hook for fetching character data using Tanstack Query.
 *
 * @param {Object} props - The component props.
 * @param {string} props.characterId - The ID of the character to fetch.
 * @returns {Object} An object containing character data and loading status.
 * @property {CharacterResponse | undefined} data - The fetched character data.
 * @property {boolean} isFetching - A boolean indicating whether the query is currently fetching data.
 */
export const useCharacter = ({ characterId }:Props) => {

    // <--- Reads character's store | Zustand ---> 
    const charList = useCharactersStore(( store ) => store.mainList );
    // <--- Local random characters ---> 
    const [ randomChars, setRandomChars ] = useState<CharacterResponse[]>( [] );
    // <--- Query Client | Tanstack Query ---> 
    const { data, isFetching } = useQuery({
        queryKey: ['characters', characterId ],
        queryFn: () => charactersActions.getCharacter({ id: characterId }),
        staleTime: 1000 * 60 * 10
    });

    // <--- Local Effect Handler ---> 
    useEffect(() => {
        getRandomCharacters();
        window.scrollTo(0,0);
    }, [ characterId, data ])

    useEffect(() => {
        if( data ){
            document.title = `Zest | ${ data?.name }`;
        } else {
            document.title = `Zest | Cargando...`;
        }
    }, [ data ])
    

    /**
     * Generates a random selection of characters from the provided character list.
     * Updates the state with the randomly selected characters.
     *
     * @function
     * @returns {void}
     */
    const getRandomCharacters = ():void => {
        if( !charList || !data ) return;
        let nums = new Set<number>();
        let numberCharacters = 5;
        let length = charList.length - 1;
        const newCharList:CharacterResponse[] = [];
        
        for ( let index = 0; index < numberCharacters; index++ ) {
            // <--- Generates a new random number ---> 
            const randomNumber = Math.floor( Math.random() * ( length ) );
            // <--- Validates if current character is equal to random number ---> 
            if( randomNumber === characterId ) {
                index--;
                continue;
            }
            nums.add( randomNumber );
        }
    
        Array.from( nums ).forEach(( num, index ) => newCharList[ index ] = charList[ num ]);
    
        setRandomChars( newCharList );
    }

    return {
        data,
        randomChars,
        isFetching
    }

}
