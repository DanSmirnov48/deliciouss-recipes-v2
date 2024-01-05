import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRecipesMenu } from "@/hooks/useMenu";
import { Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const Favourite = () => {
  const { items, clearMenu, removeItem } = useRecipesMenu();
  return (
    <>
      <div className="flex flex-col flex-1 min-h-screen items-center">
        <div className="w-full px-2.5 my-20 max-w-screen-2xl">
          {items.length > 0 ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
              {items.map(({ recipe }) => (
                <Link to={`/recipe/${recipe.id}`}>
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
            <h1>No</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Favourite;