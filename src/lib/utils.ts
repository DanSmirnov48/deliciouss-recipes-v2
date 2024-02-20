import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Star } from "@smastrom/react-rating";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ratingStyle = {
  itemShapes: Star,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};

export const defaultOptions = [
  { value: 'milk', label: 'Milk' },
  { value: 'eggs', label: 'Eggs' },
  { value: 'peanut', label: 'Peanut' },
  { value: 'soy', label: 'Soy' },
  { value: 'wheat', label: 'Wheat' },
  { value: 'fish', label: 'Fish' },
];

export const createOption = ({ label }: { label: string }) => ({
  label: label.charAt(0).toUpperCase() + label.slice(1).replace(/\W/g, ""),
  value: label.toLowerCase().replace(/\W/g, ""),
});