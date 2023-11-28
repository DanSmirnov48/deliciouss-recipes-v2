import { useDesertRecipe } from "@/hooks/useDesert";
import { useRandomRecipe } from "@/hooks/useRandomRecipe";
import { Recipe } from "@/types";
import { ExtendedRecipe } from "@/types/index";
import axios from "axios";
const SPOONACULAR_API_KEY = 'deb18101437e43d78803e73825ccfbac'

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

export async function getDesert() {

  const response = await axios.get(
    `https://api.spoonacular.com/recipes/random?apiKey=${SPOONACULAR_API_KEY}&number=9&tags=dessert`
  );
  console.log(response.data);
  return response.data;
};


// export async function getRandomRecipes(number: number = 9) {
//   try {
//     console.log("second")
//     const response = await axios.get(
//       `https://api.spoonacular.com/recipes/random?apiKey=${SPOONACULAR_API_KEY}&number=${number}`
//     );
//     const recipes: Recipe[] = response.data.recipes;
//     return recipes;
//   } catch (error) {
//     console.error('Error fetching recipes:', error);
//     throw error;
//   }
// }

export async function getRecipeDetails(id: number | undefined): Promise<ExtendedRecipe> {
  if (!id) {
    throw new Error("Recipe ID is required");
  }
  console.log("calls APIS")
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${SPOONACULAR_API_KEY}`
  );
  return response.data as ExtendedRecipe;
}