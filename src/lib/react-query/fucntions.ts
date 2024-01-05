import { useDesertRecipe } from "@/hooks/useDesert";
import { useRandomRecipe } from "@/hooks/useRandomRecipe";
import { INewReview, Recipe, Review } from "@/types";
import { ExtendedRecipe } from "@/types/index";
import axios from "axios";
const API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY

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
    `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=9&tags=dessert`
  );
  console.log(response.data);
  return response.data;
};

export async function searchRecipe(name: string) {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${name}&addRecipeInformation=true&number=12`
  );
  console.log(response.data.results);
  return response.data.results;
};


// export async function getRandomRecipes(number: number = 9) {
//   try {
//     console.log("second")
//     const response = await axios.get(
//       `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${number}`
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
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`
  );
  return response.data as ExtendedRecipe;
}


export async function getRecipeReview(reviewId: number = 1) {

  const response = await axios.get(`/api/reviews/?recipe=${reviewId}`);
  return response.data as Review[];
};

export async function getAllReviews() {

  const response = await axios.get(`/api/reviews`);
  return response.data as Review[];
};

export const addtoReview = async (review: INewReview) => {
  try {
    await axios.post(`/api/reviews`, review, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error adding review:', error);
  }
};

export const deleteReview = async (reviewId: number) => {
  try {
    await axios.delete(`/api/reviews/${reviewId}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error deleting review:', error);
  }
};