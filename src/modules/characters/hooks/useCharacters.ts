import { useQuery } from "@tanstack/react-query";
import { charactersActions } from "..";
import { useCharactersStore } from "../../../plugins/CharactersContext";

interface Options {
    filterKey?: string;
    ctxSetKey?: "setMainList" | "setJJKList" | "setDemonSlayerList" | "setHxHList";
}

export const useCharacters = ({ filterKey, ctxSetKey = "setMainList" }:Options) => {
  
    const characterStore = useCharactersStore();
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
