import { Recipe } from "@/types/index";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type RecipeItem = {
    recipe: Recipe;
  };
  
  type DesertState = {
    deserts: RecipeItem[];
    addDesert: (recipe: Recipe) => void;
    removeDesert: (recipeId: string) => void;
    clearDeserts: () => void;
    addAllDeserts: (deserts: Recipe[]) => void;
  };
  
  export const useDesertRecipe = create<DesertState>()(
    persist(
      (set) => ({
        deserts: [],
        addDesert: (recipe) =>
          set((state) => {
            return { deserts: [...state.deserts, { recipe }] };
          }),
        removeDesert: (id) =>
          set((state) => ({
            deserts: state.deserts.filter(
              (recipe) => recipe.recipe.id.toString() !== id
            ),
          })),
        clearDeserts: () => set({ deserts: [] }),
        addAllDeserts: (deserts) =>
          set((state) => ({
            deserts: [...state.deserts, ...deserts.map((recipe) => ({ recipe }))],
          })),
      }),
      {
        name: 'desert-recipe-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );