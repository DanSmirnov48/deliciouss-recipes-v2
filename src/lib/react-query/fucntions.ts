import { useRandomRecipe } from "@/hooks/useRandomRecipe";
import { Recipe } from "@/types";
import axios from "axios";


export async function getRecipies(searchTerm: string) {
  if (searchTerm) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts`
      );

      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error("Error fetching data");
    }
  }
  return [];
}

export async function getVeggie() {

  const response = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${SPOONACULAR_API_KEY}&number=9&tags=vegetarian`
  );
  console.log(response.data);
  return response.data;

};


export async function getRandomRecipes(number: number = 9) {
  const { recipes, addAllRecipes } = useRandomRecipe();

  // Check if there are already recipes in Zustand
  if (recipes.length > 0) {
    console.log("first")
    return recipes;
  }

  try {
    console.log("second")
    const response = await axios.get(
      `https://api.spoonacular.com/recipes/random?apiKey=${SPOONACULAR_API_KEY}&number=${number}`
    );

    // Assuming the response data has a property named 'recipes' which is an array of recipe objects
    const recipes: Recipe[] = response.data.recipes;
    addAllRecipes(recipes);

    return recipes;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
}