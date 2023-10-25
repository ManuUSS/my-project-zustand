import { CharacterResponse, charactersApi } from "..";

interface GetProductsOptions {
    filterKey?: string;
    id?: number;
}

export const getCharacters = async ({ filterKey }:GetProductsOptions ):Promise<CharacterResponse[]> => {
    
    const params = new URLSearchParams();
    
    if( filterKey ) {
        params.append('category', filterKey );
    }

    const { data } = await charactersApi.get<CharacterResponse[]>('/characters', { params });

    return data;

}