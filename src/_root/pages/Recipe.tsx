import { useGetRecipeDetails } from "@/lib/react-query/queries";
import { Clock, Timer, Users } from "lucide-react";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const params = useParams<{ id: string }>();
  const recipeId = +params.id!;
  const { data: recipe, isLoading, isError } = useGetRecipeDetails(recipeId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !recipe) {
    return <div>Error fetching recipe details</div>;
  }

  return (
    <div className="container mx-auto mt-8 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 mb-4 md:mb-0 bg-green-100">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="rounded-lg mb-4 w-full"
        />
        <div className="flex space-x-4">
          <button className="w-1/2 bg-blue-500 text-white py-2 rounded-lg">
            Button 1
          </button>
          <button className="w-1/2 bg-green-500 text-white py-2 rounded-lg">
            Button 2
          </button>
        </div>
      </div>
      <div className="w-full md:w-1/2 md:ml-8 bg-red-200">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
        <div className="my-5 flex flex-shrink space-x-4 bg-orange-400">
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col items-center">
            <Clock />
            <p className="font-bold mt-2">Ready Time</p>
            <p>{recipe.readyInMinutes} min</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0 flex flex-col items-center">
            <Timer />
            <p className="font-bold mt-2">Cook Time</p>
            <p>{recipe.cookingMinutes} min</p>
          </div>
          <div className="w-full md:w-1/3 flex flex-col items-center">
            <Users />
            <p className="font-bold mt-2">Servings</p>
            <p>{recipe.servings}</p>
          </div>
        </div>
        {recipe.diets && recipe.diets.length > 0 && (
          <div className="mt-4 flex flex-wrap space-x-4 items-baseline">
            <p className="font-bold mr-2">Diets:</p>
            {recipe.diets.map((diet, index) => (
              <div
                key={index}
                className="bg-blue-500 text-white py-1 px-2 rounded-lg mb-2"
              >
                {diet}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recipe;
