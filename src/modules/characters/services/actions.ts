import { charactersApi } from "..";

interface GetProductsOptions {
    filterKey?: string;
    id?: number;
}

export const getCharacters = async ({ filterKey }:GetProductsOptions ) => {
    
    const params = new URLSearchParams();
    
    if( filterKey ) {
        params.append('category', filterKey );
    }

    const { data } = await charactersApi.get('/characters', { params });

    return data;

}