import { useEffect, useState } from 'react';
import { CharacterResponse, charactersActions, useCharactersStore,} from '..'
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

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

    const charList = useCharactersStore(( store ) => store.mainList );
    const params = useParams();  
    const { id = '0' } = params;
    const [ randomChars, setRandomChars ] = useState<CharacterResponse[]>( [] );
    const { data, isFetching } = useQuery({
        queryKey: ['characters', characterId ],
        queryFn: () => charactersActions.getCharacter({ id: characterId }),
        staleTime: 1000 * 60 * 10
    });

    useEffect(() => {
        getRandomCharacters();
        window.scrollTo(0,0);
        document.title = `Zest | ${ data?.name }`;
    }, [ id ])
    
    const getRandomCharacters = ():void => {
        if( !charList ) return;
        let nums = new Set<number>();
        let numberCharacters = 5;
        let length = charList.length - 1;
        const newCharList:CharacterResponse[] = [];
    
        while ( nums.size < numberCharacters ) {
            nums.add( Math.floor( Math.random() * ( length ) + 1) );
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
