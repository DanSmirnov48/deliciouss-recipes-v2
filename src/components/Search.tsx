import { useState } from "react";
import { Input } from "./ui/input";
import { SearchIcon } from "lucide-react";
import useDebounce from "@/hooks/useDebounce";
import { useSearchRecipes } from "@/lib/react-query/queries";

const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const debouncedSearch = useDebounce(searchValue, 900);
  const {
    data,
    isLoading: recipesLoading,
    isError,
  } = useSearchRecipes(debouncedSearch);

  return (
    <div className="flex flex-col flex-1 items-center bg-red-100 w-full">
      <div className="flex gap-1 px-4 w-full rounded-lg bg-dark-4">
        <SearchIcon className="text-white h-6 w-6 m-auto" />
        <Input
          type="text"
          placeholder="Search"
          className="h-12 bg-dark-4 border-none placeholder:text-light-2 placeholder:opacity-50 text-white focus-visible:ring-0 focus-visible:ring-offset-0 ring-offset-0"
          value={searchValue}
          onChange={(e) => {
            const { value } = e.target;
            setSearchValue(value);
          }}
        />
      </div>
      {recipesLoading && <p>Loading...</p>}
      {isError && <p>Error fetching recipes</p>}
      {data && (
        <div className="mt-4">
          <h1 className="text-xl font-bold mb-2">Recipes</h1>
          <ul>
            {data.map((recipe: any) => (
              <li key={recipe.id}>{recipe.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;
