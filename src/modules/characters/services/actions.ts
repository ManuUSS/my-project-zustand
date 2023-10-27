import { CharacterResponse, charactersApi } from "..";

interface GetProductsOptions {
    filterKey?: string;
    id?: number;
}

export const getCharacters = async ({ filterKey }:GetProductsOptions ):Promise<CharacterResponse[]> => {
    
    const params = new URLSearchParams();
    
    if( filterKey ) {
        params.append('serie', filterKey );
    }
    const { data } = await charactersApi.get<CharacterResponse[]>('/characters', { params });
    await delay( 5000 );

    return data;

}

const delay = (ms:number) => new Promise(res => setTimeout(res, ms));