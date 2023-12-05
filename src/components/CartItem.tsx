import { useIngredients } from "@/hooks/useIngredients";
import { ExtendedIngredient, ExtendedRecipe, Recipe } from "@/types";
import { X } from "lucide-react";

const CartItem = ({ ingredient }: { ingredient: ExtendedIngredient }) => {
  const { removeIngredient } = useIngredients();

  return (
    <div className="space-y-3 py-2">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col self-start">
            <span className="line-clamp-1 text-lg font-medium mb-1">
              {ingredient.nameClean}
            </span>

            <span className="line-clamp-1 text-xs capitalize text-muted-foreground">
              {ingredient.aisle}
            </span>
          </div>
        </div>

        <div className="flex flex-col space-y-1">
          <button
            onClick={() => removeIngredient(ingredient.id)}
            className="flex items-center gap-0.5 text-rose-800"
          >
            <X className="w-3 h-4" />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
