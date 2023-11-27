import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getDesert, getRecipies } from "./fucntions";

export const useSearchRecipes = (searchTerm: string) => {
    return useQuery({
        queryKey: ["useSearchRecipes", searchTerm],
        queryFn: async () => getRecipies(searchTerm),
        enabled: !!searchTerm,
    });
};

export const useGetDesertRecipies = () => {
    return useQuery({
        queryKey: ["useGetDesertRecipies"],
        queryFn: async () => getDesert(),
    });
};

// export const useGetRandomRecipies = (number: number = 9) => {
//     return useQuery({
//         queryKey: ["useGetRandomRecipies", number],
//         queryFn: async () => getRandomRecipes(number),
//         enabled: !!number,
//     });
// };

