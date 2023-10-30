import { CharacterLike, CharacterResponse, charactersApi } from "..";

interface GetCharacterOptions {
    filterKey?: string;
    id?: number;
}

export const getCharacters = async ({ filterKey }:GetCharacterOptions ):Promise<CharacterResponse[]> => {
    
    const params = new URLSearchParams();
    
    if( filterKey ) {
        params.append('serie', filterKey );
    }
    const { data } = await charactersApi.get<CharacterResponse[]>('/characters', { params });
    await delay( 5000 );
    return data;

}

export const newCharacter = async ( character: CharacterLike ):Promise<CharacterResponse> => {

    await delay( 5000 );
    const { data } = await charactersApi.post<CharacterResponse>('/characters', character );

    return data;
}

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));