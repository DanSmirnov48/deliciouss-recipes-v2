import { Recipe } from "@/types/index";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type RecipeItem = {
    recipe: Recipe;
  };
  
  type RecipeState = {
    recipes: RecipeItem[];
    addItem: (recipe: Recipe) => void;
    removeItem: (recipeId: string) => void;
    clearCart: () => void;
    addAllRecipes: (recipes: Recipe[]) => void;
  };
  
  export const useRandomRecipe = create<RecipeState>()(
    persist(
      (set) => ({
        recipes: [],
        addItem: (recipe) =>
          set((state) => {
            return { recipes: [...state.recipes, { recipe }] };
          }),
        removeItem: (id) =>
          set((state) => ({
            recipes: state.recipes.filter(
              (recipe) => recipe.recipe.id.toString() !== id
            ),
          })),
        clearCart: () => set({ recipes: [] }),
        addAllRecipes: (recipes) =>
          set((state) => ({
            recipes: [...state.recipes, ...recipes.map((recipe) => ({ recipe }))],
          })),
      }),
      {
        name: 'random-recipe-storage',
        storage: createJSONStorage(() => localStorage),
      }
    )
  );