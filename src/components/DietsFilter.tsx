import { default as ReactSelect } from "react-select";
import makeAnimated from 'react-select/animated';
import { Item, useDientsStore } from "@/hooks/useFilter";

const DietsFilter = () => {
    const animatedComponents = makeAnimated();
    const { items, selectedOptions, setSelectedOptions } = useDientsStore();

    return (
        <ReactSelect
            options={items}
            isMulti
            placeholder="My Diets"
            className="min-w-[200px]"
            isClearable
            isSearchable
            onChange={(newValues) => { setSelectedOptions(newValues as Item[]) }}
            value={selectedOptions}
            name="color"
            components={animatedComponents}
        />
    );
}

export default DietsFilter