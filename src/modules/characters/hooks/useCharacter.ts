import { charactersActions,} from '..'
import { useQuery } from '@tanstack/react-query';

interface Props {
    characterId: number;
}

/**
 * Perfoms different functionalities
 * @param {{ characterId }} number
 * @returns Object
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
