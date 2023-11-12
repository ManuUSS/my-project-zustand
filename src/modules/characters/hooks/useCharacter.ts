import { charactersActions,} from '..'
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

    const { data, isFetching } = useQuery({
        queryKey: ['characters', characterId ],
        queryFn: () => charactersActions.getCharacter({ id: characterId }),
        staleTime: 1000 * 60 * 10
    });

    return {
        data,
        isFetching
    }

}
