import { CharacterLike, CharacterResponse, charactersApi } from "..";

interface GetCharacterOptions {
    filterKey?: string;
    id?: number;
}

/**
 * Performs a GET Petition to Characters API
 * @param {{ filterKey }}
 * @returns { data } CharacterResponse
 */
export const getCharacters = async ({ filterKey }:GetCharacterOptions ):Promise<CharacterResponse[]> => {
    
    // <--- URL Params to filter response --->
    const params = new URLSearchParams();

    if( filterKey ) {
        params.append('serie', filterKey );
    }

    // <--- Performs API petition --->
    const { data } = await charactersApi.get<CharacterResponse[]>('/characters', { params });
    await delay( 5000 );
    return data;

}

/**
 * Performs a POST Petition to Characters API
 * @param { character } CharacterLike
 * @returns { data } CharacterResponse
 */
export const newCharacter = async ( character: CharacterLike ):Promise<CharacterResponse> => {
    throw new Error("Jui")
    await delay( 5000 );
    
    // <--- Performs API petition --->
    const { data } = await charactersApi.post<CharacterResponse>('/characters', character );

    return data;
}

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));