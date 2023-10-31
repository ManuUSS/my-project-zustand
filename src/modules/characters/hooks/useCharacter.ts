import { useQuery } from '@tanstack/react-query';
import { charactersActions } from '..'

interface Props {
    characterId: number;
}

export const useCharacter = ({ characterId }:Props) => {

    const characterQuery = useQuery({
        queryKey: ['characters', characterId ],
        queryFn: () => charactersActions.getCharacter({ id: characterId }),
        staleTime: 1000 * 60 * 10
    });

    return {
        characterQuery
    }

}
