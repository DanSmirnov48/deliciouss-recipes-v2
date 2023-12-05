import { Recipe } from "@/types/index";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type MenuItem = {
    recipe: Recipe;
};

type MenuState = {
    items: MenuItem[];
    addItem: (recipe: Recipe) => void;
    removeItem: (recipeId: string) => void;
    clearMenu: () => void;
};

export const useRecipesMenu = create<MenuState>()(
    persist(
        (set) => ({
            items: [],
            addItem: (recipe) =>
                set((state) => {
                    return { items: [...state.items, { recipe }] };
                }),
            removeItem: (id) =>
                set((state) => ({
                    items: state.items.filter(
                        (recipe) => recipe.recipe.id.toString() !== id
                    ),
                })),
            clearMenu: () => set({ items: [] }),
        }),
        {
            name: "recipe-menu-storage",
            storage: createJSONStorage(() => localStorage),
        }
    )
);
