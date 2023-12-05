import { Icons } from "@/components/icons"

export type Review = {
  id: number,
  rating: number,
  comment: string,
  recipe: number,
};

export type INewReview = {
  rating: number,
  comment: string,
  recipe: number,
};

export type Recipe = {
  id: number,
  title: string,
  servings: number,
  image: string,
  dishTypes: string[],
  diets: string[],
};

export type ExtendedIngredient = {
  id: number;
  aisle: string;
  name: string;
  nameClean: string;
  original: string;
  originalName: string;
  amount: number;
};

type Equipment = {
  id: number;
  name: string;
  localizedName: string;
  image: string;
};

type InstructionStep = {
  number: number;
  step: string;
  ingredients: ExtendedIngredient[];
  equipment: Equipment[];
  length?: {
      number: number;
      unit: string;
  };
};

type AnalyzedInstruction = {
  name: string;
  steps: InstructionStep[];
};

export type ExtendedRecipe = {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
  veryHealthy: boolean;
  cheap: boolean;
  veryPopular: boolean;
  preparationMinutes: number;
  cookingMinutes: number;
  extendedIngredients: ExtendedIngredient[];
  id: number;
  title: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  summary: string;
  cuisines: string[];
  dishTypes: string[];
  diets: string[];
  instructions: string;
  analyzedInstructions: AnalyzedInstruction[];
};


export interface NavItem {
  title: string
  to?: string
  disabled?: boolean
  external?: boolean
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
    | {
      to: string
      items?: never
    }
    | {
      to?: string
      items: NavItem[]
    }
  )

export type DashboardConfig = {
  mainNav: NavItem[]
  sidebarNav: SidebarNavItem[]
}