import { useQueryClient } from '@tanstack/react-query';
import { CharacterResponse } from '..'

interface Props {
    character?: CharacterResponse;
}

export const useCharacter = ({ character }:Props) => {

    const queryClient = useQueryClient();

    const onPresetData = () => {
        if( !character ) return;
        queryClient.setQueryData(
            ['characters', character.id],
            character
        )
    }

    const getCharacterData = ( id: number ): CharacterResponse => {
        const characterData = queryClient.getQueryData<CharacterResponse>(['characters', id ])!;
        return characterData;
    }

    return {
        onPresetData,
        getCharacterData
    }

}
