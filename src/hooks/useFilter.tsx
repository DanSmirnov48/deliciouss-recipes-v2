import { defaultOptions } from "@/lib/utils";
import { create } from "zustand";

export interface Item {
    label: string;
    value: string;
}

interface StringStore {
    items: Item[];
    selectedOptions: Item[];
    setSelectedOptions: (values: Item[]) => void;
    addOption: (item: Item) => void;
    remove: (value: string) => void;
    clear: () => void;
}

const useStringStore = create<StringStore>((set) => ({
    items: [...defaultOptions],
    selectedOptions: [],
    setSelectedOptions: (values) => set({ selectedOptions: values }),
    addOption: (item) => set((state) => ({ items: [...state.items, item] })),
    remove: (value) =>
        set((state) => ({
            items: state.items.filter((item) => item.value !== value),
        })),
    clear: () => set({ items: [] }),
}));

export default useStringStore;