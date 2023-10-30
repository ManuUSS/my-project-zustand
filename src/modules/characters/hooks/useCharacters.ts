import { useQuery } from "@tanstack/react-query";
import { charactersActions } from "..";
import { useCharactersStore } from "..";

interface Options {
    filterKey?: string;
    ctxSetKey?: "setMainList" | "setJJKList" | "setDemonSlayerList" | "setHxHList";
}

/**
 * Perfoms a GET Request to API
 * Modifies the local state
 * @param { { filterKey, ctxSetKey } } string | enum 
 * @returns isLoading, isError, isFetching
 */
export const useCharacters = ({ filterKey, ctxSetKey = "setMainList" }:Options) => {
  
    // <--- Zustand Store | Characters --->
    const characterStore = useCharactersStore();
    // <--- UseQuery | TansTack --->
    const { isLoading, isError, isFetching } = useQuery({
        queryKey: ['characters', { filterKey }],
        queryFn: () =>
            charactersActions.getCharacters({ filterKey })
            .then( data => {
                characterStore[ ctxSetKey ]( data );
                return data;
            })        
        ,
        staleTime: 1000 * 60 * 5
    });

    return {
        isLoading,
        isError,
        isFetching
    }

}
