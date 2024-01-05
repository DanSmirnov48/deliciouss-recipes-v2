import { Link, useNavigate, useParams } from "react-router-dom";
import { RecipeItem, useRandomRecipe } from "@/hooks/useRandomRecipe";
import { Card } from "@/components/ui/card";
import Search from "@/components/Search";
import { useSearchRecipe } from "@/lib/react-query/queries";

const Seacrh = () => {
  const { search } = useParams();
  const { data: recipes, isLoading } = useSearchRecipe(search!)

  return (
    <div className="w-full my-20">
      <div className="my-10">
        <Search />
      </div>
      {!isLoading ? (<>
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
                  <h2 className="text-2xl font-semibold">
                    {recipe.title}
                  </h2>
                  <p className="mt-3 text-sm">{`Servings: ${recipe.servings}`}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </>) : (<>
        <h1>Loading</h1>
      </>)}

    </div>
  );
};

export default Seacrh;
