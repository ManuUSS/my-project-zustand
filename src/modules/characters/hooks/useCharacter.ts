import { useQueryClient } from '@tanstack/react-query';
import { CharacterResponse } from '..'

interface Props {
    character: CharacterResponse;
}

export const useCharacter = ({ character }:Props) => {

    const queryClient = useQueryClient();

    const onPresetData = () => {
        queryClient.setQueryData(
            ['characters', character.id],
            character
        )
    }

    return {
        onPresetData
    }

}
