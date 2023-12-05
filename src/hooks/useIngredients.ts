import { ExtendedIngredient } from '@/types';
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type IngredientItem = {
    ingredient: ExtendedIngredient;
};

type IngredientState = {
    ingredients: ExtendedIngredient[];
    addIngredient: (ingredient: ExtendedIngredient) => void;
    removeIngredient: (id: number) => void;
    clearIngredients: () => void;
};

export const useIngredients = create<IngredientState>()(
    persist(
        (set) => ({
            ingredients: [],
            addIngredient: (ingredient) =>
                set((state) => {
                    return { ingredients: [...state.ingredients, ingredient] };
                }),
            removeIngredient: (id) =>
                set((state) => ({
                    ingredients: state.ingredients.filter((ingredient) => ingredient.id !== id),
                })),
            clearIngredients: () => set({ ingredients: [] }),
        }),
        {
            name: "recipe-ingredients-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);