import { defaultIngredientsOptions, dietOptions } from "@/lib/utils";
import { create } from "zustand";

export interface Item {
    label: string;
    value: string;
}

interface IngredientsStore {
    items: Item[];
    selectedOptions: Item[];
    setSelectedOptions: (values: Item[]) => void;
    addOption: (item: Item) => void;
    remove: (value: string) => void;
    clear: () => void;
}

interface DietsStrore {
    items: Item[];
    selectedOptions: Item[];
    setSelectedOptions: (values: Item[]) => void;
}

const useStringStore = create<IngredientsStore>((set) => ({
    items: [...defaultIngredientsOptions],
    selectedOptions: [],
    setSelectedOptions: (values) => set({ selectedOptions: values }),
    addOption: (item) => set((state) => ({ items: [...state.items, item] })),
    remove: (value) =>
        set((state) => ({
            items: state.items.filter((item) => item.value !== value),
        })),
    clear: () => set({ items: [] }),
}));

const useDientsStore = create<DietsStrore>((set) => ({
    items: [...dietOptions],
    selectedOptions: [],
    setSelectedOptions: (values) => set({ selectedOptions: values }),
}));

export { useStringStore, useDientsStore };