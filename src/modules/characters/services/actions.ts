import { CharacterLike, CharacterResponse, charactersApi } from "..";

interface GetCharacterOptions {
    filterKey?: string;
    id?: number;
}

/**
 * Retrieves a list of characters from the API based on optional filtering criteria.
 *
 * @async
 * @param {Object} options - The options object containing an optional filter key.
 * @param {string} options.filterKey - (Optional) A filter key to specify a series for filtering characters.
 * @returns {Promise<CharacterResponse[]>} A promise that resolves with an array of character information.
 * @throws {Error} If there is an issue with the API request.
 */
export const getCharacters = async ({ filterKey }:GetCharacterOptions ):Promise<CharacterResponse[]> => {
    
    // <--- URL Params to filter response --->
    const params = new URLSearchParams();

    if( filterKey ) {
        params.append('serie', filterKey );
    }

    // <--- Performs API petition --->
    const { data } = await charactersApi.get<CharacterResponse[]>('/characters', { params });
    // <--- Simulates a delay --->
    await delay( 5000 );
    return data;

}

/**
 * Retrieves character information from the API based on the provided character ID.
 *
 * @async
 * @param {Object} options - The options object containing the character ID.
 * @param {string} options.id - The ID of the character to retrieve.
 * @returns {Promise<CharacterResponse>} A promise that resolves with the character information.
 * @throws {Error} If there is an issue with the API request.
 */
export const getCharacter = async ({ id }:GetCharacterOptions ):Promise<CharacterResponse> => {
    await delay( 3000 );
    // <--- Performs API petition --->
    const { data } = await charactersApi.get<CharacterResponse>(`/characters/${ id }`);
    return data;

}

/**
 * Creates a new character by sending the provided character data to the API.
 *
 * @async
 * @param {CharacterLike} character - The character data to be created.
 * @returns {Promise<CharacterResponse>} A promise that resolves with the newly created character information.
 * @throws {Error} If there is an issue with the API request.
 */
export const newCharacter = async ( character: CharacterLike ):Promise<CharacterResponse> => {

    await delay( 5000 );
    
    // <--- Performs API petition --->
    const { data } = await charactersApi.post<CharacterResponse>('/characters', character );

    return data;
}

/**
 * Creates a new character by sending the provided character data to the API.
 *
 * @async
 * @param {CharacterResponse} character - The character data to be created.
 * @param {number} id - The character's id.
 * @returns {Promise<CharacterResponse>} A promise that resolves with the newly created character information.
 * @throws {Error} If there is an issue with the API request.
 */
export const editCharacter = async ( character: CharacterResponse, id: number ):Promise<CharacterResponse> => {

    await delay( 5000 );
    
    // <--- Performs API petition --->
    const { data } = await charactersApi.patch<CharacterResponse>(`/characters/${ id }`, character );

    return data;
}

export const deleteCharacter = async ( character: CharacterResponse ) => {

    // <--- Performs API petition --->
    await charactersApi.delete(`/characters/${ character.id }`);
    // <--- Simulates a delay --->
    await delay( 5000 );

    return character;
}

export const delay = (ms:number) => new Promise(res => setTimeout(res, ms));