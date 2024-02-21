import { Card } from "./ui/card";
import { useEffect } from "react";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { useRandomRecipe } from "../hooks/useRandomRecipe";
//@ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { useGetRandomRecipies } from "@/lib/react-query/queries";

const RandomRecipies = () => {
  const { recipes, addAllRecipes } = useRandomRecipe();
  const { data, isFetching, refetch  } = useGetRandomRecipies()

  useEffect(() => {
    if (recipes.length === 0) {
      refetch();
      if(data && !isFetching){
        addAllRecipes(data)
      }
    }
  }, [recipes, isFetching])

  return (
    <div className="mt-10 max-w-full">
      <h1 className="text-3xl text-dark-4 text-center my-3 font-semibold">
        Pupolar Today
      </h1>
      {!isFetching && (
        <Splide
          options={{
            type: 'loop',
            autoplay: true,
            pauseOnHover: false,
            resetProgress: false,
            perPage: 3,
            arrows: true,
            pagination: true,
            drag: "free",
            gap: "3rem",
            breakpoints: {
              1600: { perPage: 3, gap: "1rem" },
              1300: { perPage: 2, gap: "1rem" },
              768: { perPage: 1, gap: "1rem", arrows: true },
            },
          }}
        >
          {recipes.map(({ recipe }, i) => {
            return (
              <SplideSlide key={i}>
                <Link to={`./recipe/${recipe.id}`}>
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
              </SplideSlide>
            );
          })}
        </Splide>
      )}
    </div>
  );
};

export default RandomRecipies;