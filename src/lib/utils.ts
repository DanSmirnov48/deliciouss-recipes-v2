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