import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRecipesMenu } from "@/hooks/useMenu";
import { useIngredients } from "@/hooks/useIngredients";
import {
  useGetAllReviews,
  useGetRecipeDetails,
  useGetReview,
} from "@/lib/react-query/queries";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Clock, Timer, Users } from "lucide-react";
import { useParams } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ratingStyle } from "@/lib/utils";
import AddReviewForm from "@/components/AddReviewForm";

const Recipe = () => {
  const params = useParams<{ id: string }>();
  const recipeId = +params.id!;
  const { addIngredient } = useIngredients();
  const { items, addItem, removeItem } = useRecipesMenu();
  const { data: recipe, isLoading, isError } = useGetRecipeDetails(recipeId);
  const isRecipeInMenu = items.some((item) => item.recipe.id === recipeId);

  //----------REVIEWS
  const { data: reviews, isLoading: isAllReviewsLoading } =
    useGetReview(recipeId);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !recipe) {
    return <div>Error fetching recipe details</div>;
  }

  const topSection = () => {
    return (
      <div className="flex flex-col md:flex-row mt-8 min-h-[500px]">
        <div className="w-full md:w-1/2 mb-4 md:mb-0 bg-100 p-4">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="rounded-lg mb-4 w-full"
          />
          <div className="flex space-x-4">
            <Button
              className="w-1/2 text-light-2 text-base py-6"
              onClick={() =>
                isRecipeInMenu
                  ? removeItem(recipeId.toString())
                  : addItem(recipe)
              }
            >
              {isRecipeInMenu ? "Remove from Menu" : "Add to Menu"}
            </Button>
            <Button
              className="w-1/2 text-light-2 text-base py-6"
              onClick={() =>
                recipe.extendedIngredients.map((i) => addIngredient(i))
              }
            >
              Add to Shopping Cart
            </Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 md:ml-8 p-4">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p dangerouslySetInnerHTML={{ __html: recipe.summary }} />
          {recipe.diets && recipe.diets.length > 0 && (
            <div className="mt-4 flex flex-wrap space-x-4 items-baseline">
              <p className="font-bold mr-2">Diets:</p>
              {recipe.diets.map((diet, index) => (
                <Badge
                  key={index}
                  className="py-2 px-3 rounded-xl text-muted text-sm"
                >
                  {diet}
                </Badge>
              ))}
            </div>
          )}
          <div className="my-5 flex flex-shrink space-x-4">
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
        </div>
      </div>
    );
  };

  const middleSection = () => {
    return (
      <div className="flex flex-col md:flex-row mt-8">
        <div className="w-full md:w-2/3 mb-4 md:mb-0 p-4">
          {/* Left column 2/3 */}
          <div>
            <h2 className="text-2xl font-bold">Instructions</h2>
            <ol>
              {recipe.analyzedInstructions[0]?.steps.map((step) => (
                <li key={step.number} className="my-4">
                  <div className="inline-flex w-full items-center">
                    <h1 className="text-xl font-semibold text-dark-2">{`Step ${step.number}`}</h1>
                    <Separator className="ml-3 w-[90%] sm:max-w-[80%]" />
                  </div>
                  <p className="text-dark-4 font-normal">{step.step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="w-full md:w-1/3 md:ml-8 p-4">
          {/* ... (right column 1/3) */}
          <div>
            <h2 className="text-xl font-bold">Ingredients</h2>
            <ol>
              {recipe.extendedIngredients.map((item) => (
                <li key={item.id} className="my-3">
                  <p>{item.original}</p>
                  <Separator className="mt-1" />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  };

  const reviewSection = () => {
    return (
      <div className="flex flex-col md:flex-row my-16">
        <div className="w-full p-4">
          {isAllReviewsLoading ? (
            <>
              <h1>Loading reviews</h1>
            </>
          ) : (
            <>
              {reviews && reviews.length > 0 ? (
                reviews.map((review) => (
                  <Card key={review.id} className="my-3">
                    <CardHeader>
                      <CardTitle>
                        <Rating
                          value={review.rating}
                          readOnly
                          itemStyles={ratingStyle}
                          style={{ maxWidth: 100 }}
                        />
                      </CardTitle>
                    </CardHeader>
                    <CardContent>{review.comment}</CardContent>
                  </Card>
                ))
              ) : (
                <div className="w-full text-center py-10">
                  <h1 className="text-2xl">
                    Be the first to review{" "}
                    <span className="font-semibold">{recipe.title}</span>
                  </h1>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto mt-8">
      {/* First Section */}
      {topSection()}
      {/* Second Section */}
      {middleSection()}
      {/* Reviews Section */}
      <AddReviewForm recipe={recipe} />
      {reviewSection()}
    </div>
  );
};

export default Recipe;