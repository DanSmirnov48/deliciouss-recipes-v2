import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getRandomRecipes, getRecipies } from "./fucntions";

export const useSearchRecipes = (searchTerm: string) => {
    return useQuery({
        queryKey: ["useSearchRecipes", searchTerm],
        queryFn: async () => getRecipies(searchTerm),
        enabled: !!searchTerm,
    });
};

export const useGetRandomRecipies = (number: number = 9) => {
    return useQuery({
        queryKey: ["useGetRandomRecipies", number],
        queryFn: async () => getRandomRecipes(number),
        enabled: !!number,
    });
};

