// import { useEffect, useState } from 'react';
import { /* CharacterResponse */ charactersActions, /*useCharactersStore */ } from '..'
// import { useNavigate } from 'react-router-dom';
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
