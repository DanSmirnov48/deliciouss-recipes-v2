import { Link, useParams } from "react-router-dom";
import { Card } from "@/components/ui/card";
import Search from "@/components/Search";
import { useSearchRecipe } from "@/lib/react-query/queries";
import Filter from "@/components/Filter";
import useStringStore from "@/hooks/useFilter";
import { useEffect } from "react";

const Seacrh = () => {
  const { search } = useParams();
  const ignoredIngredients = useStringStore((state) => state.selectedOptions.map((item) => item.value).join(", "));
  const { data: recipes, isLoading, refetch } = useSearchRecipe(search!, ignoredIngredients);

  useEffect(() => { refetch() }, [ignoredIngredients])

  return (
    <div className="w-full my-20">
      <div className="my-10">
        <Search />
      </div>
      <div className="flex flex-row justify-end my-10">
        <Filter />
      </div>
      {!isLoading ? (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {recipes.map((recipe: any) => (
            <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
              <Card className="h-[400px] relative rounded-2xl">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 rounded-2xl"></div>
                <div className="absolute bottom-4 left-4 text-white text-opacity-90">
                  <h2 className="text-2xl font-semibold">{recipe.title}</h2>
                  <p className="mt-3 text-sm">{`Servings: ${recipe.servings}`}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      ) : (
        <>
          <h1>Loading</h1>
        </>
      )}
    </div>
  );
};

export default Seacrh;
