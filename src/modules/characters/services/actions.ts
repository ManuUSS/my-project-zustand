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
    await delay( 30000 );
    const { data } = await charactersApi.get<CharacterResponse[]>('/characters', { params });

    return data;

}

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));