import { useQuery } from "@tanstack/react-query";
import { charactersActions } from "..";

interface Options {
    filterKey?: string;
}

export const useCharacters = ({ filterKey }:Options) => {
  
    const { isLoading, isError, data: characters = [], isFetching } = useQuery({
        queryKey: ['characters', { filterKey }],
        queryFn: () => charactersActions.getCharacters({ filterKey }),
        staleTime: 1000 * 60 * 5
    });
    
    return {
        isLoading,
        isError,
        isFetching,
        characters
    }

  
    return {

    }
}
