import CreatableSelect from "react-select/creatable";
import makeAnimated from 'react-select/animated';
import { Item, useStringStore } from "@/hooks/useFilter";
import { createOption } from "@/lib/utils";

const Filter = () => {
    const animatedComponents = makeAnimated();
    const { items, selectedOptions, setSelectedOptions, addOption } = useStringStore();

    const handleCreate = (label: string) => {
        const newOption = createOption({ label });
        addOption(newOption);
        setSelectedOptions([...selectedOptions, newOption]);
    };

    return (
        <CreatableSelect
            options={items}
            isMulti
            placeholder="Ingredients to ingnore"
            className="min-w-[300px]"
            isClearable
            isSearchable
            onCreateOption={handleCreate}
            onChange={(newValues) => { setSelectedOptions(newValues as Item[]) }}
            value={selectedOptions}
            name="color"
            components={animatedComponents}
        />
    );
}

export default Filter