import { useGetRandomRecipies } from "@/lib/react-query/queries";
import { Recipe } from "@/types";
import React, { useEffect, useState } from "react";
import {useRandomRecipe} from '../hooks/useRandomRecipe'

const RandomRecipies = () => {

  const {recipes} = useRandomRecipe()

  // const [recipes, setRecipes] = useState<any[]>();

  // useEffect(() => {
  //   const { data: recipies } = useGetRandomRecipies();
  //   setRecipes(recipies)
  // }, [])
  
  

  if (recipes.length > 1) return <h1>No Reciepes found</h1>;
  return (
    <div>
      <ul className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-7">
        {recipes.map((recipie: any) => (
          <li key={recipie.id} className="relative h-[380px] mb-28">
            <div className="flex w-full flex-col self-center overflow-hidden rounded-xl shadow-xl">
              {recipie.title}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RandomRecipies;
