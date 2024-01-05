import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAllReviews, getDesert, getRecipeDetails, getRecipies, getRecipeReview, addtoReview, deleteReview, searchRecipe } from "./fucntions";
import { INewReview } from "@/types";

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


export const useGetRecipeDetails = (id: number | undefined) => {
    return useQuery({
        queryKey: ["useGetRecipeDetails", id],
        queryFn: async () => getRecipeDetails(id),
        staleTime: 300000, // 5 minutes in milliseconds
    });
};

export const useSearchRecipe = (name: string) => {
    return useQuery({
        queryKey: ["useSearchRecipe"],
        queryFn: async () => searchRecipe(name),
    });
};

//---------------------------------------------------------------------------
export const useGetReview = (reviewId = 1) => {
    return useQuery({
        queryKey: ["getReview"],
        queryFn: async () => getRecipeReview(reviewId),
    });
};

export const useGetAllReviews = () => {
    return useQuery({
        queryKey: ["getAllReviews"],
        queryFn: async () => getAllReviews(),
    });
};

export const useAddReview = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (review: INewReview) => addtoReview(review),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["getReview"],
            });
        },
    });
};

export const useDeleteReview = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (reviewId: number) => deleteReview(reviewId),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["getReview"],
            });
        },
    });
};